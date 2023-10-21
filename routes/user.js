const express = require('express');
const Car = require('../models/cars');
const { send } = require('express/lib/response');
const mongoose = require('../database/configDb')

const router = express.Router();

let loginError = null
let loginMessage = ""

let inicioError = null
let inicioMessage = null

router.get('/home', (req, res) => {
    const user = req.session.user;
    console.log(user)
    if (user) {
        // Renderiza la vista "home" y pasa los datos del usuario
        res.render('home', { name:user.name });
      } else {
        // Maneja la situación en la que el usuario no está autenticado
        res.redirect('/login'); // Redirige a la página de inicio de sesión
      }
});

router.get('/create-vehicle', (req, res) => {
    res.render('create-vehicle'); // Renderiza la vista "create-vehicle" para la creación de vehículo
});

router.post('/create-vehicle', async(req, res) => {
    await Car.findOne({platenumber: req.body.platenumber}).then((car)=>{
        if(car){
            res.render("create-vehicle")
            // alert("ya existe el vehiculo intente con otro")
        }
        else{
            newCar = {
                platenumber: req.body.platenumber,
                brand: req.body.brand,
                state: true
            }
            car = new Car(newCar)
            car.save()
            res.render("home")
        }
        }
    )})

router.get("/rentar-vehicle", (req, res)=>{
    res.redirect('/rent/rentar_vehicle')
})
router.get("/list-vehicle", (req, res)=>{
    res.redirect('/cars/list-vehicle')
})
router.get("/list-rent", (req, res)=>{
    res.redirect('/rent/list-rent')
})



module.exports = router;