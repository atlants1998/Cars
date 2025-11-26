const express = require('express');
const carRouter = require('./routes/car_route');

const app = express();
app.use(express.json());
app.set('query parser', 'extended'); //extended query parser to replace [] auto.

// Use Routers

app.use('/api/v1/cars', carRouter);


module.exports = app;
