const express = require('express');
// const booksRouter = require('./routers');
const { Books } = require('./controllers');

const app = express();

app.use(express.json());

app.get('/books', Books.getAll);

app.get('/books/:id', Books.getById);

app.post('/books', Books.createBook);

app.put('/books/:id', Books.updateBook);

app.delete('/books/:id', Books.deleteBook);

module.exports = app;