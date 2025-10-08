const express = require('express');
const router = express.Router();
var Controller = require('./../controllers/servicesControllers')

//routes
//CRUD OPERATIONS

//create
router.post('/RegisterService', Controller.registerService);

//read all
router.getAll('/getServices', Controller.getAll)