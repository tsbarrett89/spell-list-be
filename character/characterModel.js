const db = require('../data/dbConfig.js');

module.exports = {
    add,
    findByUser,
    update,
    remove
}

function add(details){
    return db('character').insert(details)
}

function findByUser(userId){
    return db('character').where({ 'user_id': userId})
}