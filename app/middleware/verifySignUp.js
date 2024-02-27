const db = require('../models');
const User = db.user;

const checkduplicateUser = (req, res, next) => {
  User.findOne({
    where: {
      username: req.body.username
    }
  }).then(user => {
    if (user) {
      res.status(400).send({
        message: 'Username is already in use'
      });
      return;
    }

    next();
  });
};

module.export = checkduplicateUser;