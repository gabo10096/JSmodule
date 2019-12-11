require('dotenv').config()

const express = require('express');
const courses = require('./routes/courses')
const login = require('./routes/login')
const bodyParser =  require('body-parser')

const {createStore} = require('./lib/db_connection')

const app = express();
const store = createStore()
//console.log(process.env.JWT_SECRET)

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}))

// parse application/json
app.use(bodyParser.json())

// reutilizacion del pull de conexion 
app.set('store', store)

app.get('/', (req, res) => res.send('Courses API'));

app.use('/courses', courses)

app.use('/login', login)

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
