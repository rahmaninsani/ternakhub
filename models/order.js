"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user",
      });

      this.belongsTo(models.Address, {
        foreignKey: "address_id",
        as: "address",
      });

      this.belongsTo(models.PaymentMethod, {
        foreignKey: "payment_method_id",
        as: "payment_method",
      });

      this.belongsTo(models.ShippingMethod, {
        foreignKey: "shipping_method_id",
        as: "shipping_method",
      });
    }
  }
  Order.init(
    {
      user_id: DataTypes.INTEGER,
      address_id: DataTypes.INTEGER,
      payment_method_id: DataTypes.INTEGER,
      shipping_method_id: DataTypes.INTEGER,
      order_number: DataTypes.STRING,
      status: DataTypes.ENUM("Menunggu Pembayaran", "Dalam Pengiriman", "Selesai"),
      total: DataTypes.DOUBLE,
      received_date: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Order",
    }
  );
  return Order;
};
