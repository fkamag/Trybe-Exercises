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

const updateBook = async (id, { title, author, pageQuantity }) => {
  const [updatedBook] = await Books.update(
    { title, author, pageQuantity},
    { where: { id } },
  );
  return updatedBook;
}

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
};