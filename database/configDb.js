const mongoose = require('mongoose')
// conexion a mongodb

mongoose.connect('mongodb://127.0.0.1:27017/dbSegundoMomento') 
  .then(db => console.log('Database MongoDB - dbSegundoMomento connected ...'))
  .catch(err => console.log(err));


