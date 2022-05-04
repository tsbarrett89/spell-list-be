const jwt = require('jsonwebtoken');

function generateToken(id){
    const payload = {
        subject: id
    };
    const secret = process.env.TOKEN_SECRET;
    const options = {
        expiresIn: '1d'
    };
    
    return jwt.sign(payload, secret, options)
}

module.exports = generateToken