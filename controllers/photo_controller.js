const express = require('express');
const router = express.Router();
module.exports = router;

//index
router.get('/', (req, res) => {
    res.send('here be photos index page');
});
