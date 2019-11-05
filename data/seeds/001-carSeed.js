
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').del()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {
          VIN: '12ab23njfui3jngau845879hdfnk',
          make: 'Toyota',
          model: 'Tacoma',
          milage: '150,000.3',
          titleStatus: 'clear',
          transmissionType: 'V6'
        }
      ]);
    });
};
