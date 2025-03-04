
        const mongoose = require('mongoose');

    // Substitua pela URI de conexão do seu MongoDB
    const uri = 'mongodb://localhost:27017/SiteNono';

    mongoose.connect(uri)
    .then(() => {
        console.log('Conectado ao MongoDB com sucesso!');
    })
    .catch((err) => {
        console.error('Erro ao conectar ao MongoDB:', err);
    });
