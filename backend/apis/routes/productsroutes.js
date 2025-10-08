const express = require('express');
const router = express.Router();
var Controller = require('./../controllers/productsControllers')

//routes
//CRUD OPERATIONS 

//create
router.post('/RegisterProduct', Controller.register);

//read all
router.getAll('/getProducts', Controller.getAll);