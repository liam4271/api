'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Mesure extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Mesure.init({
    humidite: DataTypes.INTEGER,
    decibel: DataTypes.INTEGER,
    qualite: DataTypes.INTEGER,
    temperature: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Mesure',
  });
  return Mesure;
};