'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.MedicalRecord, {foreignKey:'DoctorId', as:'MedicalRecordPatient'})
      User.belongsToMany(models.User, {through:'MedicalRecords', as:'Doctors', foreignKey:'DoctorId'} )

      User.hasMany(models.MedicalRecord, {foreignKey:'PatientId', as:'MedicalRecordDoctor'})
      User.belongsToMany(models.User, {through:'MedicalRecords', as:'Patients', foreignKey:'PatientId'} )
      User.hasOne(models.UserDetail)
    }
  }
  User.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};