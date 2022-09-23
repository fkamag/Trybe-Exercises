const { BooksService } = require('../services');
const error500 = 'Algo deu errado - status 500';

const getAll = async (req, res) => {
  console.log('cheguei no Controller');
  const books = await BooksService.getAll();
  res.status(200).json(books);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const book = await BooksService.getById(id);
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }
  return res.status(200).json(book);
};

const createBook = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const newBook = await BooksService.createBook({ title, author, pageQuantity });
  return res.status(201).json(newBook);
}

module.exports = {
  getAll,
  getById,
  createBook,
};