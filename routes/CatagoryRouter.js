const express = require('express');
const router = express.Router();
const CatagoryController = require('../controller/CatagoryController');

router.post('/add-catagory',CatagoryController.postCatagory);

router.get('/get-catagory',CatagoryController.getAllCatagory);

router.put('/update-catagory/:id',CatagoryController.updateCatagory);

router.delete('/add-catagory',CatagoryController.deleteCatagory);

module.exports = router;