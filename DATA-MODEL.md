# Explore Athletics Data Model

## users/{uid}
Basic authentication directory: email, displayName, role, timestamps.

## athletes/{uid}
Private athlete profile owned by the signed-in account. Includes name, DOB, grade, gender, guardian/emergency contact, shirt size, and brief medical/accommodation note.

### athletes/{uid}/registrations/{id}
One team registration/interest submission.

### athletes/{uid}/documents/{id}
Metadata for an uploaded document. Actual bytes are in Firebase Storage.
Fields: type, fileName, storagePath, downloadURL, reviewStatus, timestamps.

### athletes/{uid}/payments/{id}
Admin-managed ledger records. Athlete can read but cannot alter.
Fields: label, amountDue, amountPaid, status, method, reference, updatedAt.

## seasons/{seasonId}
Public operating calendar for Explore's four seasons.

## teams/{teamId}
Public team catalog including Explore season, league, grades, gender, status, estimated CAA cost, and placement philosophy.

## Security philosophy
- Authentication determines identity.
- Firestore rules determine data access. Hiding `admin.html` is NOT used as security.
- Storage rules separately protect uploaded documents.
- Athletes access only the record matching their Firebase UID.
- Admin access requires a verified token whose email equals the configured administrator email.
