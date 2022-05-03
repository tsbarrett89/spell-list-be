const { defaultConfiguration } = require("express/lib/application");

exports.up = function(knex) {
    return knex.schema.createTable('character', tbl => {
        tbl.increments()
        tbl.string('name')
            .notNullable()
        tbl.string('class')
            .notNullable()
        tbl.integer('level')
            .notNullable()
        tbl.string('multiclass')
            defaultTo("")
        tbl.integer('multiclass_level')
            defaultTo(0)
        tbl.integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('user')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
  
};
