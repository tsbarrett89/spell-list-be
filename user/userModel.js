const db = require('../data/dbConfig.js');

module.exports = {
    add,
    findByEmail,
    update,
    remove
}

function add(details){
    return db('user').insert(details)
}

function findByEmail(email){
    return db('user').where({ 'email': email})
}

function update(details, id){
    return db('user').where({ 'id': id }).update(details)
}

function remove(id){
    return db('user').where({ 'id': id }).del()
}