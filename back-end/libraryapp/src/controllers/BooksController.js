const { BooksService } = require('../services');

const getAll = async (req, res) => {
  console.log('cheguei no Controller');
  const books = await BooksService.getAll();
  res.status(200).json(books);
};

module.exports = {
  getAll,
};