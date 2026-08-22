# Explore Athletics V6 deployment

V6 changes the public athletics model from numbered league seasons to two parallel student pathways:

- Grades 4–5 elementary opportunities
- Grades 6–8 middle-school opportunities
- Grade 6 defaults to the MS pathway; selected CAA programs may use grade 6 as a bridge when administratively appropriate.

## Locked 2026–27 planning dates

### Elementary
- Girls Volleyball: Aug 11–Sep 25
- Boys Volleyball + Girls Flag Football: Oct 14–Dec 4
- Girls Basketball + Boys Flag Football: Jan 5–Feb 26
- Boys Basketball + Coed Soccer: Mar 16–Apr 30

### Middle School
- Girls Volleyball + Coed Flag Football: Sep 21–Nov 19
- Boys/Girls Basketball: Jan 4–Feb 25
- Coed Soccer: Mar 15–May 4

## Program philosophy
- Prioritize IYAC for middle school.
- Use CAA primarily for elementary opportunities and selected grade-6 bridge cases.
- Treat 4–5 conflicts separately from 6–8 conflicts.
- Only call two programs an athlete conflict when dates, grade eligibility, and gender eligibility overlap.

## Deployment order
1. Upload the V6 website files to GitHub.
2. Publish `firestore.rules`.
3. Publish `storage.rules`.
4. Hard refresh the live site.
5. Sign in as admin.
6. Run Initialize / Refresh Team Catalog.
7. Test with a fake family/athlete account before real documents.
