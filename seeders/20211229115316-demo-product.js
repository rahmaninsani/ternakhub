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
    return queryInterface.bulkInsert("Products", [
      {
        name: "Ayam Broiler",
        image: "ayam-broiler.jpg",
        description: "Ayam Broiler",
        price: 32000,
        discount_percent: 10,
        weight: 1,
        unit: "kg",
        amount_sold: 16,
        rating: 4.7,
        createdAt: moment().format(),
        updatedAt: moment().format(),
      },
      {
        name: "Daging Sapi",
        image: "daging-sapi.jpg",
        description: "Daging Sapi",
        price: 68000,
        discount_percent: 0,
        weight: 500,
        unit: "gr",
        amount_sold: 89,
        rating: 4.5,
        createdAt: moment().format(),
        updatedAt: moment().format(),
      },
      {
        name: "Ikan Salmon Fillet",
        image: "ikan-salmon-fillet.jpg",
        description: "Ikan Salmon Fillet",
        price: 40500,
        discount_percent: 0,
        weight: 500,
        unit: "gr",
        amount_sold: 294,
        rating: 4.9,
        createdAt: moment().format(),
        updatedAt: moment().format(),
      },
      {
        name: "Telur Ayam",
        image: "telur-ayam.jpg",
        description: "Telur Ayam",
        price: 16000,
        discount_percent: 20,
        weight: 1,
        unit: "kg",
        amount_sold: 110,
        rating: 4.8,
        createdAt: moment().format(),
        updatedAt: moment().format(),
      },
      {
        name: "Susu Kambing Etawa",
        image: "susu-kambing-etawa.jpg",
        description: "Susu Kambing Etawa",
        price: 15000,
        discount_percent: 0,
        weight: 1,
        unit: "L",
        amount_sold: 54,
        rating: 4.6,
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
    return queryInterface.bulkDelete("Products", null, {});
  },
};
