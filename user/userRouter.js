const bcrypt = require('bcryptjs');
const express = require('express');

const generateToken = require('../utils/generateToken.js');

const userModel = require('./userModel.js');

const router = express.Router()

router.post('/register', (req, res) => {
    const creds = req.body

    if(creds.email && creds.password){
        userModel.findByEmail(creds.email)
            .then(user => {
                if(user[0]){
                    res.status(409).json({ errorMessage: `Email ${creds.email} is already registered.`})
                } else {
                    const hash = bcrypt.hashSync(creds.password, 8);
                    creds.password = hash;

                    userModel.add(creds)
                        .then(newUser => {
                            const token = generateToken(newUser[0])
                            res.status(201).json({ token, user_id: newUser[0] })
                        })
                        .catch(error => {
                            res.status(500).json({ errorMessage: 'Registration unsuccessful.'})
                        })
                }
            })
    } else {
        res.status(400).json({ errorMessage: "Email and password required to register." })
    }
})

router.post('/login', (req, res) => {
    const creds = req.body

    if(creds.email && creds.password){

    } else {
        res.status(400).json({ errorMessage: "Email and password required to login."})
    }
})

module.exports = router