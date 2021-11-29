const dbConfig = require ("../db");
const Sequelize = require ('sequelize');

const sequelizeOptions = { dialect: dbConfig.dialect };

const sequelizeDataBase = new Sequelize(dbConfig.connectionStringUrl, sequelizeOptions );

const db = {
    Sequelize,
    sequelizeDataBase
};

const vaccinesModel = require ("./vacinas.models");
db.vaccines = vaccinesModel(sequelizeDataBase, Sequelize); 


module.exports = db;