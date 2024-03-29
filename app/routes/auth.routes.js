const { verifySignUp } = require('../middleware');
const controller = require('../controllers/auth.controller.js');

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    res.header(
      "Access-Control-Allow-Methods",
      "GET, POST, PUT, DELETE, OPTIONS"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [
      verifySignUp
    ],
    controller.signUp
  );

  app.post("/api/auth/signin", controller.signIn);
};