# V5 Production Deployment

Upload to GitHub Pages: index.html, login.html, portal.html, admin.html, assets/, css/, js/, legacy/.

Do NOT upload these private operational files to the public repository: firestore.rules, storage.rules, DATA-MODEL.md, SETUP.md, admin-security-setup.html, PRODUCTION-DEPLOY.md.

Publish firestore.rules in Firebase Firestore and storage.rules in Firebase Storage.

Before real documents: test one family account with two fake athletes, registration, admin approval, team fee, fake document, and event conflict.

App Check: enable it in Firebase Console after registering the GitHub Pages site with reCAPTCHA Enterprise. This requires a site key from Firebase/Google, so it is intentionally not hard-coded here.
