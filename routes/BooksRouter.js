const express = require('express');
const router = express.Router();
const BooksController = require('../controller/BooksController');

router.post('/add-book',BooksController.postBooks);

//fetch all books
router.get('/getAllbooks',BooksController.getAllbooks);

//fetch all books by catagory name
router.get('/getAllbooksByCatagory',BooksController.getAllbooksByCatagory);

router.get('/getBookById/:id',BooksController.getBookById);

router.put('/update-book/:id',BooksController.updateBook);

router.delete('/delete-book/:id',BooksController.deleteBook);

module.exports = router;