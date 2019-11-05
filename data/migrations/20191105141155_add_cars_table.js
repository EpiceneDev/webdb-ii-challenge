
exports.up = function(knex) {
    return knex.schema.createTable('cars', function(table) {
        // adds a primary key, called 'id' as and auto-increment integer, not null and unique
        table.increments();
    
        table.string('VIN', 128).notNullable();
        table.string('make', 64).notNullable();
        table.string('model', 64).notNullable();
        table.float('milage', 255).notNullable();
        table.string('titleStatus', 255);
        table.string('transmissionType', 128);
        table.timestamps(true, true);
      });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('cars');
};
