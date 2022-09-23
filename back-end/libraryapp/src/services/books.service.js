const { Books } = require('../models');

const getAll = async () => {
  const books = await Books.findAll();
  return books;
};

const getById = async (id) => {
  const book = await Books.findByPk(id);
  return book;
}

const createBook = async ({ title, author, pageQuantity }) => {
  const newBook = await Books.create({ title, author, pageQuantity });
  return newBook;
}

module.exports = {
  getAll,
  getById,
  createBook,
};