// Package.json
require('dotenv').config({path: './config/.env'})
const express = require('express');
const bodyParser = require('body-parser');
const nunjucks = require('nunjucks')
const {resolve} = require('path')


// Tự định nghĩa

let client = require('./router/client.router')

const app = express();

nunjucks.configure('views', {
    autoescape: true,
    express: app,
    watch: process.env.NODE_ENV !== 'production',
});

app
.set('views', resolve(process.cwd(), 'views'))
.set('view engine', 'html');

app.use(express.static("public"))


app.use(bodyParser.urlencoded({
    extended: false,
}));
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;


app.use('/',client)

app.listen(PORT, ()=> console.log(`App running ${PORT}`))
