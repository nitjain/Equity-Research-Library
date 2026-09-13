---
description: "Required standards for creating or editing equity research reports, insight data, shared report renderers, report styles, and the report index"
applyTo: "**/*-September-*.html, **/*-insights-data.js, **/report-insights*.js, **/report-*.css, **/index.html"
---

# Equity Research Report Standards

Apply these requirements to every existing and future company report. Keep the
presentation contract consistent while allowing assumptions and valuation methods
to reflect each company's economics.

## Report Contract

Every report must use the shared report styles, structured insights data, and
shared renderer. Use one semantic source for each figure; do not duplicate
structured data in alternate components unless graceful static fallback requires
it.

Use this section order and exact user-facing headings:

1. Company Snapshot & Scorecard
2. Summary
3. SWOT Analysis
4. Strategic Quality
5. Customers, Geography & Governance
6. Q1 FY27 Snapshot, updated to the actual reported period
7. Why The Previous Quarter Was Strong, or Why The Previous Quarter Was Weak
8. Business Quality And Mix
9. Why Earnings Improved, or Why Earnings Weakened
10. Growth Drivers And Capacity Economics
11. Catalysts
12. Management Guardrails And Credibility
13. Financial Quality
14. Valuation
15. Key Risks
16. Projection: Next 2-4 Quarters
17. Technical Analysis
18. Investor Watchlist
19. Sources Used

Use the same information architecture, table labels, visual hierarchy, navigation,
and responsive behavior across reports. Company-specific facts and conclusions
must remain distinct. Never make a weak quarter appear strong to preserve a
heading; change the strength and earnings headings to reflect the evidence.

## Evidence And Dates

* Set an explicit information cut-off and report date
* Store an explicit current price and price date in structured report data; use the
  same price for metadata and potential-upside calculations
* Prefer exchange filings, company results, investor presentations, transcripts,
  and annual reports over aggregators
* Use aggregators only for cross-checking market, historical, or ownership data
* Identify consolidated versus standalone figures and do not mix them silently
* State the period and scope for every business-mix and geography disclosure
* Show unavailable information as not disclosed; never infer geography, customers,
  order book, capacity, or guidance
* Label order-book geography as a proxy when revenue geography is unavailable
* Link the primary source for every material result, guidance, order, acquisition,
  capital raise, or exceptional item

## Earnings Quality

Reconcile reported performance before drawing conclusions:

* Separate organic growth from acquisitions, disposals, and changed consolidation
* Separate recurring operating earnings from exceptional gains, treasury income,
  fair-value changes, and unusual tax rates
* Distinguish reported EBITDA, adjusted EBITDA, operating profit, and segment profit
* Reconcile adjusted measures to reported results where the company supplies both
* Discuss working capital, operating cash flow, free cash flow, debt, dilution, and
  promoter pledges when material
* Do not annualize one quarter without accounting for seasonality, milestone
  acceptance, project timing, or cyclicality
* Explain historical EPS discontinuities caused by splits, IPO restructuring,
  warrants, acquisitions, or changing share counts

## Forecast Standards

Provide Q2 FY27 through Q1 FY28 estimates when Q1 FY27 is the latest reported
quarter. Advance these periods when a newer quarter becomes available.

Each quarterly projection must include revenue, operating margin, EBITDA, PAT,
EPS, and the key variable. Include a four-quarter run-rate summary.

Apply these arithmetic controls:

* EBITDA approximately equals revenue multiplied by EBITDA margin
* PAT assumptions reconcile to operating profit, finance cost, other income, and a
  normalized tax rate
* EPS equals PAT divided by the expected diluted weighted-average share count
* The four-quarter run-rate equals the sum of the displayed quarterly ranges
* Annual scenarios reconcile with quarterly estimates and disclosed guidance
* Dilution from announced or probable capital issuance must be reflected or shown
  as an explicit sensitivity

Label forecasts as analytical scenarios rather than management guidance. Identify
which assumptions are management guidance and which are analyst estimates.

## Valuation Standards

Use three consecutive forecast years. Use the current financial year and the next
two financial years, such as FY27E, FY28E, and FY29E. Retain calendar-year labels
for calendar-year reporters, such as CY26E, CY27E, and CY28E.

For profitable non-financial companies, every year must contain Bear, Base, and
Bull rows with these columns in this order:

| Scenario | FY revenue | PAT margin | Expected PAT | Expected EPS | Assigned P/E | Projected Stock Price | Potential upside % | Remarks |
|----------|------------|------------|--------------|--------------|--------------|-----------------------|--------------------|---------|

