const {Sequelize} = require('sequelize');

const db = new Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    protocol: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }
});

db.authenticate().then(() => console.log('Banco de dados conectado com sucesso'))
    .catch(() => console.error('Não foi possível conectar ao banco de dados.', error))

module.exports = { db }