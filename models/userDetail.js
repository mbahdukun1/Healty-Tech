'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      UserDetail.belongsTo(models.User)
    }
  }
  UserDetail.init({
    fullname: {
      type:DataTypes.STRING,
      allowNull : false,
      validate: {
        notNull : {
          msg:"Name is required"
        },
        notEmpty: {
          msg: "Name is required"
        }
      }
      },
    address: DataTypes.STRING,
    dateOfBirth: {
     type: DataTypes.DATE,
     allowNull : false,
     validate: {
      notNull : {
        msg:"Birth date is required"
      },
      notEmpty: {
        msg: "Birth date is required"
      }
    }
    },
    phone: {
     type: DataTypes.STRING,
     allowNull : false,
     validate: {
      notNull : {
        msg:"Phone number is required"
      },
      notEmpty: {
        msg: "Phone number is required"
      }
    }
    },
    gender: {
      type: DataTypes.STRING,
      allowNull : false,
      validate: {
       notNull : {
         msg:"Gender is required"
       },
       notEmpty: {
         msg: "Gender is required"
       }
     }
     },
    UserId: {
      type : DataTypes.INTEGER,
      references: {
        model: 'Users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'UserDetail',
  });
  return UserDetail;
};