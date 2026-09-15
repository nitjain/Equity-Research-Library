<!-- markdownlint-disable-file -->

# New Reports Group 2 Research

Research date and information cut-off: 2026-09-13

Research status: Complete. Source-site audit, Screener cross-check, primary-filing
extraction, dated market data, and valuation-model inputs are documented below.

## Scope and questions

Companies requested:

* Sterlite Technologies
* Concord Biotech
* Ind-Swift Laboratories
* Windlas Biotech
* Acutaas Chemicals
* Welspun Living

Research requirements:

* Resolve exact legal/listed names and NSE/BSE tickers
* Treat the existing Sterlite Technologies report as an update/validation target, not a new report
* Gather latest FY26 and Q1 FY27 financial evidence
* Capture management guidance and business, geography, and customer mix
* Capture balance sheet, cash flow, diluted share count, and capital changes
* Record an explicit dated current/reference price and technical-analysis inputs
* Capture catalysts, risks, governance, and ownership
* Select industry-correct primary and secondary valuation methods
* Prefer primary sources, include URLs, and label unavailable facts as not disclosed

## Source policy

Primary sources include exchange filings, audited annual reports, quarterly results, investor presentations, earnings-call transcripts published by the company, and official shareholding-pattern filings. Exchange or company-hosted copies are preferred. Market-price and technical-history data may use exchange endpoints or a clearly identified secondary market-data source when no stable primary-source download is available.

## Required source-site audit

The following sites are taken directly from `sources.txt`. Each site is checked
before company and exchange filings are used to fill evidence gaps. A result of
"No usable fact" means the site was checked but did not provide accessible,
dated, company-specific evidence suitable for this research cut-off.

| Site | Companies checked | Access result | Facts obtained |
|---|---|---|---|
| Tijori Finance | All six requested companies | HTTP 200 search shell for every query, but the returned HTML contained none of the company names or symbols | No usable fact; results appear client-rendered or require a different search route |
| Screener | All six, using STLTECH, CONCORDBIO, INDSWFTLAB, WINDLAS, ACUTAAS with AMIORG fallback, and WELSPUNLIV | HTTP 200 and a matching company page for every symbol | Exact listed-name cross-check plus consolidated annual and quarterly financial tables, balance-sheet and cash-flow histories, price snapshot, and quarterly ownership tables; these remain secondary cross-checks, not substitutes for filings |
| BSE India | All six requested companies | HTTP 200 generic search shell, but no company-specific text in returned HTML | No fact from the search shell; direct BSE filing PDFs are used later where URLs can be resolved |
| Fortune India | All six requested companies | Public search endpoint returned HTTP 410 | No usable fact |
| MarketScreener India | All six requested companies | Public advanced search was accessible; Sterlite search returned the exact instrument, company description, and dated 2026 filing/news index. Equivalent company searches were checked for the other five | Identity, broad business description, and filing-event cross-check only; no financial number is taken from this source |
| Trendlyne conference calls | All six requested companies | Public conference-call index was accessible and linked exchange PDFs, but the landing page did not expose targeted entries for the six names | No company-specific fact retained; used only as a discovery index where a matching filing is found |
| Concall.in | All six requested companies | Public landing page was accessible, but targeted company search was not exposed in the returned page | No company-specific fact retained; company or exchange transcripts are preferred |
| TradeIndia | All six requested companies | Search endpoint returned no relevant company results | No usable fact |
| AlphaStreet | All six requested companies | Search endpoint was accessible, but exact-name queries produced irrelevant or stale result sets, including false positives for Sterlite | No usable fact retained |
| ScanX | All six requested companies | Search route returned HTTP 404 | No usable fact |
| MarketsMojo | All six requested companies | Search route returned HTTP 400 | No usable fact |

