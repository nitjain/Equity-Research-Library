<!-- markdownlint-disable-file -->

# 24-Company Report Expansion Details

## Context

* Plan: `.copilot-tracking/plans/2026-09-13/24-company-report-expansion-plan.instructions.md`
* Research: `.copilot-tracking/research/2026-09-13/24-company-report-expansion-research.md`
* Instructions: `.github/instructions/equity-research-reports.instructions.md`

## Shared File Contract

Each new company receives:

* `<Company>-September-2026.html`
* `<company>-insights-data.js`

The HTML contains the narrative sections in repository order, direct source links, shared stylesheet links, the company data script, and `report-insights.js?v=20260913-price-nav-final`. Structured data supplies snapshot, rating, mix, five-year history, ownership, technicals, analysis, Q2 FY27-Q1 FY28 projection, three-year valuation, core view, SWOT, strategic positioning, and market context.

## Group File Ownership

### Group 1

Paisalo Digital, Laurus Labs, Neuland Laboratories, Supriya Lifescience, Sai Life Sciences, and DEE Development Engineers files only.

### Group 2

Concord Biotech, Ind-Swift Laboratories, Windlas Biotech, Acutaas Chemicals, Welspun Living files, plus the existing Sterlite HTML/data pair.

### Group 3

Varroc Engineering, Electronics Mart India, Sundram Fasteners, Happy Forgings, Manorama Industries, and Sanghvi Movers files only.

### Group 4

J.G. Chemicals, Bliss GVS Pharma, ELANTAS Beck India, Standard Engineering Technology, SG Finserve, and TIL files only.

No implementation phase edits `index.html`; library integration occurs after all groups complete.

## Validation Per Group

1. JavaScript syntax for every data file.
2. Required structured-data fields.
3. Four quarterly projection rows and run-rate reconciliation.
4. Three valuation years and three scenarios per year.
5. PAT, EPS, projected-price, and upside calculations where per-share valuation is supportable.
6. Ordinary browser URL load, section order, unique navigation, source links, and no page overflow.
7. Unsupported fields explicitly marked unavailable.

## Model Exceptions

* Paisalo and SG Finserve use P/B and sustainable ROE, with adapted valuation columns if needed.
* ELANTAS uses CY26E-CY28E and latest H1/Q2 CY2026 reporting.
* TIL uses EV/revenue or normalized EV/EBITDA and must not publish unsupported per-share prices.
* Sterlite remains one report and uses SOTP/EV-EBITDA-informed valuation.
