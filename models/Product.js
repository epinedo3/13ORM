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
    price: {
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      // validates that the value is a decimal
      validate: {
        isDecimal: {
          args: [true],
          message: "Price must be a valid decimal value"
        }
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // Set a default value of 10
      defaultValue: 10,
      //  Validates that the value is numeric
      validate: {
        isNumeric: {
          args: true,
          message: "Stock must be a numeric value"
        }
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'category',
        key: 'id',
        unique: false
      }
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
