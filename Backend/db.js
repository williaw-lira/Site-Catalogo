require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    }
);

sequelize.authenticate()
.then(() => {
    console.log("conectado com sucesso");
})
.catch(erro => {
    console.log("falha ao se conectar: " + erro);
});

module.exports = sequelize;