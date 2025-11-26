const express = require('express');
const carRouter = express.Router();

const CarController = require('./../controllers/car_controller')

// Routes
/* carRouter
.get('/', CarController.root);
 */

// CRUD : Create, Read, Update, and Delete

carRouter.route('/')
/* Read all */.get( CarController.cars)
/* Create */.post(CarController.create_car);

carRouter.route('/:id')
/* Read one car */.get(CarController.cars_Byid)
/* Update */.patch(CarController.update_car)
/* Delete */.delete(CarController.delete_car);


module.exports = carRouter;