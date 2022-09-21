'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('BooksModel', {
      
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
