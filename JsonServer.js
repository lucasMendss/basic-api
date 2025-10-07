const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => { 
    res.json({ message: 'API funcionando!' });
});

app.listen(PORT, () => { 
    console.log(`Servidor rodando na porta ${PORT}`);
});

let users = [
 { id: 1, name: 'Alice' },
 { id: 2, name: 'Bob' }
];

app.get('/users', (req, res) => {
 res.json(users);
});

app.use(express.json()); // Middleware
app.post('/users', (req, res) => {
 const newUser = req.body;
 newUser.id = users.length + 1;
 users.push(newUser);
 res.status(201).json(newUser); });