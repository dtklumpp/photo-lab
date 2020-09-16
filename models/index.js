const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/photos-db';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});

cnxn = mongoose.connection;

cnxn.on('connected', () => {
    console.log('db connected dtk');
})

cnxn.on('disconnected', () => {
    console.log('db disconnected dtk');
})

cnxn.on('error', (err) => {
    console.log('err:', err);
})

module.exports = {
    PhotoMod: require('./Photo.js')
}
