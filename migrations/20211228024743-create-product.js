"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
      },
      description: {
        type: Sequelize.TEXT,
      },
      price: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
      },
      discount_percent: {
        type: Sequelize.DOUBLE,
        defaultValue: 0.0,
      },
      weight: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      unit: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      amount_sold: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      rating: {
        type: Sequelize.DOUBLE,
        defaultValue: 0.0,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Products");
  },
};
