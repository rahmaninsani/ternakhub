"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      address_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Addresses",
          key: "id",
        },
      },
      payment_method_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "PaymentMethods",
          key: "id",
        },
      },
      shipping_method_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "ShippingMethods",
          key: "id",
        },
      },
      order_number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      status: {
        type: Sequelize.ENUM("Menunggu Pembayaran", "Dalam Pengiriman", "Selesai"),
        allowNull: false,
      },
      total: {
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      received_date: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable("Orders");
  },
};
