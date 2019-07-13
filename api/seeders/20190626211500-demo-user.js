/* eslint-disable linebreak-style */
/* eslint-disable no-mixed-operators */
/* eslint-disable indent */
module.exports = {
  // eslint-disable-next-line no-unused-vars
  up: (queryInterface, Sequelize) =>
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    queryInterface.bulkInsert('Users', [{
      email: 'admin@yopmail.com',
      password: 'admin123',
      createdAt: new Date(new Date(new Date()).getTime() + 60 * 60 * 24 * 1000),
      updatedAt: new Date(new Date(new Date()).getTime() + 60 * 60 * 24 * 1000),
    }], {}),


  // eslint-disable-next-line no-unused-vars
  down: (queryInterface, Sequelize) =>
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

    queryInterface.bulkDelete('Users', null, {})
  ,
};
