const express = require('express');
const Rent = require('../models/rent')

const router = express.Router();

const rentas = false

router.get('/listarentas',async (req, res)=>{

    res.render('listarentas',{rentas})
})
router.post('/listarentas',async (req, res)=>{

    res.render('listarentas',{rentas})
})

module.exports = router;
