const app = require('./app')
const mongoose = require('mongoose');

let DB = 'mongodb://127.0.0.1:27017/Car_shop';



mongoose.connect(DB).then((con) => {
    console.log('connected\n', con);
}).then(async () => {
    const cars = await mongoose.connection.db
        .collection('cars')
        .find().toArray();
    console.log(cars[2]);
});

