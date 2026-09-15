---
description: "Implementation plan for the 24-company equity research report expansion"
applyTo: ".copilot-tracking/details/2026-09-13/24-company-report-expansion-details.md"
---

# 24-Company Report Expansion Plan

## User Requests

* Generate similar reports for the 24 requested companies.
* Follow the repository instructions for data sources.
* Preserve consistency with existing reports, including current-price metadata, ordered navigation, forecasts, valuation scenarios, potential upside, technical analysis, and sources.

## Context Summary

Follow `.github/instructions/equity-research-reports.instructions.md`, the shared coding standards, and the four research dossiers referenced by `.copilot-tracking/research/2026-09-13/24-company-report-expansion-research.md`.

## Implementation Checklist

### Phase 1: Group 1 Reports
<!-- parallelizable: true -->

* [ ] Create HTML and structured data for Paisalo, Laurus, Neuland, Supriya, Sai Life, and DEE.
* [ ] Validate syntax, schema, forecasts, valuations, sources, and responsive behavior.

### Phase 2: Group 2 Reports
<!-- parallelizable: true -->

* [ ] Validate/update Sterlite against the completed dossier.
* [ ] Create HTML and structured data for Concord, Ind-Swift, Windlas, Acutaas, and Welspun Living.
* [ ] Validate syntax, schema, forecasts, valuations, sources, and responsive behavior.

### Phase 3: Group 3 Reports
<!-- parallelizable: true -->

* [ ] Create HTML and structured data for Varroc, Electronics Mart India, Sundram Fasteners, Happy Forgings, Manorama, and Sanghvi Movers.
* [ ] Validate syntax, schema, forecasts, valuations, sources, and responsive behavior.

### Phase 4: Group 4 Reports
<!-- parallelizable: true -->

* [ ] Create HTML and structured data for J.G. Chemicals, Bliss GVS, ELANTAS, Standard Engineering Technology, SG Finserve, and TIL.
* [ ] Apply industry-specific models for SG Finserve and TIL.
* [ ] Validate syntax, schema, forecasts, valuations, sources, and responsive behavior.

### Phase 5: Library Integration
<!-- parallelizable: false -->

* [ ] Add 23 unique report cards to `index.html` without duplicating Sterlite.
* [ ] Update report count and sector filters as needed.
* [ ] Validate search, card/list views, links, and mobile layout.

### Phase 6: Full Review
<!-- parallelizable: false -->

* [ ] Run schema and arithmetic audits across all new and changed reports.
* [ ] Browser-test ordinary URLs at desktop and mobile sizes.
* [ ] Verify primary-source links and unsupported-field labels.
* [ ] Record changes and review outcomes.

## Dependencies

* Research summary: `.copilot-tracking/research/2026-09-13/24-company-report-expansion-research.md`
* Group dossiers under `.copilot-tracking/research/subagents/2026-09-13/`
* Shared renderer: `report-insights.js`
* Shared styles: `report-page.css` and `report-insights.css`

## Success Criteria

* 23 new reports plus one validated Sterlite report
* 42 total unique reports in the index
* Complete section contract and source citations
* Correct dated current prices and industry-appropriate valuation models
* Passing JavaScript, schema, arithmetic, navigation, runtime, and responsive checks
