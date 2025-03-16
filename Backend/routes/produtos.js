    // routes/produtos.js
const express = require('express');
const router = express.Router();
const Produto = require('../models/Produto');

    // GET /produtos – lista todos os produtos (com filtro opcional por categoria)
router.get('/', async (req, res) => {
    try {
        const { categoria } = req.query;
        let whereClause = {};
        if (categoria && categoria !== 'todos') {
        whereClause.categoria = categoria;
        }
        const produtos = await Produto.findAll({ where: whereClause });
        res.json(produtos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar produtos' });
    }
});

    // POST /produtos – cria um novo produto
router.post('/', async (req, res) => {
    try {
        const { nome, preco, marca, categoria, descricao, imagem } = req.body;
        const novoProduto = await Produto.create({ nome, preco, marca, categoria, descricao, imagem });
        res.status(201).json(novoProduto);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao cadastrar produto' });
    }
});

    // PUT /produtos/:id – atualiza um produto existente
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { nome, preco, marca, categoria, descricao, imagem } = req.body;
        const produto = await Produto.findByPk(id);
        if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
        }
        await produto.update({ nome, preco, marca, categoria, descricao, imagem });
        res.json(produto);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao atualizar produto' });
    }
});

    // DELETE /produtos/:id – exclui um produto
    router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const produto = await Produto.findByPk(id);
        if (!produto) {
        return res.status(404).json({ error: 'Produto não encontrado' });
        }
        await produto.destroy();
        res.json({ message: 'Produto excluído com sucesso' });
    } catch (error) {
        res.status(500).json({ error: 'Erro ao excluir produto' });
    }
});

module.exports = router;