Source-site URLs checked: [Tijori Finance](https://www.tijorifinance.com/),
[Screener](https://www.screener.in/), [BSE India](https://www.bseindia.com/),
[Fortune India](https://www.fortuneindia.com/),
[MarketScreener India](https://in.marketscreener.com/),
[Trendlyne conference calls](https://trendlyne.com/conference-calls/),
[Concall.in](https://concall.in/), [TradeIndia](https://www.tradeindia.com/),
[AlphaStreet](https://alphastreet.com/), [ScanX](https://scanx.trade/), and
[MarketsMojo](https://www.marketsmojo.com/).

## Identity resolution

| Requested name | Exact listed name | NSE symbol | BSE code | Identity evidence |
|---|---|---|---:|---|
| Sterlite Technologies | Sterlite Technologies Limited | STLTECH | 532374 | [Official investor page](https://www.stl.tech/investors/) identifies the listed security as STLTECH |
| Concord Biotech | Concord Biotech Limited | CONCORDBIO | 543960 | [Official investor page](https://concordbiotech.com/investor/) and company filings |
| Ind-Swift Laboratories | Ind-Swift Laboratories Limited | INDSWFTLAB | 532305 | [BSE security page](https://www.bseindia.com/stock-share-price/ind-swift-laboratories-ltd/INDSWFTLAB/532305/) and [official investor page](https://www.indswiftgroup.com/investor-relations/) |
| Windlas Biotech | Windlas Biotech Limited | WINDLAS | 543329 | [Official investor portal](https://windlas.com/financial-information/financial-information-financial-results/) and CIN L74899UR2001PLC033407 shown on the company site |
| Acutaas Chemicals | Acutaas Chemicals Limited (formerly Ami Organics Limited) | ACUTAAS | 543349 | [Official company site](https://acutaas.com/) and [BSE security page](https://www.bseindia.com/stock-share-price/acutaas-chemicals-ltd/ACUTAAS/543349/) |
| Welspun Living | Welspun Living Limited | WELSPUNLIV | 514162 | [BSE security page](https://www.bseindia.com/stock-share-price/welspun-living-ltd/WELSPUNLIV/514162/) and FY26 annual report |

> [!IMPORTANT]
> Do not create another Sterlite report. The workspace already contains
> `Sterlite-Technologies-September-2026.html` and `sterlite-insights-data.js`.
> Validate and update those files against the sources below.

## Sterlite Technologies

Existing workspace report: `Sterlite-Technologies-September-2026.html`.

### Financial and market data

All annual figures below are consolidated Screener cross-checks in Rs crore,
except EPS in Rs. FY24-FY26 reflect continuing operations after the Global
Services Business demerger and are not silently comparable with earlier years.

| Period | Revenue | Operating profit | PAT | EPS |
|--------|--------:|-----------------:|----:|----:|
| FY22 | 5,437 | 665 | 45 | 1.51 |
| FY23 | 6,925 | 895 | 127 | 3.54 |
| FY24 | 4,083 | 471 | -57 | -1.28 |
| FY25 | 3,996 | 416 | -123 | -2.52 |
| FY26 | 4,745 | 569 | 56 | 1.15 |

Q1 FY27 continuing-operations revenue was Rs 1,910 crore, up 87% YoY from
Rs 1,020 crore. Reported EBITDA was Rs 397 crore versus Rs 140 crore, up about
184%, and EBITDA margin was 20.8% versus 13.7%. PAT was Rs 197 crore versus
Rs 10 crore, up 1,870%. Screener operating profit was Rs 385 crore; do not label
that figure EBITDA. Approximate diluted shares are 48.8 crore, calculated only as
the Q1 PAT/EPS cross-check (Rs 197 crore / Rs 4.04), consistent with Rs 98 crore
equity capital at Rs 2 face value.

At FY26, borrowings were Rs 1,942 crore, investments Rs 467 crore, CFO Rs 520
crore, investing cash flow negative Rs 485 crore, and Screener FCF Rs 344 crore.
Cash and cash equivalents and FY26 capital expenditure were not isolated in the
reviewed presentation. On 3 September 2026, management announced about Rs 3,000
crore capex through FY29, about Rs 1,000 crore annually, for roughly 50% capacity
addition.

The 11 September 2026 NSE close was Rs 897.40 (open Rs 870.00, high Rs 897.45,
low Rs 830.00, volume 2,409,510). SMA20 was Rs 711.98, SMA50 was Rs 625.89,
SMA200 was Rs 352.30, RSI14 was 80.62, and the trailing 52-week range was Rs 84.60-Rs
897.45. Returns were 47.40% over about three months, 346.82% over six months,
and 666.35% over one year. The ten prior closes were: 27 Aug 695.85; 28 Aug
723.75; 31 Aug 728.45; 1 Sep 693.70; 2 Sep 714.35; 3 Sep 713.25; 4 Sep 748.90;
8 Sep 824.70; 9 Sep 865.90; 10 Sep 854.75. The setup is strongly above all
moving averages but overbought; Rs 897.45 is immediate resistance, while the
10 September close near Rs 855 and SMA20 near Rs 712 are evidence-based first
and second reference supports.

### Operations, ownership, and outlook

Q1 FY27 segment revenue mix was Data Centre and Cloud 61%, Large Enterprise 18%,
and Telecom and Citizen Networks 21%. Geography was Europe 54%, Americas 25%,
and rest of world 22%; rounding makes the disclosed total 101%. Customer
concentration was not disclosed in the reviewed Q1 materials.

June 2026 ownership was promoters 44.52%, FIIs 18.22%, DIIs 11.43%, and public
25.82%, with 233,593 shareholders. Government and other categories were not
separately disclosed. July data show promoter ownership falling to 42.29%, so
the report must retain June figures for the requested ownership date and discuss
the subsequent change separately.

Management's September Lakshya roadmap targets FY29 revenue of Rs 20,000 crore,
EBITDA margin above 27%, and 1.5 times capacity expansion. Catalysts are AI/data
centre demand, large Q3 FY26 order wins converting to revenue, European mix,
and the capacity program. Risks are execution against a steep FY29 ramp, current
leverage and financing needs, elevated capex, customer/order timing, optical-fibre
pricing, and valuation after the rapid price move. Governance watch items are
promoter dilution and continuing ESOP allotments.

Primary valuation model: SOTP/EV-EBITDA-informed equity value because leverage,
capex, and business mix distort near-term P/E. Cross-check with normalized P/E
on continuing-operations PAT. Analyst scenario seeds are FY27E revenue Rs
7,000/8,000/9,000 crore and EBITDA margin 18%/21%/23%; FY28E Rs
9,500/12,000/15,000 crore and 20%/23%/25%; FY29E Rs 13,000/17,000/20,000 crore
and 21%/25%/27% for Bear/Base/Bull. Apply net debt and dilution explicitly; the
FY29 Bull case is management's target, not an analyst base case.

Verified primary-source bundle:

* [Results and reports index](https://stl.tech/download/)
* [FY26 annual report](https://stl.tech/wp-content/uploads/2026/07/Annual-Report-FY2026_Final.pdf)
* [Q1 FY27 financial result](https://stl.tech/wp-content/uploads/2026/07/Result-Sheet-Q1-FY-27_signed_Final_F.pdf)
* [Q1 FY27 earnings presentation](https://stl.tech/wp-content/uploads/2026/07/2.-IR-presentation.pdf)
* [Q1 FY27 earnings-call transcript](https://stl.tech/wp-content/uploads/2026/07/Transcript-July-24-2026.pdf)
* [FY26 subsidiary financial statements](https://stl.tech/wp-content/uploads/2026/08/Subsidiaries-Financials-FY26.pdf)
* [September strategy transcript](https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=46c547c0-9df0-40ce-9faa-1a89a37490b3.pdf)
* [Screener consolidated cross-check](https://www.screener.in/company/STLTECH/consolidated/)
* [Yahoo Finance daily series](https://query1.finance.yahoo.com/v8/finance/chart/STLTECH.NS?period1=1726012800&period2=1789171200&interval=1d&events=history)

## Concord Biotech

### Financial and market data

| Period | Revenue | Operating profit | PAT | EPS |
|--------|--------:|-----------------:|----:|----:|
| FY22 | 713 | 270 | 175 | 183.93 |
| FY23 | 853 | 344 | 240 | 22.95 |
| FY24 | 1,017 | 432 | 308 | 29.45 |
| FY25 | 1,200 | 506 | 372 | 35.52 |
| FY26 | 1,055 | 368 | 259 | 24.94 |

The FY22 EPS is on the pre-bonus/pre-split share basis and must not be compared
without adjustment. Q1 FY27 consolidated revenue was Rs 257 crore, up 26% YoY;
EBITDA was Rs 82 crore, up 34%; EBITDA margin was 32.0%, up 190 bps; PAT was
Rs 58 crore, up 31%; and PAT margin was 22.4%, up 80 bps. EBITDA margin excluding
the injectable facility and Stellon Biotech expenses was 37%. Approximate diluted
shares were 10.38 crore (PAT/EPS cross-check), versus about 10.46 crore issued
shares from Rs 10 crore equity capital at Re 1 face value.

FY26 borrowings were Rs 2 crore, investments Rs 491 crore, CFO Rs 267 crore,
investing cash flow negative Rs 143 crore, and FCF Rs 172 crore. At 30 June
2026 the company reported more than Rs 442 crore cash and cash equivalents,
zero debt, and Q1 capex of about Rs 9.5 crore.

The 11 September 2026 close was Rs 1,505.70 (open Rs 1,439.60, high Rs 1,529.00,
low Rs 1,426.90, volume 372,504). SMA20 was Rs 1,499.68, SMA50 was Rs 1,403.33,
SMA200 was Rs 1,264.19, RSI14 was 57.18, 52-week range Rs 987-Rs 1,704, and three-/six-/
one-year returns were 9.09%/28.20%/-4.84%. Prior closes: 27 Aug 1,481.90;
28 Aug 1,481.10; 31 Aug 1,446.10; 1 Sep 1,484.30; 2 Sep 1,444.80; 3 Sep
1,447.70; 4 Sep 1,417.10; 8 Sep 1,470.50; 9 Sep 1,464.50; 10 Sep 1,452.80.
Reference support is SMA50 near Rs 1,403; resistance is Rs 1,529 and then the
Rs 1,704 52-week high.

### Operations, ownership, and outlook

Growth was broad-based across product categories. Exports grew about 46% YoY,
with demand across regulated and semi-regulated markets; exact Q1 domestic/export,
API/formulation, and customer-concentration percentages were not disclosed.
Management cited wallet-share gains, new products at existing customers, and
advanced discussions with large new customers. The pipeline target is two to
three launches annually. Stellon started commercial sales, injectable customer
engagement advanced, and USFDA approvals were received for mycophenolate mofetil
and tofacitinib tablets.

Catalysts are export normalization, two to three annual launches, injectable
ramp-up, Stellon commercialization, and conversion of large-customer discussions.

June 2026 ownership was promoters 44.08%, FIIs 7.53%, DIIs 9.37%, and public
39.04%, with 83,325 shareholders. Risks include the FY26 revenue/PAT decline,
customer buying-pattern shifts, CDSCO approval delays, tariff uncertainty,
injectable/Stellon ramp-up costs, and a long cash-conversion cycle. No promoter
pledge or material governance exception was identified in the reviewed sources.

Primary valuation model: risk-adjusted normalized forward P/E for a fermentation
API/formulations franchise, cross-checked with DCF/EV-EBITDA because cash and
ramp-up assets are material. Scenario seeds are FY27E revenue Rs
1,150/1,300/1,400 crore, PAT margin 22%/25%/27%, and P/E 35x/45x/55x; FY28E
Rs 1,300/1,500/1,700 crore, 23%/26%/28%, and 32x/42x/50x; FY29E Rs
1,500/1,750/2,050 crore, 24%/27%/29%, and 30x/40x/48x. Use 10.4 crore diluted
shares and add surplus cash in the DCF/EV cross-check.

Verified primary-source bundle:

* [Investor hub](https://concordbiotech.com/investor/)
* [FY26 annual report](https://concordbiotech.com/wp-content/uploads/2026/07/Concord_AR_25-26_Final-High-Re.pdf)
* [Q1 FY27 financial result](https://concordbiotech.com/wp-content/uploads/2026/07/Outcome_BM31072026.pdf)
* [Q1 FY27 investor presentation](https://concordbiotech.com/wp-content/uploads/2026/08/1.-InvestorPresentationQ127.pdf)
* [Q1 FY27 earnings-call transcript](https://concordbiotech.com/wp-content/uploads/2026/08/EarningsCallTranscriptQ127.pdf)
* [Screener consolidated cross-check](https://www.screener.in/company/CONCORDBIO/consolidated/)
* [Yahoo Finance daily series](https://query1.finance.yahoo.com/v8/finance/chart/CONCORDBIO.NS?period1=1726012800&period2=1789171200&interval=1d&events=history)

## Ind-Swift Laboratories

### Financial and market data

| Period | Revenue | Operating profit | PAT | EPS |
|--------|--------:|-----------------:|----:|----:|
| FY22 | 1,039 | 202 | -2 | -0.36 |
| FY23 | 1,207 | 229 | 48 | 8.06 |
| FY24 | 1,281 | 252 | 421 | 71.24 |
| FY25 | 562 | -19 | 250 | 41.32 |
| FY26 | 641 | 45 | 41 | 4.77 |

These annual figures are not a clean time series. The company sold its API/CRAMS
business for Rs 1,650 crore, retained about 7.8% of Synthimed, repaid external
debt, and completed the Ind-Swift merger after NCLT sanction on 17 July 2025.
FY24/FY25 PAT contains exceptional effects and FY26 has a changed business and
share basis. Q1 FY27 primary disclosure is standalone: operating income Rs
186.08 crore, up 21.16%; operating EBITDA Rs 33.32 crore versus Rs 8.66 crore,
up 2.85 times; margin 17.91% versus 5.33%; PAT excluding exceptional items Rs
24.68 crore versus Rs 8.12 crore, up 2.04 times; PAT margin 13.26% versus 4.99%.
Screener's consolidated cross-check was revenue Rs 191 crore, operating profit
Rs 33 crore, and PAT Rs 25 crore. Approximate diluted shares were 8.69 crore
from FY26 equity capital of Rs 87 crore at Rs 10 face value; Q1 PAT/EPS implies
about 8.7 crore. Announced warrants require a separate dilution sensitivity;
the final fully diluted count was unavailable.

FY26 borrowings were Rs 18 crore, investments Rs 248 crore, CFO negative Rs 70
crore, investing cash flow negative Rs 73 crore, and FCF negative Rs 156 crore.
Cash was not separately established. Management described the balance sheet as
net debt-free and plans about Rs 250 crore capex over 2.5 years, funded through
internal accruals, including Samba EU-GMP upgrades and regulatory capacity.

The 11 September close was Rs 385.35 (open Rs 375.00, high Rs 391.40, low
Rs 372.30, volume 565,658). SMA20 was Rs 352.88, SMA50 was Rs 282.81, SMA200 was Rs 169.38,
RSI14 69.16, 52-week range Rs 87.15-Rs 404.00, and three-/six-/one-year returns
138.11%/168.59%/262.14%. Prior closes: 27 Aug 358.04; 28 Aug 362.92; 31 Aug
364.87; 1 Sep 368.15; 2 Sep 366.85; 3 Sep 372.70; 4 Sep 355.95; 8 Sep 388.30;
9 Sep 388.55; 10 Sep 377.50. Resistance is Rs 404; first reference support is
SMA20 near Rs 353, then SMA50 near Rs 283.

### Operations, ownership, and outlook

The post-restructuring business is finished dosage formulations: international
CMO, own brands and out-licensing plus domestic ethical, generics and P2P contract
manufacturing. It reports 850+ registrations, 2,100+ dossiers, 520+ approvals,
and 85+ countries. Exact Q1 geography and customer concentration were not
disclosed. Viatris, Manx, and Arrotex programs were commercialized and are
expected to add Rs 200-220 crore FY27 revenue. Management guides to more than
50% FY27 revenue growth, 20-25% medium-term CAGR, 600-800 bps EBITDA-margin
expansion, and 15-20% domestic CAGR.

June ownership was promoters 42.93%, FIIs 10.70%, DIIs 0.17%, and public 46.19%,
with 40,881 shareholders. Catalysts are regulated-market product launches,
Samba certification, partner ramp-up, and domestic chronic therapies. Risks are
merger comparability, negative operating cash flow, execution of the large capex,
regulatory approvals, reliance on partner commercialization, the Synthimed stake,
and dilution from preferential warrants repriced to Rs 196. Historical exceptional
gains must be excluded from normalized earnings.

Primary valuation model: normalized forward P/E on the FDF business plus a
separate SOTP value for the Synthimed stake, cross-checked with EV/EBITDA.
Scenario seeds are FY27E revenue Rs 850/960/1,050 crore, PAT margin 8%/11%/14%,
and P/E 22x/30x/38x; FY28E Rs 1,000/1,200/1,400 crore, 9%/12%/15%, and
20x/28x/35x; FY29E Rs 1,175/1,450/1,750 crore, 10%/13%/16%, and 18x/26x/32x.
Use 8.7 crore shares before warrants and show the warrant count as an explicit
sensitivity because it was unavailable.

Sources: [FY26 annual report](https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=1030038a-682c-455c-9ee3-7f2c273fa639.pdf), [Q1 FY27 presentation](https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=53bc6695-3b3b-4d54-9e49-fd338cb7b144.pdf), [Q1 transcript](https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=20e51151-92d1-4584-b075-38946d071365.pdf), [investor page](https://www.indswiftgroup.com/investor-relations/), [Screener](https://www.screener.in/company/INDSWFTLAB/consolidated/), and [Yahoo daily series](https://query1.finance.yahoo.com/v8/finance/chart/INDSWFTLAB.NS?period1=1726012800&period2=1789171200&interval=1d&events=history).

## Windlas Biotech

### Financial and market data

| Period | Revenue | Operating profit | PAT | EPS |
|--------|--------:|-----------------:|----:|----:|
| FY22 | 466 | 52 | 38 | 17.48 |
| FY23 | 513 | 60 | 43 | 20.04 |
| FY24 | 631 | 78 | 58 | 27.98 |
| FY25 | 760 | 94 | 61 | 29.10 |
| FY26 | 904 | 105 | 66 | 31.49 |

Q1 FY27 primary revenue was Rs 248 crore, up 18% YoY. Adjusted EBITDA excluding
Rs 7.2 crore non-cash ESOP expense was Rs 34 crore, up 26%; reported EBITDA was
therefore about Rs 26.8 crore, but this subtraction is a reconciliation and must
be labeled as such. PAT was Rs 25 crore, up 37%, and EPS Rs 8.46. Exact reported
EBITDA margin was not stated in the extracted text; the adjusted margin was about
13.7% and the reconciled reported margin about 10.8%. Approximate diluted shares
were 2.1 crore. The Rs 47 crore buyback completed in Q1, with promoters not
participating, makes the future weighted-average share count period-specific.

FY26 borrowings were Rs 35 crore, investments Rs 268 crore, CFO Rs 105 crore,
investing cash flow negative Rs 92 crore, and FCF Rs 37 crore. The company
reported Rs 251 crore net liquidity and a net-debt-free position. Plant 6 was
on track for H1 FY27 commercialization; management said no immediate additional
capex was planned after current projects.

The 11 September close was Rs 1,129.25 (open Rs 1,127.10, high Rs 1,141.90, low
Rs 1,110.75, volume 66,749). SMA20 was Rs 1,039.97, SMA50 was Rs 935.54, SMA200 was Rs 834.33,
RSI14 73.42, 52-week range Rs 697.40-Rs 1,181.90, and three-/six-/one-year returns
36.19%/53.22%/12.59%. Prior closes: 28 Aug 998.55; 31 Aug 994.20; 1 Sep 1,008.35;
2 Sep 1,096.60; 3 Sep 1,127.10; 4 Sep 1,126.35; 7 Sep 1,154.75; 8 Sep 1,146.10;
9 Sep 1,142.45; 10 Sep 1,129.40. Resistance is the Rs 1,181.90 high; SMA20 near
Rs 1,040 is first reference support. RSI indicates an overbought setup.

### Operations, ownership, and outlook

Q1 Generic Formulations CDMO revenue was Rs 207 crore, up 29%; Trade Generics
and Institutional was Rs 30 crore after discontinuing codeine products; exports
were Rs 11 crore, up 79%. FY26 operating data include 926 customers, 5,644 brands,
546 trade-generic brands, 67 exported products across 10 countries, and service
to eight of India's top ten and 15 of the top 20 pharma companies. Exact top-ten
customer concentration was unavailable.

June ownership was promoters 63.31%, FIIs 2.04%, DIIs 9.84%, and public 24.80%,
with 44,996 shareholders. Catalysts are Plant 6, injectables, deeper customer
engagement, new launches, and exports. Risks are CDMO customer concentration,
regulatory compliance, product-replacement execution after codeine withdrawal,
Plant 6 ramp-up, and the gap between reported and ESOP-adjusted EBITDA. The
non-participating promoter buyback and share-count reduction must be disclosed.
No quantified FY27 consolidated revenue or margin guidance was found.

Primary valuation model: normalized forward P/E, cross-checked with net-cash-
adjusted EV/EBITDA. Scenario seeds are FY27E revenue Rs 1,025/1,100/1,175 crore,
PAT margin 7%/8%/9%, and P/E 25x/32x/38x; FY28E Rs 1,175/1,300/1,450 crore,
7.5%/8.5%/9.5%, and 23x/30x/36x; FY29E Rs 1,350/1,525/1,750 crore,
8%/9%/10%, and 22x/28x/34x. Use about 2.1 crore shares but update for the
buyback's weighted-average effect; add net cash in the EV cross-check.

Sources: [FY26 annual report](https://www.bseindia.com/xml-data/corpfiling/AttachHis/972c5627-6db2-449e-81ea-9938d2f38f7f.pdf), [Q1 FY27 presentation](https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=2e03824d-518b-40ea-a396-15d2784c9924.pdf), [Q1 transcript](https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=577d52c7-7d08-4d1d-b117-f6f688c66989.pdf), [financial-results portal](https://windlas.com/financial-information/financial-information-financial-results/), [Screener](https://www.screener.in/company/WINDLAS/consolidated/), and [Yahoo daily series](https://query1.finance.yahoo.com/v8/finance/chart/WINDLAS.NS?period1=1726012800&period2=1789171200&interval=1d&events=history).

## Acutaas Chemicals

### Financial and market data

| Period | Revenue | Operating profit | PAT | EPS |
|--------|--------:|-----------------:|----:|----:|
| FY22 | 520 | 105 | 72 | 9.87 |
| FY23 | 617 | 123 | 83 | 11.43 |
| FY24 | 717 | 128 | 49 | 5.80 |
| FY25 | 1,007 | 232 | 160 | 19.38 |
| FY26 | 1,339 | 480 | 356 | 43.51 |

Q1 FY27 revenue was Rs 329.7 crore, up 59.1% YoY; EBITDA Rs 113.1 crore, up
122.1%; EBITDA margin 34.3%, up 973 bps; PAT Rs 74.9 crore, up 70.4%; and PAT
margin 22.7%, up 151 bps. Shares outstanding were explicitly 8,18,71,122 on
30 June 2026; use 8.19 crore as the approximate diluted basis unless the result
notes provide a different weighted average.

FY26 borrowings were Rs 36 crore, CFO Rs 292 crore, investing cash flow negative
Rs 266 crore, and FCF negative Rs 36 crore. Investments were shown as nil by
Screener. Net cash and cash equivalents were about Rs 314 crore on 30 June 2026.
Exact FY26 capex was unavailable; Q1 commentary disclosed minor plant-alignment
capex for new products.

The 11 September close was Rs 3,383.70 (open/high/low Rs 3,488/Rs 3,488/
Rs 3,350, volume 325,242). SMA20 was Rs 3,244.34, SMA50 was Rs 3,330.05,
SMA200 was Rs 2,573.18, RSI14 56.50, 52-week range Rs 1,302-Rs 3,740, and three-/six-/
one-year returns 9.27%/54.67%/125.00%. Prior closes: 27 Aug 3,329.20; 28 Aug
3,281.60; 31 Aug 3,160.60; 1 Sep 3,174.30; 2 Sep 3,134.90; 3 Sep 3,201.00;
4 Sep 3,168.50; 8 Sep 3,182.10; 9 Sep 3,241.80; 10 Sep 3,451.40. Resistance is
Rs 3,488 then Rs 3,740; SMA50 near Rs 3,330 and SMA20 near Rs 3,244 are reference
supports.

### Operations, ownership, and outlook

Pharma Intermediates CDMO and core advanced intermediates drove growth. Specialty
Chemicals benefited from battery chemicals and BFC semiconductor demand, partly
offset by muted commodity chemicals. The battery-chemicals plant completed trial
runs and began commercial supply; RFP activity was healthy in CDMO/NCE products.
Exact Q1 segment, geography, export, and customer-concentration percentages were
not disclosed.

June ownership was promoters 32.66%, FIIs 21.61%, DIIs 19.55%, government 0.01%,
and public 26.16%, with 125,569 shareholders. Catalysts are battery-chemical
commercialization, semiconductor materials, CDMO/NCE conversion, the new Unit 1
pilot plant, and the 10 September process patent, taking the reported patent
count to 11. Risks are a 149-day FY26 cash-conversion cycle, negative FCF despite
high earnings, product-mix normalization from unusually high margins, commodity-
chemical weakness, project qualification timing, and promoter ownership at
32.66%. No quantified full-year FY27 guidance was found.

Primary valuation model: through-cycle normalized P/E, cross-checked with DCF/
EV-EBITDA; do not capitalize Q1's 34.3% margin as a permanent peak. Scenario
seeds are FY27E revenue Rs 1,500/1,700/1,900 crore, PAT margin 17%/20%/23%, and
P/E 35x/45x/55x; FY28E Rs 1,700/2,000/2,300 crore, 18%/21%/24%, and
32x/42x/50x; FY29E Rs 1,950/2,350/2,750 crore, 19%/22%/25%, and
30x/40x/48x. Use 8.19 crore diluted shares and add net cash in the EV/DCF check.

Sources: [FY26 annual report](https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=4bc7022a-41c4-416e-8d91-cb93a3e92a7e.pdf), [Q1 FY27 presentation](https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=4abd0291-38c8-472f-916c-bb450ca8ca24.pdf), [Q1 transcript](https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=fe97c4c1-571f-4e47-bc3c-0980da36d7bb.pdf), [Screener](https://www.screener.in/company/ACUTAAS/consolidated/), [patent filing](https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=91bd44f2-fd61-40ce-8046-35cf5965d072.pdf), and [Yahoo daily series](https://query1.finance.yahoo.com/v8/finance/chart/ACUTAAS.NS?period1=1726012800&period2=1789171200&interval=1d&events=history).

## Welspun Living

### Financial and market data

| Period | Revenue | Operating profit | PAT | EPS |
|--------|--------:|-----------------:|----:|----:|
| FY22 | 9,311 | 1,362 | 607 | 5.98 |
| FY23 | 8,094 | 753 | 203 | 1.98 |
| FY24 | 9,679 | 1,369 | 673 | 7.01 |
| FY25 | 10,545 | 1,299 | 644 | 6.66 |
| FY26 | 9,399 | 794 | 213 | 2.13 |

The primary FY26 presentation reports total income Rs 9,468 crore, EBITDA Rs
862 crore, margin 9.1%, PAT after minority interest Rs 204 crore, and EPS Rs
2.14; use those primary definitions in the report and retain the table above as
a Screener revenue/operating-profit cross-check. Q1 FY27 total income was Rs
2,828 crore, up 23.5% YoY; EBITDA Rs 354 crore, margin 12.5%, up 140 bps; PAT
Rs 161 crore, margin 5.7%, up 186 bps. Approximate diluted shares were 95.7
crore (Rs 161 crore / Rs 1.68 presentation EPS, where used); issued capital and
Screener EPS imply roughly 96 crore. Confirm the exact weighted average from the
result notes during implementation.

FY26 gross debt was Rs 1,802 crore, cash and equivalents Rs 1,027 crore, and net
debt Rs 775 crore in the primary presentation. Screener reported CFO Rs 1,175
crore, investing cash flow negative Rs 345 crore, and FCF Rs 726 crore. Management
targets Rs 400-500 crore FY27 capex, mainly debottlenecking and growth projects.

The 11 September close was Rs 207.68 (open Rs 208.00, high Rs 208.90, low
Rs 203.52, volume 2,653,493). SMA20 was Rs 195.56, SMA50 was Rs 176.34, SMA200 was Rs 144.21,
RSI14 71.46, 52-week range Rs 107.10-Rs 216.00, and three-/six-/one-year returns
42.46%/85.26%/65.44%. Prior closes: 28 Aug 190.46; 31 Aug 196.21; 1 Sep 198.41;
2 Sep 200.01; 3 Sep 200.61; 4 Sep 208.51; 7 Sep 211.95; 8 Sep 207.87; 9 Sep
210.28; 10 Sep 210.50. Resistance is Rs 216; first reference support is SMA20
near Rs 196 and then SMA50 near Rs 176. RSI indicates an overbought setup.

### Operations, ownership, and outlook

Q1 Home Textile segment revenue was Rs 2,680 crore, up 26.2%, with 11.7% EBITDA
margin; Flooring revenue was Rs 188 crore, down 3.1%, with 10.4% margin. Segment
revenue is before consolidation adjustments and does not arithmetically equal
reported total income. Home-textile exports grew 28.1%, domestic consumer grew
21.3%, branded business grew 25% and contributed 18% of revenue, and innovation
sales grew 16% and contributed about 25%. Non-US exposure was about 41%, implying
about 59% US-facing revenue; emerging businesses were about 30%. Operations span
60+ countries. Exact top-customer concentration was unavailable.

June ownership was promoters 66.36%, FIIs 5.21%, DIIs 11.38%, government 0.01%,
public 16.69%, and others 0.35%, with 223,860 shareholders. Management guides to
double-digit FY27 revenue growth and low-teens EBITDA margin, with a normalized
15%+ margin aspiration, 50%+ non-US aspiration, and Rs 15,000 crore medium-term
revenue aspiration. Pillow revenue is targeted to double to USD 60 million in
FY27; Ohio utilization exceeded 80% and Nevada was operational.

Catalysts are UK/EU trade access, sourcing diversification toward India, pillows,
domestic brands, flooring margin recovery, and innovation. Risks are US exposure,
tariff sharing, cotton and crude-derivative costs, FY26 margin volatility, leverage,
and Vapi flooding that management said would materially affect Q2 before expected
Q3/Q4 restoration. Governance watch items include proposed material related-party
transactions of up to Rs 11,000 crore and Rs 4,000 crore and promoter-chairman
commission of Rs 3.07 crore disclosed in the FY26 AGM material.

Primary valuation model: normalized mid-cycle P/E with net-debt-adjusted
EV/EBITDA/SOTP cross-check across Home Textiles and Flooring. Scenario seeds are
FY27E revenue Rs 10,100/10,600/11,200 crore, PAT margin 3.5%/4.5%/5.5%, and
P/E 22x/28x/34x; FY28E Rs 10,800/11,700/12,700 crore, 4%/5%/6%, and
20x/26x/32x; FY29E Rs 11,700/13,000/14,500 crore, 4.5%/5.5%/6.5%, and
18x/24x/30x. Use about 96 crore diluted shares and subtract net debt in the
EV-based cross-check.

Sources: [FY26 annual report](https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=8f424114-6844-4e42-93f3-7f1971811c64.pdf), [Q1 FY27 presentation](https://www.bseindia.com/stockinfo/AnnPdfOpen.aspx?Pname=ca41a3de-7b90-4678-b46a-d4bb1438de98.pdf), [Q1 transcript](https://www.welspunliving.com/uploads/investor_data/investorreport_9000.pdf), [Screener](https://www.screener.in/company/WELSPUNLIV/consolidated/), and [Yahoo daily series](https://query1.finance.yahoo.com/v8/finance/chart/WELSPUNLIV.NS?period1=1726012800&period2=1789171200&interval=1d&events=history).

## Cross-company valuation methods

| Company | Primary model | Secondary check | Main normalization |
|---------|---------------|-----------------|--------------------|
| Sterlite Technologies | SOTP and EV/EBITDA | Forward P/E | Continuing operations, debt, capex, and FY29 execution |
| Concord Biotech | Risk-adjusted normalized P/E | DCF and EV/EBITDA | FY26 headwinds and injectable/Stellon ramp costs |
| Ind-Swift Laboratories | FDF P/E plus Synthimed SOTP | EV/EBITDA | Divestment, merger, exceptional gains, and warrants |
| Windlas Biotech | Normalized forward P/E | Net-cash EV/EBITDA | ESOP expense and buyback-adjusted share count |
| Acutaas Chemicals | Through-cycle normalized P/E | DCF and EV/EBITDA | Avoid capitalizing peak product mix and margins |
| Welspun Living | Mid-cycle normalized P/E | Segment EV/EBITDA/SOTP | Tariffs, debt, flooring, and margin recovery |

All scenario ranges above are analyst assumptions, not management guidance.
Implementation must calculate PAT as revenue multiplied by PAT margin, EPS as
PAT divided by diluted shares, price as EPS multiplied by P/E where P/E is used,
and upside against the 11 September 2026 close. EV-based checks must reconcile
cash and debt rather than adding cash twice.

## Gaps and clarifying questions

No user clarification is required to implement the six reports. The following
items were unavailable in the reviewed public evidence and must remain labeled
as unavailable unless a later primary filing supplies them:

* Exact top-customer concentration for all six companies
* Exact Q1 segment/geography percentages for Concord, Ind-Swift, and Acutaas
* Sterlite FY26 cash balance and FY26 capital expenditure in the reviewed bundle
* Ind-Swift cash balance and final fully diluted share count after warrants
* Windlas reported EBITDA margin stated independently of the ESOP reconciliation
* Acutaas exact FY26 capital expenditure and quantified FY27 guidance
* Welspun exact Q1 weighted-average diluted share count from the result note

Technical data source methodology: Yahoo Finance unadjusted daily OHLCV through
11 September 2026. SMA and RSI were calculated from those closes; support and
resistance references use observed moving averages and the stated 52-week range,
not inferred chart patterns. Screener data were used as the requested secondary
cross-check. Primary filings control whenever definitions or values differ.
