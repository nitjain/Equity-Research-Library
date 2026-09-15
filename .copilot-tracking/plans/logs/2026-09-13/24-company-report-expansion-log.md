<!-- markdownlint-disable-file -->

# 24-Company Report Expansion Planning Log

## Selected Path

Generate four independent groups of report/data pairs in parallel, integrate the index afterward, then run whole-library validation. This avoids shared-file conflicts while keeping company research isolated.

## Alternatives Considered

* One large generator pass was rejected because company-specific narrative and valuation models would be harder to review.
* Embedded JSON was rejected for new reports because current external data files are easier to validate and maintain.
* A second Sterlite report was rejected because the existing report should be updated in place.

## Research Deviations

* Unavailable source fields remain labeled unavailable rather than inferred.
* TIL receives no unsupported per-share target until its fully diluted share basis, net debt, and minority interest reconcile.
* Historical periods with restructuring, mergers, acquisitions, or changing share bases carry explicit comparability notes.

## Suggested Follow-On Work

* Add automated schema and arithmetic regression tests for all reports.
* Replace secondary market prices with exchange bhavcopy closes where reproducible.
* Backfill exact diluted-share notes and source-page references where currently unavailable.
