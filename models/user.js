"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasOne(models.Cart, { foreignKey: "user_id" });
      this.hasMany(models.Address, { foreignKey: "user_id" });
      this.hasMany(models.Review, { foreignKey: "user_id" });
      this.hasMany(models.Order, { foreignKey: "user_id" });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      date_of_birth: DataTypes.DATE,
      gender: DataTypes.ENUM("Laki-laki", "Perempuan"),
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
