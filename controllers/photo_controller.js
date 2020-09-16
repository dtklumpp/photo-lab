const express = require('express');
const router = express.Router();
module.exports = router;

const db = require('../models/index.js');

//index
router.get('/', (req, res) => {
    res.render('index.ejs');
});

//new route
router.get('/newPhoto', (req, res) => {
    res.render('new.ejs');
})

//create route
router.post('/', (req, res) => {
    db.PhotoMod.create(req.body, (err, dat) => {
        if(err) return console.log('err:', err);
        res.redirect('/photos');
    })
})
