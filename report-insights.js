(() => {
  "use strict";

  const COLORS = ["#176d6a", "#d19a32", "#7a6da8", "#8aa29e"];
  const GEOGRAPHY_COLORS = ["#0d6662", "#56a89d", "#96c9c2", "#d19a32", "#7a6da8", "#aab8b5"];

  function prioritizeSharedStyles() {
    const stylesheet = document.querySelector('link[href="report-insights.css"]');
    if (stylesheet) document.head.append(stylesheet);
  }

  function addEnhancements(data) {
    const enhancements = window.reportInsightsEnhancements || {};
    const companyKey = Object.keys(enhancements).find((key) => document.title.includes(key));
    if (!companyKey) return data;
    const companyEnhancements = enhancements[companyKey];
    return {
      ...data,
      ...companyEnhancements,
      revenue: { ...data.revenue, ...companyEnhancements.revenue }
    };
  }

  function parseData() {
    const node = document.getElementById("report-insights-data");
    if (!node) {
      return window.reportInsightsData ? addEnhancements(window.reportInsightsData) : null;
    }
    try {
      const normalizedJson = node.textContent.replace(/([[:,])\.(\d)/g, "$10.$2");
      return addEnhancements(JSON.parse(normalizedJson));
    } catch (error) {
      console.error("Invalid report insights data", error);
      return null;
    }
  }

  function findMetadataValue(labels) {
    const pills = [...document.querySelectorAll(".meta .pill, .meta-row .pill")];
    const pill = pills.find((item) => labels.some((label) => item.textContent.trim().toLowerCase().startsWith(label)));
    return pill ? pill.textContent.split(":").slice(1).join(":").trim() : "";
  }

  function getCompanyName() {
    const explicitName = findMetadataValue(["company:"]);
    if (explicitName) return explicitName;
    return document.title.replace(/ Research Report.*$/i, "").trim();
  }

  function getReportDate() {
    const explicitDate = findMetadataValue(["report date:"]);
    if (explicitDate) return explicitDate;
    const preparedDate = document.body.textContent.match(/prepared on (\d{1,2} [A-Za-z]+ \d{4})/i);
    return preparedDate ? preparedDate[1] : findMetadataValue(["report month:"]);
  }

  function getCurrentPrice(data) {
    const explicitPrice = findMetadataValue(["current price:", "reference price:"]);
    if (explicitPrice) return explicitPrice;
    const high = Number(data.technical?.high52?.replace(/[^\d.]/g, ""));
    const distance = Number(data.technical?.fromHigh52?.match(/[\d.]+/)?.[0]);
    if (!Number.isFinite(high) || !Number.isFinite(distance)) return "Not available";
    const price = high * (1 - distance / 100);
    return `₹${price.toLocaleString("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
  }

  function normalizeMetadata(data) {
    const metadata = document.querySelector(".meta, .meta-row");
    if (!metadata) return;
    metadata.setAttribute("aria-label", "Report metadata");
    metadata.replaceChildren(...[
      ["Company", getCompanyName()],
      ["Report Date", getReportDate()],
      ["Current Price", getCurrentPrice(data)]
    ].map(([label, value]) => {
      const pill = document.createElement("span");
      pill.className = "pill";
      pill.textContent = `${label}: ${value}`;
      return pill;
    }));
  }

  function removeExpectedEbitdaMargin() {
    document.querySelectorAll("table").forEach((table) => {
      const rows = [...table.rows];
      rows.filter((row) => row.cells[0]?.textContent.trim().toLowerCase() === "expected ebitda margin")
        .forEach((row) => row.remove());
      const heading = [...table.querySelectorAll("th")]
        .find((cell) => cell.textContent.trim().toLowerCase() === "expected ebitda margin");
      if (!heading) return;
      const columnIndex = heading.cellIndex;
      rows.forEach((row) => {
        if (row.isConnected && row.cells[columnIndex]) row.deleteCell(columnIndex);
      });
    });
  }

  function metric(label, value, note = "", tone = "") {
    return `<div class="insight-tile ${tone}"><span>${label}</span><b>${value}</b>${note ? `<small>${note}</small>` : ""}</div>`;
  }

  function legend(labels) {
    return `<div class="chart-legend">${labels.map((label, index) => `<span><i style="background:${COLORS[index]}"></i>${label}</span>`).join("")}</div>`;
  }

  function stackedChart(chart) {
    const rows = chart.periods.map((period, rowIndex) => {
      const description = chart.values[rowIndex].map((value, index) => `${chart.labels[index]} ${value}%`).join(", ");
      const segments = chart.values[rowIndex].map((value, index) => `<i aria-hidden="true" style="width:${value}%;background:${COLORS[index]}" title="${chart.labels[index]} ${value}%"></i>`).join("");
      return `<div class="stack-row"><span>${period}</span><div class="stack-bar" role="img" aria-label="${period}: ${description}">${segments}</div></div>`;
    }).join("");
    return `<div class="compact-chart"><div class="chart-title">Business mix · 3-year change</div>${rows}${legend(chart.labels)}<p class="chart-note">${chart.note}</p></div>`;
  }

  function revenueChart(chart) {
    const periods = chart.ttm ? [...chart.periods, chart.ttm.period] : chart.periods;
    const values = chart.ttm ? [...chart.values, chart.ttm.revenue] : chart.values;
    const patValues = chart.ttm ? [...chart.pat, chart.ttm.pat] : chart.pat;
    const epsValues = chart.ttm ? [...chart.eps, chart.ttm.eps] : chart.eps;
    const maximum = Math.max(...values);
    const bars = values.map((value, index) => {
      const height = Math.max(12, Math.round((value / maximum) * 72));
      const ttmClass = periods[index] === chart.ttm?.period ? " ttm-bar" : "";
      return `<div class="revenue-bar${ttmClass}" style="height:${height}px"><b>${value.toLocaleString("en-IN")}</b><span>${periods[index]}</span></div>`;
    }).join("");
    const pat = financialSeries("PAT · ₹ Cr", patValues, periods);
    const eps = financialSeries("EPS · ₹", epsValues, periods);
    return `<div class="compact-chart financial-chart"><div class="chart-title">Revenue, PAT &amp; EPS · 5 years + TTM</div><div class="revenue-bars">${bars}</div><p class="chart-note">Revenue CAGR: <strong>${chart.cagr}</strong></p>${pat}${eps}<p class="financial-note">${chart.note}</p></div>`;
  }

  function financialSeries(label, values = [], periods = []) {
    const cells = values.map((value, index) => `<span title="${periods[index]}">${value.toLocaleString("en-IN")}</span>`).join("");
    return `<div class="financial-series"><b>${label}</b><div>${cells}</div></div>`;
  }

  function ownershipChart(chart) {
    const rows = chart.periods.map((period, rowIndex) => {
      const description = chart.values[rowIndex].map((value, index) => `${chart.labels[index]} ${value}%`).join(", ");
      const segments = chart.values[rowIndex].map((value, index) => `<i aria-hidden="true" style="width:${value}%;background:${COLORS[index]}" title="${chart.labels[index]} ${value}%"></i>`).join("");
      return `<div class="owner-row"><span>${period}</span><div class="stack-bar" role="img" aria-label="${period}: ${description}">${segments}</div></div>`;
    }).join("");
    return `<div class="compact-chart"><div class="chart-title">Shareholding pattern</div>${rows}${legend(chart.labels)}<p class="chart-note">${chart.note || "March-end snapshots."}</p></div>`;
  }

  function createDashboard(data) {
    const section = document.createElement("section");
    section.id = "company-dashboard";
    section.className = "insights-compact";
    section.innerHTML = `<h2>Company Snapshot &amp; Scorecard</h2><div class="insights-grid">${metric("Market cap", data.snapshot.marketCap)}${metric("TTM P/E", data.snapshot.pe)}${metric("PEG*", data.snapshot.peg, "TTM P/E ÷ TTM profit growth")}${metric("ROE", data.snapshot.roe)}${metric("ROCE", data.snapshot.roce)}${metric("Last quarter", data.snapshot.quarterRating, data.snapshot.quarterReason, data.snapshot.quarterTone)}${metric("PEAD", data.snapshot.pead, data.snapshot.peadNote, data.snapshot.peadTone)}${metric("Investment rating", `${data.rating}/100`, data.ratingLabel, "rating-tile")}</div><div class="chart-grid">${stackedChart(data.mix)}${revenueChart(data.revenue)}${ownershipChart(data.ownership)}</div><p class="method-note">* PEG is a simple trailing heuristic, not a consensus forward PEG. Overall rating combines business quality, growth, financial strength, valuation and execution risk. Charts use company filings and Screener snapshots; mix scopes are stated below each chart.</p>`;
    return section;
  }

  function swotQuadrant(title, items, tone) {
    return `<article class="swot-quadrant ${tone}"><h3>${title}</h3><ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul></article>`;
  }

  function createSwotSection(data) {
    const section = document.createElement("section");
    section.id = "swot-analysis";
    section.className = "insights-compact swot-section";
    section.innerHTML = `<h2>SWOT Analysis</h2><p class="section-intro">The points below bring together the operating, financial and valuation evidence discussed in this report.</p><div class="swot-grid">${swotQuadrant("Strengths", data.swot.strengths, "swot-strength")}${swotQuadrant("Weaknesses", data.swot.weaknesses, "swot-weakness")}${swotQuadrant("Opportunities", data.swot.opportunities, "swot-opportunity")}${swotQuadrant("Threats", data.swot.threats, "swot-threat")}</div></section>`;
    return section;
  }

  function strategicPanel(title, item, className) {
    return `<article class="strategic-panel ${className}"><div class="strategic-panel-head"><h3>${title}</h3><span>${item.verdict}</span></div><p>${item.text}</p></article>`;
  }

  function createStrategicPositioningSection(data) {
    const positioning = data.strategicPositioning;
    const section = document.createElement("section");
    section.id = "strategic-positioning";
    section.className = "insights-compact strategic-section";
    section.innerHTML = `<h2>Strategic Quality</h2><p class="section-intro">An evidence-based view of competitive advantage, external growth drivers and management execution.</p><div class="strategic-grid">${strategicPanel("MOAT", positioning.moat, "strategic-moat")}${strategicPanel("Global Tailwinds", positioning.tailwinds, "strategic-tailwinds")}${strategicPanel("Management Pedigree", positioning.management, "strategic-management")}</div>`;
    return section;
  }

  function customerPanel(customers) {
    const names = customers.names.length
      ? `<ul class="customer-list">${customers.names.map((name) => `<li>${name}</li>`).join("")}</ul>`
      : '<span class="disclosure-label">Names not disclosed</span>';
    return `<article class="market-panel"><h3>Marquee Customers</h3>${names}<p>${customers.text}</p></article>`;
  }

  function geographyPanel(geography) {
    if (!geography.values.length) {
      return `<article class="market-panel"><h3>Revenue by Geography</h3><div class="geography-unavailable" aria-hidden="true">Not disclosed</div><p>${geography.note}</p></article>`;
    }
    let cumulativeValue = 0;
    const gradientStops = geography.values.map((item, index) => {
      const start = cumulativeValue;
      cumulativeValue += item.value;
      return `${GEOGRAPHY_COLORS[index % GEOGRAPHY_COLORS.length]} ${start}% ${cumulativeValue}%`;
    }).join(", ");
    const legendItems = geography.values.map((item, index) => `<li><i style="background:${GEOGRAPHY_COLORS[index % GEOGRAPHY_COLORS.length]}"></i><span>${item.label}</span><b>${item.value}%</b></li>`).join("");
    const accessibleText = geography.values.map((item) => `${item.label} ${item.value}%`).join(", ");
    return `<article class="market-panel"><h3>Revenue by Geography</h3><div class="geography-content"><div class="donut-chart" style="background:conic-gradient(${gradientStops})" role="img" aria-label="${geography.period}: ${accessibleText}"><span>${geography.period}</span></div><ul class="donut-legend">${legendItems}</ul></div><p>${geography.note}</p></article>`;
  }

  function governancePanel(governance) {
    return `<article class="market-panel governance-panel governance-${governance.level}"><div class="market-panel-head"><h3>Corporate Governance</h3><span>${governance.label}</span></div><p>${governance.text}</p></article>`;
  }

  function createMarketContextSection(data) {
    const section = document.createElement("section");
    section.id = "market-context";
    section.className = "insights-compact market-context-section";
    section.innerHTML = `<h2>Customers, Geography &amp; Governance</h2><p class="section-intro">Disclosed commercial reach and relevant governance history. Undisclosed information is not inferred.</p><div class="market-context-grid">${customerPanel(data.marketContext.customers)}${geographyPanel(data.marketContext.geography)}${governancePanel(data.marketContext.governance)}</div>`;
    return section;
  }

  function enhanceSummary(data, main) {
    const summary = main.querySelector("#executive-summary, #summary");
    const coreView = summary?.querySelector(".callout");
    if (coreView && data.coreView) {
      coreView.innerHTML = `<strong>Core view:</strong> ${data.coreView}`;
    }
    if (summary && data.swot) {
      const swotSection = createSwotSection(data);
      summary.insertAdjacentElement("afterend", swotSection);
      if (data.strategicPositioning) {
        const strategicSection = createStrategicPositioningSection(data);
        swotSection.insertAdjacentElement("afterend", strategicSection);
        if (data.marketContext) {
          strategicSection.insertAdjacentElement("afterend", createMarketContextSection(data));
        }
      }
    }
  }

  function signedTone(value) {
    if (value.startsWith("+")) return "positive";
    if (value.startsWith("-")) return "negative";
    return "neutral";
  }

  function createTechnicalSection(data) {
    const technical = data.technical;
    const section = document.createElement("section");
    section.id = "technical-analysis";
    section.className = "insights-compact";
    const chartId = `price-fill-${document.title.replace(/\W/g, "").slice(0, 12)}`;
    const transformedPoints = technical.points.split(" ").map((point) => {
      const [x, y] = point.split(",").map(Number);
      return `${45 + x * 1.7},${18 + y * 2}`;
    }).join(" ");
    const lastPoint = transformedPoints.split(" ").at(-1).split(",");
    const areaPoints = `45,198 ${transformedPoints} 555,198`;
    const verticalGrid = [45, 172.5, 300, 427.5, 555].map((x) => `<line x1="${x}" y1="18" x2="${x}" y2="198"/>`).join("");
    const horizontalGrid = [18, 63, 108, 153, 198].map((y) => `<line x1="45" y1="${y}" x2="555" y2="${y}"/>`).join("");
    const dates = ["Sep ’25", "Dec ’25", "Mar ’26", "Jun ’26", "Sep ’26"];
    const dateLabels = dates.map((label, index) => `<text x="${[45, 172.5, 300, 427.5, 555][index]}" y="224" text-anchor="${index === 0 ? "start" : index === 4 ? "end" : "middle"}">${label}</text>`).join("");
    section.innerHTML = `<h2>Technical Analysis</h2><div class="technical-grid"><figure class="technical-chart market-price-chart"><div class="chart-toolbar"><div><b>Adjusted close</b><span>1Y · Weekly samples</span></div><span class="chart-status">Market trend</span></div><svg viewBox="0 0 600 240" role="img" aria-label="One-year adjusted stock-price trend from September 2025 to September 2026"><defs><linearGradient id="${chartId}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#0d6662" stop-opacity=".24"/><stop offset="1" stop-color="#0d6662" stop-opacity=".01"/></linearGradient></defs><g class="chart-gridlines">${verticalGrid}${horizontalGrid}</g><polyline class="price-area" points="${areaPoints}" fill="url(#${chartId})"/><polyline class="price-line" points="${transformedPoints}"/><circle class="last-price-dot" cx="${lastPoint[0]}" cy="${lastPoint[1]}" r="4"/><g class="chart-axis-labels">${dateLabels}<text x="45" y="13">High ₹${technical.chartHigh}</text><text x="555" y="213" text-anchor="end">Low ₹${technical.chartLow}</text></g></svg><figcaption class="technical-caption"><span>Approximate time axis</span><span>Through 11 Sep 2026</span></figcaption></figure><div class="technical-stats">${metric("1 month", technical.oneMonth, "Price return", signedTone(technical.oneMonth))}${metric("3 months", technical.threeMonth, "Price return", signedTone(technical.threeMonth))}${metric("1 year", technical.oneYear, "Price return", signedTone(technical.oneYear))}${metric("52-week high", technical.high52, technical.fromHigh52)}${metric("All-time high", technical.ath, technical.fromAth)}${metric("RSI (14)", technical.rsi, technical.rsiLabel, technical.rsiTone)}${metric("20 / 50 DMA", technical.dmaShort, technical.trend)}${metric("200 DMA", technical.dma200, technical.priceVs200)}</div></div><div class="callout ${technical.calloutTone}"><strong>Technical read:</strong> ${technical.read}</div><p class="method-note">Technical returns, adjusted-price highs, moving averages and RSI use Yahoo Finance daily data through 11 September 2026 or the nearest available session. Month labels are approximate because the stored sampled series does not include observation dates. ATH means the available Yahoo series. PEAD is price confirmation, not proof of earnings causality.</p>`;
    return section;
  }

  function addNavigation() {
    const navigation = document.querySelector("nav");
    if (!navigation) return;
    navigation.querySelectorAll("a").forEach((link) => {
      if (link.textContent.trim() === "Executive Summary") link.textContent = "Summary";
    });
    navigation.insertAdjacentHTML("afterbegin", '<a href="#swot-analysis">SWOT Analysis</a>');
    navigation.insertAdjacentHTML("afterbegin", '<a href="#strategic-positioning">Strategic Quality</a>');
    navigation.insertAdjacentHTML("afterbegin", '<a href="#market-context">Customers &amp; Governance</a>');
    navigation.insertAdjacentHTML("afterbegin", '<a href="#technical-analysis">Technical Analysis</a>');
    navigation.insertAdjacentHTML("afterbegin", '<a href="#company-dashboard">Snapshot &amp; Charts</a>');
    navigation.insertAdjacentHTML("afterbegin", '<a class="reports-home" href="index.html">← All Reports</a>');
  }

  function render() {
    prioritizeSharedStyles();
    const data = parseData();
    const main = document.querySelector("main");
    if (!data || !main) return;
    normalizeMetadata(data);
    removeExpectedEbitdaMargin();
    main.querySelectorAll("h2").forEach((heading) => {
      if (heading.textContent.trim() === "Executive Summary") heading.textContent = "Summary";
    });
    enhanceSummary(data, main);
    main.prepend(createDashboard(data));
    const watchlist = main.querySelector("#watchlist, #watch");
    main.insertBefore(createTechnicalSection(data), watchlist || main.lastElementChild);
    addNavigation();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render, { once: true });
  } else {
    render();
  }
})();
