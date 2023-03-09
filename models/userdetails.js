'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserDetails.init({
    fullname: DataTypes.STRING,
    address: DataTypes.STRING,
    dateOfBirth: DataTypes.DATE,
    phone: DataTypes.STRING,
    gender: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'UserDetails',
  });
  return UserDetails;
};