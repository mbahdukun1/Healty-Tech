'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MedicalRecords extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MedicalRecords.hasMany(models.User)
      MedicalRecords.belongsTo(models.User , {foreignKey: 'PatientId', as:'Patient'})
      MedicalRecords.belongsTo(models.User , {foreignKey: 'DoctorId', as:'Doctor'})
    }
  }
  MedicalRecords.init({
    diagnosis: DataTypes.STRING,
    treatment: DataTypes.TEXT,
    cost: DataTypes.INTEGER,
    PatientId: {
      type : DataTypes.INTEGER,
      references: {
        model: 'Patients',
        key: 'id'
      }
    },
    DoctorId: {
      type : DataTypes.INTEGER,
      references: {
        model: 'Doctors',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'MedicalRecords',
  });
  return MedicalRecords;
};