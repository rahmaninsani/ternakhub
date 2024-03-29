"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ShippingMethod extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Order);
    }
  }
  ShippingMethod.init(
    {
      name: DataTypes.STRING,
      cost: DataTypes.DECIMAL(10, 2),
    },
    {
      sequelize,
      modelName: "ShippingMethod",
    }
  );
  return ShippingMethod;
};
