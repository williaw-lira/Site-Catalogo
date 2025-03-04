    const mongoose = require('mongoose');

    const produtoSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    descricao: String,
    preco: { type: Number, required: true },
    categoria: { type: String, required: true },
    imagem: String,
    estoque: { type: Number, default: 0 }
    });

    const Produto = mongoose.model('Produto', produtoSchema);

    module.exports = Produto;
