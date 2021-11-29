const {Sequelize, DataTypes} = require('sequelize')
const { db } = require('../db')

const Vaccine = db.define('Vaccine', {
    id:{
        type: DataTypes.BIGINT,
        autoIncrement:true,
        allowNull: false,
        primaryKey:true
    },
    name:{
        type: DataTypes.STRING
    },
    expected_date:{
        type: DataTypes.STRING
    },
    vaccinated:{
        type: DataTypes.BOOLEAN
    }
});

Vaccine.sync()

module.exports = Vaccine;