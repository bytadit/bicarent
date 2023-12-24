'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cars', {
      id: {
        allowNull: false,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      plate: {
        type: Sequelize.STRING
      },
      manufacture: {
        type: Sequelize.STRING
      },
      model: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      rentPerDay: {
        type: Sequelize.INTEGER
      },
      capacity: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      availableAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      transmission: {
        type: Sequelize.STRING
      },
      available: {
        type: Sequelize.BOOLEAN
      },
      type: {
        type: Sequelize.STRING
      },
      year: {
        type: Sequelize.INTEGER
      },
      userCreate: {
        type: Sequelize.STRING
      },
      userUpdate: {
        type: Sequelize.STRING
      },
      userDelete: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cars');
  }
};