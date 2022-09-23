const express = require('express');
// const booksRouter = require('./routers');
const { BooksController } = require('./controllers');

const app = express();

app.use(express.json());

app.get('/books', BooksController.getAll);

module.exports = app;