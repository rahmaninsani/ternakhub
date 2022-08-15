"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Review, { foreignKey: "product_id" });
      this.belongsToMany(models.Cart, {
        through: "CartItem",
        foreignKey: "product_id",
      });
    }
  }
  Product.init(
    {
      name: DataTypes.STRING,
      image: DataTypes.STRING,
      description: DataTypes.TEXT,
      price: DataTypes.DECIMAL(10, 2),
      discount_percent: DataTypes.DOUBLE,
      weight: DataTypes.DOUBLE,
      unit: DataTypes.STRING,
      amount_sold: DataTypes.INTEGER,
      rating: DataTypes.DOUBLE,
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
