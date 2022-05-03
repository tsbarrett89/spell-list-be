const db = require('../data/dbConfig.js');

module.exports = {
    add,
    findUserByEmail,
    update,
    remove
}

function add(details){
    return db('user').insert(details)
}