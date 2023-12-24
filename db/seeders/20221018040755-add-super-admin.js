'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    const salt = await bcrypt.genSalt();

    await queryInterface.bulkInsert('Users', [
    {
      username: 'admin',
      name: 'Admin',
      email: 'admin@gmail.com',
      password: await bcrypt.hash('admin123', salt),
      role: 'admin',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'member',
      name: 'Member',
      email: 'member@gmail.com',
      password: await bcrypt.hash('member123', salt),
      role: 'member',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    ])
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */

    await queryInterface.bulkDelete('Users', null, {});
  }
};