Replace `FY` with the applicable fiscal or calendar year in each table heading and
revenue column. Store valuation inputs in the structured `valuation` object and
let the shared renderer produce the tables.

Apply these calculations:

* Expected PAT approximately equals revenue multiplied by PAT margin
* Expected EPS equals expected PAT divided by diluted shares outstanding
* Projected stock price equals expected EPS multiplied by assigned P/E
* Potential upside equals projected stock price divided by current price, minus one
* Display PAT in ₹ crore, EPS to two decimals, and stock price to the nearest rupee
* Display positive potential upside with a green up arrow and negative potential
  upside with a red down arrow and minus sign
* Bear, Base, and Bull assumptions must increase coherently within each year
* Multiples should mature across forecast years unless a documented rerating case
  supports a different path

State the primary valuation model and why it fits. Select assumptions by industry:

* Chemicals and commodity-linked businesses use through-cycle normalized earnings;
  do not capitalize peak margins
* Pharma, API, CDMO, and turnaround businesses use risk-adjusted normalized earnings
  with DCF or EV/EBITDA cross-checks when debt, pipeline value, or losses are material
* Defence and aerospace businesses use order-book, qualification, and execution-
  informed forward earnings; normalize acquisitions, tax, and delivery timing
* Industrial, electrical, and engineering businesses use normalized forward
  earnings with EV/EBITDA cross-checks where leverage or acquisitions are material
* Cable and telecom businesses use SOTP or EV/EBITDA-informed earnings when capital
  intensity, associates, or financing materially affect equity value
* Pipe, metal, and cyclical manufacturing businesses use normalized mid-cycle
  earnings and exclude exceptional commodity or accounting gains
* Marketplace and platform businesses use SOTP and net-cash-informed earnings;
  separate treasury income from operating earnings
* Banks and non-bank lenders use price-to-book and sustainable ROE
* Insurers use embedded value and value-of-new-business economics
* REITs and yield vehicles use NAV, funds from operations, and distribution yield
* Loss-making businesses use EV/revenue, DCF, or SOTP only when the path to positive
  cash flow is explicit

Do not force P/E onto an industry where earnings are not the correct economic
anchor. For those sectors, preserve the three-year Bear/Base/Bull structure but
replace metric columns with the appropriate sector model and explain the deviation.
Use at least one secondary method as a reasonableness check when capital structure,
non-operating assets, or cyclicality could distort the primary method.

## Structured Data

Every report data object must include these fields when relevant:

* `snapshot`, `rating`, and `ratingLabel`
* `mix`, `revenue`, `ownership`, and `technical`
* `analysis.quarterStrength`, `analysis.earningsDrivers`, and `analysis.catalysts`
* `quarterProjection`
* `valuation`
* `coreView`, `swot`, `strategicPositioning`, and `marketContext`

A `valuation` object must contain `model`, `rationale`, exactly three `years`, and
`note`. Every year must contain exactly Bear, Base, and Bull scenarios. Every
scenario must contain `scenario`, `revenue`, `patMargin`, `pat`, `eps`, `multiple`,
`price`, and `remarks` unless an industry-specific model requires explicitly
renamed equivalents.

## Presentation And Accessibility

* Preserve the shared visual design and navigation
* Build navigation from the rendered section order, with exactly one link per
  section and no duplicate targets
* Version report data and shared renderer script URLs whenever their output contract
  or displayed content changes; update every report to the same renderer version
* Use semantic headings and tables with complete headers
* Keep all substantive fields visible in desktop and mobile layouts
* Make wide tables horizontally scrollable within their section without creating
  page-level overflow
* Give charts accessible labels and retain the rupee Y-axis on technical charts
* Use period-specific snapshot headings instead of generic quarter labels
* Do not duplicate report markup for card and list views on the index

## Required Validation

Before completing report work:

1. Run syntax or parser checks on every changed JavaScript or embedded JSON block.
2. Confirm the complete structured-data schema is present.
3. Verify projection and valuation arithmetic programmatically.
4. Open every affected report through the local server.
5. Test ordinary report URLs without manual script injection or temporary query
  parameters, and confirm the expected versioned data and renderer assets loaded.
6. Check required headings, navigation targets, source links, and runtime errors.
7. Validate desktop and mobile layouts for page-level horizontal overflow.
8. Confirm valuation tables contain three years, three scenarios per year, the
  nine required columns, correct price calculations, and correct potential-upside
  calculations and direction indicators.
9. Confirm search, sector filters, and card/list views still work after index edits.

Do not mark a report complete when figures are unsupported, assumptions are not
reconciled, the shared section contract is incomplete, or browser validation fails.
