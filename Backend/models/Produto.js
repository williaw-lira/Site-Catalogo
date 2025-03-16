
const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Produto = sequelize.define('Produto', {
    nome: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: true,
    },
    marca: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    categoria: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    descricao: {
        type: DataTypes.TEXT,
        allowNull: true,
    },
    imagem: {
        type: DataTypes.STRING, // pode ser uma URL ou caminho do arquivo
        allowNull: true,
    }
});

module.exports = Produto;
