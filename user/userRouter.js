const bcrypt = require('bcryptjs');
const express = require('express');

const generateToken = require('../utils/generateToken.js');

const userModel = require('./userModel.js');

const router = express.Router()

router.post('/register', (req, res) => {
    const creds = req.body

    if(creds.email && creds.password){

    } else {
        res.status(400).json({ errorMessage: "Email and password required to register." })
    }
})

module.exports = router