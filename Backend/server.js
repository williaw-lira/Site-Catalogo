    const express = require('express');
    const session = require('express-session');
    const path = require('path');
    require('dotenv').config();

    const app = express();

    // Middleware para ler dados enviados pelo formulário
    app.use(express.urlencoded({ extended: true }));

    // Configuração da sessão
    app.use(session({
    secret: process.env.SESSION_SECRET || 'meuSegredo',
    resave: false,
    saveUninitialized: false
    }));

    // Middleware de autenticação para proteger rotas
    function isAuthenticated(req, res, next) {
    if (req.session.user) {
        return next();
    }
    res.redirect('/login');
    }

    // Rota para página inicial
    app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend/Src/Pages/index.html'));
    });

    // Rota para a página de Login (GET)
    app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend/Src/Pages/login.html'));
    });

    // Rota para processar o Login (POST)
    app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Validação simples de credenciais (pode ser melhorada, por exemplo, consultando um banco de dados)
    if ((username === 'nono' || username === 'williaw') && password === 'rioveio123') {
        req.session.user = username; // Armazena o usuário na sessão
        res.redirect('/cadastro');  // Redireciona para a área admin
    } else {
        // Em caso de falha, redireciona novamente para a página de login (pode incluir query string para mensagem de erro)
        res.redirect('/login?error=1');
    }
    });

    // Rota protegida para a área Admin - Cadastro de Produtos
    app.get('/cadastro', isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend/Src/Pages/cadastro.html'));
    });

    // Outras rotas públicas
    app.get('/produtos', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend/Src/Pages/produtos.html'));
    });
    app.get('/sobre', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend/Src/Pages/sobre.html'));
    });
    app.get('/contato', (req, res) => {
    res.sendFile(path.join(__dirname, '../Frontend/Src/Pages/contato.html'));
    });

    

    app.listen(3333, () => {
    console.log("Servidor rodando na URL - http://localhost:3333");
    });
