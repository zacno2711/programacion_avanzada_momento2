const express = require('express');
require('dotenv').config()
const auth = require('./routes/auth')
const user = require('./routes/user')
const cars = require('./routes/cars')
const rent = require('./routes/rent')
// mongoose
const mongoose = require('mongoose');

const morgan = require('morgan')

const app = express();
const port = process.env.PORT || 3200

app.set('view engine','pug');
app.set('views','views');

app.use(express.urlencoded({extended:true}));
app.use(express.json())
app.use(express.static('public'));
app.use(morgan('dev'))




const session = require('express-session');
app.use(
    session({
      secret: 'tu_secreto', // Cambia esto por una cadena secreta para firmar las cookies
      resave: false,
      saveUninitialized: false,
    })
  );

app.use('/user',user)
app.use('/rent',rent)
app.use('/cars',cars)
app.use('/auth',auth)

app.listen(port, ()=>{
    console.log(`Servidor en http://localhost:${port}`);
})