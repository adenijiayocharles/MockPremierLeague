'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Users', [{
     name: 'Allen Gbolahan',
     email: 'allengbolahan@gmail.com',
     createdAt: new Date().toDateString(),
     updatedAt: new Date().toDateString()
    }, {
      name: 'Michael Ikechi',
      email: 'michaelikechim@gmail.com',
      createdAt: new Date().toDateString(),
      updatedAt: new Date().toDateString()
     }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Users', null, {});
  }
};
