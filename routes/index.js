const express = require('express')
const router = express.Router();

router.use('/books',require('./book.route'))

module.exports = router