const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Transaction = sequelize.define('transactions', {
    title: DataTypes.STRING,
    description: DataTypes.STRING, 
    value: DataTypes.DOUBLE, 
    type: DataTypes.BOOLEAN
})

module.exports = Transaction;