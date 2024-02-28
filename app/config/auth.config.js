require('dotenv').config();

// Password for encode and decode jwt
module.exports = {
  secret: process.env.SECRET_KEY
}