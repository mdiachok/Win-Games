const express = require('express');
const bodyParser = require('body-parser');
const product = require('./routes/product.route');

const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let db_url = 'mongodb://marymary:12345678m@ds055980.mlab.com:55980/usermartest';
mongoose.connect(db_url, {useNewUrlParser: true});
mongoose.connection.on('error', function (req, res){
    console.log('MongoDB connection error:');
});
mongoose.connection.on('connected', function (req, res){
    console.log('Conected to db');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/products', product);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
