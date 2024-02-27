const db = require('../models');
const config = require('../config/auth.config.js');
const User = db.user;

const Op = db.Sequelize.Op;

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.signup = (req, res) => {
  // Save user to Database
  User.create({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 8)
  })
    .then(() => {
      res.send({ message: 'User was registered succesfully' })
    })
    .catch(err => {
      res.status(500).send({ message: err.message });
    });
};

