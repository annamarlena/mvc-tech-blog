const { Model, DataTyptes } = require("sequelize");
const sequelize = require("../config/connection");

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,  
      autoIncrement: true
    },
    firstName: {
      type: DataTyptes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTyptes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [8],
      },
    },
  },
  {
    sequelize,
    timestamps: true,
    underscored: true,
    modelName: "User"
  }
);

module.exports = User;