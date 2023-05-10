const express = require('express');

const router = express.Router();
const FeedbackController = require('../controller/FeedbackController')
router.post('/add-feedback',FeedbackController.postFeedback);

router.get('/get-feedback',FeedbackController.getFeedback);


module.exports = router;