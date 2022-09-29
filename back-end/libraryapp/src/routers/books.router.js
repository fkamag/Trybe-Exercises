const express = require('express');
const { Books } = require('../controllers');
const router = express.Router();

router.get('/', Books.getAll);

router.get('/:id', Books.getById);

router.post('/', Books.createBook);

router.put('/:id', Books.updateBook);

router.delete('/:id', Books.deleteBook)

module.exports = router;