const app = require('./app')
const mongoose = require('mongoose');

let DB = 'mongodb://127.0.0.1:27017/Car_shop';

async function get_cars() {
    
    await console.log("cars"/* [2] */);
}

/* get all data */
mongoose.connect(DB).then((con) => {
    console.log('connected\n', con);
}).then( get_cars());

