const express = require('express');
const router = express.Router();
module.exports = router;

const db = require('../models/index.js');

//index
router.get('/', (req, res) => {
    res.send('here be photos index page');
});

