const bcrypt = require('bcryptjs');
const express = require('express');

const generateToken = require('../utils/generateToken.js');

const user = require('./userModel.js');

const router = express.Router()


module.exports = router