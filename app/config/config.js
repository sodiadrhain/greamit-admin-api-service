'use strict';
const express = require('express');
const app = express();
const fs = require('firebase-admin');
const serviceAccount = require('./database');
fs.initializeApp({
    credential: fs.credential.cert(serviceAccount.firebaseConfig),
    // databaseURL: "https://greamit-693db.firebaseio.com"
});
let db = fs.firestore(); 

const privateKey = "-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQCJhLZdCh1MLKIN\nIFb74NX0gt2vQSviNJFOSi7z82k8IjkIJQQYORaHMwPNDetISZA3eNq44o4Okq/9\nMfZne+6HMk8aOYY7u9x2MFMLaR/ysNtFTTBKiYF15E4OaPINrNSJr9M/SmjzaJPy\nBvqZskgNN4dvxelzSFhJcgRTXPih5Vfm/M+4qEFXrWjdTkByZBen4Xcf95u97DKX\ns75d0ZlvsSGQm5tqKWLwrEbPsNc4Rfy6W+FQcG3nRSSZu+vPuCNiSmGR2sTP0cdM\nfdsYozUHJd4+jd1GGKBHlqItH49DLNMfXiiGsxVHOD4YILneGw9UUcr5mbyNFHvn\nKMjLKVu1AgMBAAECggEAAIfyoKfUqdpIMPX8QAGin/WeDcdSXpTQ06H4WDUQTrDc\nQvX9eQ7LOBPMUMyuCnBXkL/p91p9atOhJcrMrjG0C0OcRWPGR0mnbkDFHsRwt+c+\niTSTOQuViDMilMA5ekSZ/awLoKwZ45KVSt/vJQH/rhxtEIu2qzGor4p7YB1G4FwM\nE/xHQxhKdTZTI9FBtuOy8IkXDyv88XJUWvt4n24rNQq72fLirBgFO1gKqqJvexLt\naUeipO6+BUr4PCB46R2d6BdsNZCsanrYHeWGxDN2dLSE1qbtJQ7szF4FjSynsxzS\nWzl379xKbVPQ9luCh33MO2sA7dE7WIagS9FSQ4xRdQKBgQDBYKt11WDbC3x4VDW1\n20JQGfgTY+07WW7hV261Z2Myz4HLbgiT9OkWmYaAfJSOV4W0fE8Xb0ycPmFAEL3r\nopAkqfL1x+6r6v6psXHE3PXczzdyYy0okkvXEjO3hlyk7HlV0q0YrqCcxjQ0+y0D\n8VGR+mTwog0Yrq3jQ5mmZmY74wKBgQC2DThWmNY8b+VTMuA0/OENWySXDtubrI8T\n9cso58rwWIv62e3Nsy9W0MgOJc/RNBf1AXjwJeXMXTyoT8rmftcruaB5O/sBmEBI\nwc5cGkRUcpXod6Ke8xeVH0YwsbhHrPa1DJ2t6wVFyY9VsV9pkqG2YtTAQ3rLHmYW\nodePFXnNhwKBgF4z75MJjZNntw0PSNL8qwNGg1k+1rSQzrkr1Jy+bs6z07D8O2WI\na3w88g7poZzt+g6AeC8cYx/CK7H/9eUyXjHeMKOW8CgD5GdaL+gNFCCrOYGZ2sfm\n7Ncq4NLIu50ELd+nL/fUKh31WD1vFvDSwD/y0PWAnAyoG8GYjuNHAwqtAoGAAtgy\nCShaMJeO/b3NwwYwfgTujW2uAMCxe55bjkgQ47B+f2zoSk6CbtjUR2RP2vT1at6b\nBSWScZ8DU53rja5trkE4QKyvP1chqgFdOBMw/iDMNtWntNQXijzy28/rETOipzGL\nRSxm6LA9jRk4ZG3mGPNyX46uXH4dGj1tIM81GAECgYBch1grlxUuq0RbSmSCe41i\nA9nFTbN+30h1lF2otMr70UGryGiW5yqHAubocrnVip0IOknLxbsF0ARspBbCc4Dn\ndy+oJXRpgNA52CGVqKfscHIK0TEk7ekFKgQb5q93KfsQKhgQk8OUB85NeFz9vAda\nIj+cFYjyPyiaJHZLsyOl6Q==\n-----END PRIVATE KEY-----\n";

module.exports = {
  db: db,
  app: app,
  key: privateKey
}
