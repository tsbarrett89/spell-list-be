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

function findByCharacter(characterId){
    return db('spell_list').where({ "character_id": characterId })
}

function update(details, id){
    return db('spell_list').where({ "id": id }).update(details)
}