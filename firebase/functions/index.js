const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp();

// Sample HTTP function
exports.helloWorld = functions.https.onRequest((req, res) => {
  res.send("Hello from Firebase Cloud Functions!");
}); 