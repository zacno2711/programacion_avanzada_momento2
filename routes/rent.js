const express = require('express');
const Rent = require('../models/rent')
const User = require('../models/users');
const Car = require('../models/cars');

const router = express.Router();

const rentas = false

router.get('/listarentas',async (req, res)=>{

    res.render('listarentas',{rentas})
})
router.post('/listarentas',async (req, res)=>{

    res.render('listarentas',{rentas})
})
router.get('/rentar_vehicle',(req,res)=>{
    res.render("rentar_vehicle")
})
router.post('/rent_vehicle',async(req,res)=>{

    erenta = await Rent.findOne({rentnumber:req.body.rentnumber})
    eusername = await User.findOne({username:req.body.username})
    ecar = await Car.findOne({platenumber:req.body.platenumber})

    if(erenta){
       console.log("nrenta ya existe intente con otra") 
    }else{
        if(eusername && ecar){
            ecar.state = false
            ecar.save()
            renta = new Rent({
                rentnumber:req.body.rentnumber,
                username:eusername.username,
                platenumber:ecar.platenumber,
                rentdate:req.body.rentdate
            })
            renta.save()
            console.log("renta guardada")
            res.render("rentar_vehicle")
        }
    }
})

router.get('/list-rent',async(req, res) => {
    await Rent.find({}).then(rent => {
      if (rent.length > 0) {
          console.log('Documentos encontrados en la colección "rent":');
          console.log(rent);
          res.render("listar-rentas",{rentas: rent});
        } else {
          console.log('No se encontraron documentos en la colección "rent".');
        }
  })
   
})

module.exports = router;
