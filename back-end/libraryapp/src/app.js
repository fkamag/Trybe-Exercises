const express = require('express');
// const booksRouter = require('./routers');
const { Books } = require('./controllers');

const app = express();

app.use(express.json());

app.get('/books', Books.getAll);

app.get('/books/:id', Books.getById);

app.post('/books', Books.createBook);

module.exports = app;