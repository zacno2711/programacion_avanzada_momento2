const express = require('express');
const Car = require('../models/cars');
const { default: mongoose } = require('mongoose');

const router = express.Router();

let carError = false
let carMessage = ""

router.get('/list-vehicle',async(req, res) => {
  await Car.find({}).then(cars => {
    if (cars.length > 0) {
        console.log('Documentos encontrados en la colección "cars":');
        console.log(cars);
        res.render("listar-vehiculos",{vehicles: cars});
      } else {
        console.log('No se encontraron documentos en la colección "cars".');
      }
})
 
})






router.post('/list-vehicle', async (req, res) => {
    
})

module.exports = router;