const { BooksModel } = require('../models');

const getAll = async () => {
  console.log('cheguei no Service');
  const books = await BooksModel.findAll();
  return books;
};

module.exports = {
  getAll,
};