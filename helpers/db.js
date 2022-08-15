const Sequelize = require("sequelize");

const { Product, User, Review, Address, Cart, CartItem, ShippingMethod, PaymentMethod, Order, OrderItem } = require("../models");

async function openDbConnection({ dbName, username, password }) {
  const sequelize = new Sequelize(dbName, username, password, {
    host: "localhost",
    dialect: "mysql",
  });

  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    // .then(() => {
    //   Product.sync().then(() => {
    //     console.log("Table Products created.");
    //   });
    //   User.sync().then(() => {
    //     console.log("Table Users created.");
    //   });
    //   Review.sync().then(() => {
    //     console.log("Table Reviews created.");
    //   });
    //   Address.sync().then(() => {
    //     console.log("Table Addresses created.");
    //   });
    //   Cart.sync().then(() => {
    //     console.log("Table Carts created.");
    //   });
    //   CartItem.sync().then(() => {
    //     console.log("Table CartItems created.");
    //   });
    //   ShippingMethod.sync().then(() => {
    //     console.log("Table ShippingMethods created.");
    //   });
    //   PaymentMethod.sync().then(() => {
    //     console.log("Table PaymentMethods created.");
    //   });
    //   Order.sync().then(() => {
    //     console.log("Table Orders created.");
    //   });
    //   OrderItem.sync().then(() => {
    //     console.log("Table OrderItems created.");
    //   });
    // })
    .catch((err) => {
      console.log("Unable to connect to the database:", err);
    });
}

module.exports = openDbConnection;
