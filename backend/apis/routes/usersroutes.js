const express = require('express');
const router = express.Router();
var Controller = require('./../controllers/usersControllers')

//routes
//CRUD OPERATIONS

//create
router.post('/RegisterUser', Controller.register);

//read all
router.getAll('/getUsers', Controller.getAll)