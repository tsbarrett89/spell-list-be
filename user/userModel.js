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

function findUserByEmail(email){
    return db('user').where({ 'email': email})
}

function update(details, id){
    return db('user').where({ 'id': id }).update(details)
}