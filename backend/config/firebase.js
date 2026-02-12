require("dotenv").config();

const admin = require("firebase-admin");

if (!process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON) {
  throw new Error("Missing GOOGLE_APPLICATION_CREDENTIALS_JSON env variable");
}

const serviceAccount = JSON.parse(process.env.GOOGLE_APPLICATION_CREDENTIALS_JSON);

// 🔑 fix private_key newlines
if (serviceAccount.private_key) {
  serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, "\n");
}

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
module.exports = { db };