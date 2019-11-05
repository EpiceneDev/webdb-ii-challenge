
exports.up = function(knex) {
    return knex.schema.createTable('pets', function (table) {
        // increments() adds a primary key, called 'id' as an auto-increment integer, not null and unique
        table.increments();

        table.string('vin', 128).notNullable();
        table.string('make', 64).notNullable();
        table.string('model', 64).notNullable();
        table.string('milage', 255).notNullable();;
        table.float('transmissionType', 255);
        table.string('titleStatus', 64);
        table.timestamps(true, true);
      })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('pets');
};
