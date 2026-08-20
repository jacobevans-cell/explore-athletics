# Explore Academy Athletics Secure Portal — Deployment Guide

## STOP: do not use real student records until security setup is complete
This package is intentionally locked down. The administrator page is not linked from the public website, is marked `noindex`, requires a verified Firebase account, and Firestore/Storage rules independently enforce administrator access.

## 1. Use a dedicated administrator Google account
Choose the Google account you alone control for athletics administration.

Replace this exact placeholder in THREE files:
`Jacobicusjax@gmail.com`

Files:
- `js/firebase-config.js`
- `firestore.rules`
- `storage.rules`

Use the exact same lowercase email in all three.

## 2. Firebase Authentication
Firebase Console → Authentication → Sign-in method
Enable:
- Email/Password
- Google

Anonymous authentication is not required by this secure portal and should be disabled after the old interest form is retired.

## 3. Firestore
Firebase Console → Firestore Database → Rules
Paste the complete contents of `firestore.rules` and Publish.

IMPORTANT: these rules intentionally remove the old public-read/public-delete permissions from the previous survey build.

## 4. Firebase Storage
Firebase Console → Storage → Get Started
Create the default Storage bucket.
Then open Storage → Rules, paste `storage.rules`, and Publish.

Uploaded birth certificates/physicals are stored under:
`athlete-documents/{firebase-user-uid}/{document-type}/...`
Only the owning verified account and the configured administrator can read them. The portal intentionally does NOT store Firebase public download-token URLs for sensitive athlete documents; admin opens files through authenticated Storage SDK reads.

## 5. GitHub Pages
Create a NEW repository, recommended name:
`explore-athletics`

Upload this entire package preserving folders.
Settings → Pages → Deploy from a branch → main → /(root)

Do not overwrite your current sports site until this secure portal is tested.

## 6. Test security BEFORE inviting athletes
A. Open `login.html` and sign in as the administrator Google account.
B. Confirm `admin.html` loads.
C. Sign out.
D. Create a normal test account with a different email and verify it.
E. Confirm the test account can open `portal.html` but is redirected away from `admin.html`.
F. Upload a fake PDF/image to the test athlete account.
G. Confirm admin can see it.
H. Confirm another athlete account cannot open that file or athlete record.

## 7. Initialize 2026–27 catalog
Admin → Overview → Initialize / Refresh Team Catalog
This creates the `seasons` and `teams` Firestore collections.

## 8. What the portal tracks now
- Secure athlete/family login
- Email verification
- Athlete profile and DOB
- Grade / gender
- Parent/guardian details
- Emergency contact
- Team registration / interest
- Birth certificate upload
- Sports physical upload
- Insurance document upload
- Admin document approval/rejection
- Sports fee amount due / amount paid / status / method / reference
- Program team catalog and CAA cost estimates
- Explore season structure and IYAC/CAA designation
- Existing JV volleyball portal preserved in `/legacy/`

## Payment limitation
This release TRACKS payments. It does not charge cards or collect money online. Real online payment processing should be connected later through an approved processor such as Stripe or your school's existing payment system. Do not store credit-card numbers in Firestore.

## Privacy recommendation
Birth certificates, physicals, DOBs, emergency contacts, and minor athlete information are sensitive records. Keep administrator access limited, use a strong Google-account password with MFA, and follow school retention/deletion policy. Only collect records the school actually requires.
