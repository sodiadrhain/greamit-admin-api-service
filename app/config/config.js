'use strict';
const express = require('express');
const app = express();
const router = express.Router()
const fs = require('firebase-admin');
const serviceAccount = require('./database');
fs.initializeApp({
    credential: fs.credential.cert(serviceAccount.firebaseConfig),
    // databaseURL: "https://greamit-693db.firebaseio.com"
});
let db = fs.firestore(); 

module.exports = {
  db: db,
  app: app,
  route: router
}
