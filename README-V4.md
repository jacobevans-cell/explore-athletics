# Explore Academy Athletics — Full Secure Portal V4

This version integrates:
- Public athletics website
- Athlete/family authentication
- Athlete profile and guardian/emergency data
- Grade/gender eligibility-filtered registration
- Maximum two choices per Explore season
- First-choice / second-choice tracking
- Admin registration approval / waitlist / decline
- Automatic roster placement when registration is approved
- Team roster management
- Jersey number and position
- Team coach, roster target, sports fee, and status
- Secure birth certificate / physical / insurance upload
- Admin document review
- Sports-fee ledger
- Athlete balance display
- Practice/game/tournament/meeting schedule
- Athlete schedule for approved teams
- Compliance / missing-document dashboard
- Team roster viability warnings
- Existing four-season CAA/IYAC/Internal catalog

SECURITY
- Admin email: jacobicusjax@gmail.com
- Firestore and Storage rules are included.
- Real sensitive documents should not be used until the new rules are published and a fake-account test passes.

INSTALL
1. Replace the website files in GitHub with this package.
2. Publish firestore.rules in Firestore.
3. Publish storage.rules in Firebase Storage.
4. Hard refresh the live site.
5. Admin: Initialize / Refresh Team Catalog once.
6. Test with one fake athlete before entering real student data.

IMPORTANT
The payment ledger tracks fees but does not process payment cards.
