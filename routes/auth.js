const express = require('express');
const User = require('../models/users');
const { send } = require('express/lib/response');
const mongoose = require('../database/configDb')

const router = express.Router();

let loginError = null
let loginMessage = ""

let inicioError = null
let inicioMessage = null

router.get('/register',async (req, res)=>{
    res.render('register',{error:loginError,message:loginMessage})
})

router.post('/register',async(req,res)=>{
    await User.findOne({username:req.body.username}).then((user)=>{
        if(user == null){
            usuario = new User(req.body)
            usuario.save()
            res.render('register',{message:"USUARIO CREADO CON EXITO",error:true})
        }else{
            merror = true
            res.render('register',{message:"USUARIO YA EXISTE",error:false})
        }
    })
})

router.get('/login',(req,res)=>{
    res.render('login',{error:inicioError,message:inicioError})
})

router.post('/login',async(req,res)=>{
    await User.findOne({username: req.body.username}).then((user)=>{
        if(user == null){
            res.render("login")
        }else{
            if(req.body.password == user.password){
                req.session.user = user;

                res.redirect(`/user/home`)
            }else{
                res.send("contraseña errada")
            }
        }
    })
})


module.exports = router;