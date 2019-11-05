
exports.up = function(knex) {
    return knex.schema.createTable('pets', function (table) {
        // increments() adds a primary key, called 'id' as an auto-increment integer, not null and unique
        table.increments();

        table.string('name', 128).notNullable();
        table.string('species', 64).notNullable();
        table.string('breed', 64);
        table.string('food', 255);
        table.float('weight');
        table.string('weightUnit', 64);
        table.timestamps(true, true);
      })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('pets');
};
