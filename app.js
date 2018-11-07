const express = require('express');
const logger = require('morgan')
const parser = require('body-parser')

// set up the express app
const app = express();

//Log requests to console, dev environment

app.use(logger('dev'))

// Parse incoming requesrs
app.use(parser.json())
app.use(parser.urlencoded({extended: false}))

require('./server/routes')(app)
//Setup default catch-all route 
app.get('*', (req,res) => res.status(200).send({
  message: 'Welcome to the Todo App'
}))

module.exports = app;