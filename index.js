// Package.json
require('dotenv').config({path: './config/.env'})
const express = require('express');
const bodyParser = require('body-parser');


// Tự định nghĩa

let client = require('./router/client.router')

const app = express();

app.set('view engine', 'ejs');
app.set('views', './views');

app.use(express.static("public"))


app.use(bodyParser.urlencoded({
    extended: false,
}));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;


app.use('/',client)

app.listen(PORT, ()=> console.log(`App running ${PORT}`))
