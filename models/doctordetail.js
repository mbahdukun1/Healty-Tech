'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DoctorDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  DoctorDetail.init({
    name: DataTypes.STRING,
    address: DataTypes.TEXT,
    age: DataTypes.INTEGER,
    phone: DataTypes.INTEGER,
    gender: DataTypes.STRING,
    speciality: DataTypes.STRING,
    DoctorId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DoctorDetail',
  });
  return DoctorDetail;
};