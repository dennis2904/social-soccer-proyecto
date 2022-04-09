const express=require('express');
const rutas=express.Router()

const { mostrar }=require('../Controladores/loginControlador')

rutas.get('/login',mostrar)

module.exports=rutas