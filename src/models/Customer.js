import { DataTypes } from 'sequelize';
import BaseModel from './BaseModel.js';

class Customer extends BaseModel {}

export const attributes = {
  id_customer: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING(60),
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  phone_number: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
  phone_number_2: {
    type: DataTypes.STRING(20),
    allowNull: true,
  },
};

Customer.init(attributes, {
  ...BaseModel.CONFIG,
  modelName: 'Customer',
  tableName: 'customer',
});

export default Customer;
