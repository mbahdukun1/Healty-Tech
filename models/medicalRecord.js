'use strict';
const fs = require ('fs')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MedicalRecord extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MedicalRecord.belongsTo(models.User , {foreignKey: 'PatientId', as:'Patient'})
      MedicalRecord.belongsTo(models.User , {foreignKey: 'DoctorId', as:'Doctor'})
    }
  }
  MedicalRecord.init({
    diagnosis: {
      type: DataTypes.STRING,
      allowNull : false,
      validate: {
       notNull : {
         msg:"Diagnosis is required"
       },
       notEmpty: {
         msg: "Diagnosis is required"
       }
     }
     },
    treatment: DataTypes.TEXT,
    cost: {
      type:DataTypes.INTEGER,
      allowNull : false,
      validate: {
        notNull : {
          msg:"Cost is required"
        },
        notEmpty: {
          msg: "Cost is required"
        }
      }
    },
    PatientId: DataTypes.INTEGER,
    DoctorId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'MedicalRecord',
  });
  return MedicalRecord;
};