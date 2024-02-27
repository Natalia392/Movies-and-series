const authJwt = require('./authjwt.js'); // For now only contains function to verify token
const verifySignUp = require('./verifySignUp'); // For now only contains function to check duplicate users

module.exports = {
  authJwt,
  verifySignUp
};