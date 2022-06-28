'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [{
      fullName: 'Nome Teste',
      email: "email@teste.com",
      phone_num: "99887766554",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
    },{
      fullName: 'JEduardo',
      email: 'edu@test.com',
      phone_num: "12345678912",
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP')
    }
  ], {})
  },

  async down (queryInterface, Sequelize) {
    queryInterface.bulkDelete('Users', null, {})
  }
};
