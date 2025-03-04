    const express = require('express');
    const router = express.Router();
    const Produto = require('../models/produto.js');

    // Rota para criar um novo produto
    router.post('/', async (req, res) => {
    try {
        const novoProduto = new Produto(req.body);
        const produtoSalvo = await novoProduto.save();
        res.status(201).json(produtoSalvo);
    } catch (error) {
        res.status(400).json({ mensagem: error.message });
    }
    });

    // Rota para listar todos os produtos
    router.get('/', async (req, res) => {
    try {
        const produtos = await Produto.find();
        res.json(produtos);
    } catch (error) {
        res.status(500).json({ mensagem: error.message });
    }
    });

    // Rota para filtrar produtos por categoria
    router.get('/categoria/:categoria', async (req, res) => {
    try {
        const produtos = await Produto.find({ categoria: req.params.categoria });
        res.json(produtos);
    } catch (error) {
        res.status(500).json({ mensagem: error.message });
    }
    });

    module.exports = router;
