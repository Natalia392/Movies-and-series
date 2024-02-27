const db = require('../models');
const config = require('../config/auth.config.js');
const User = db.user;

const Op = db.Sequelize.Op;

const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.signUp = async (req, res) => {
  try {
    // Save user to Database
    await User.create({
      username: req.body.username,
      password: bcrypt.hashSync(req.body.password, 8)
    });
    res.status(201).json({ message: 'User was registered succesfully' });
  } catch (error) {
    console.error('Error in signUp:', error);
    res.status(500).json({ message: error.message });
  }
};


exports.signIn = async (req, res) => {
  try {
    const { username, password } = req.body;
    
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(404).json({ message: 'user not found' });
    }

    const passwordIsValid = bcrypt.compareSync(password, user.password);
    if(!passwordIsValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    const token = jwt.sign({ id: user.id }, config.secret, {expiresIn: 86400});

    res.status(200).json({
      id: user.id,
      username: user.username,
      accessToken: token
    });
  } catch (error) {
    console.error('Error in signin: ', error);
    res.status(500).json({ message: 'An error ocurred while signing in' });
  }
};
