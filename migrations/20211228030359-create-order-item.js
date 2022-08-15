"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("OrderItems", {
      order_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "Orders",
          key: "id",
        },
      },
      product_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        references: {
          model: "Products",
          key: "id",
        },
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
    await queryInterface.dropTable("OrderItems");
  },
};
