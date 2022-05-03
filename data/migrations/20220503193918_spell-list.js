exports.up = function(knex) {
    return knex.schema.createTable('spell_list', tbl => {
        tbl.increments()
        tbl.json('spells')
            .notNullable()
        tbl.integer('character_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('character')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
  
};
