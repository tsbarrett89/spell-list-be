const db = require('../data/dbConfig.js');

module.exports = {
    add,
    findByCharacter,
    update,
    remove
}

function add(details){
    return db('spell_list').insert(details)
}