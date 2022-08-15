"use strict";
const moment = require("moment");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    return queryInterface.bulkInsert("Users", [
      {
        name: "Rahman Insani",
        date_of_birth: moment().format(),
        gender: "Laki-laki",
        phone: "0812345",
        email: "rahman@gmail.com",
        password: "abcde12345",
        createdAt: moment().format(),
        updatedAt: moment().format(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete("Users", null, {});
  },
};
