const { BooksService } = require('../services');
const error500 = 'Algo deu errado - status 500';

const getAll = async (req, res) => {
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
};

const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;
  const updatedBook = await BooksService.updateBook(id, { title, author, pageQuantity });
  if (!updatedBook) {
    return res.status(404).json({ message: 'Book not found' });
  }
  return res.status(200).json({ message: 'Book updated'});
};

const deleteBook = async (req, res) => {
  const { id } = req.params;
  const removed = await BooksService.deleteBook(id);
  if (!removed) {
    return res.status(404).json({ message: 'Book not found' });
  };
  res.status(200).json({ message: 'Book deleted'});
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  deleteBook,
};