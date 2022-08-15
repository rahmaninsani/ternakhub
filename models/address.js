"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Order);
      this.belongsTo(models.User, {
        foreignKey: "user_id",
        as: "user",
      });
    }
  }
  Address.init(
    {
      user_id: DataTypes.INTEGER,
      label: DataTypes.STRING,
      owner_name: DataTypes.STRING,
      phone: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Address",
    }
  );
  return Address;
};
