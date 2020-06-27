const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const path = require('path');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://aircnc:aircnc@cluster0-5jydi.mongodb.net/bd_test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
// GET, POST, PUT, DELETE
// buscar, criar, alterar, deletar

// req.query = Acessar query params(para filtros)
// req.params = Acessar route params (para alterar, deletar)
// req.body = Acessar corpo da requisição (para criação e edição)
app.use(cors());
app.use(express.json());
app.use(routes); 
app.use('/files', express.static(path.resolve(__dirname,'..','uploads')));

app.listen(3333);