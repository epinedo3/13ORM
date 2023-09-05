const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model { }

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    product_price: {
      type: DataType.DECIMAL,
      allowNull: false,
      // validates that the value is a decimal
    },
    product_stock: {
      type: DataType.INTEGER,
      allowNull: false,
      // Set a default value of 10
      //  Validates that the value is numeric
    },
    category_id: {
      type: DataTypes.INTEGER,
      // References the category model's id
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
