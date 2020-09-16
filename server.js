const express = require('express');
const app = express();
const PORT = 4000;

const methOver = require('method-override');
app.use(methOver('_method'));

app.use(express.urlencoded({extended: false}));
app.use(express.static('public'));

//const path = require('path');
//app.use(express.static(path.join(__dirname, 'public')));

const photoController = require('./controllers/photo_controller');
app.use('/photos', photoController);

app.listen(PORT, () => {
    console.log('now listening at port: '+PORT);
});

app.get('/', (req, res) => {
    res.send('here be home page');
});

