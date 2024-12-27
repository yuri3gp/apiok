const express = require('express');
const app = express();
const port = 3000;

// Endpoint de Health Check
app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'ok',
        message: 'API está funcionando corretamente!',
        timestamp: new Date().toISOString()
    });
});

// Endpoint padrão
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
