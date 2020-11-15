'use strict'
const config = {
    "type": process.env.FB_TYPE,
    "project_id": process.env.FB_PROJECT_ID,
    "private_key_id": process.env.FB_PRIVATE_KEY_ID,
    "private_key": process.env.FB_PRIVATE_KEY,
    "client_email": process.env.FB_CLIENT_EMAIL,
    "client_id": process.env.FB_CLIENT_ID,
    "auth_uri": process.env.FB_AUTH_URL,
    "token_uri": process.env.FB_TOKEN_URL,
    "auth_provider_x509_cert_url": process.env.FB_AUTH_PROVIDER,
    "client_x509_cert_url": process.env.FB_CLIENT_URL
  }

module.exports = {
    firebaseConfig: config
}