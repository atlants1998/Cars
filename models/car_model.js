const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);

const CarSchema = new mongoose.Schema({
    car_id: {
        type: Number,
        unique: true
    },
    brand: String,
    model: String,
    year: Number,
    color: String,
    body_type: String,
    engine_capacity: String,
    transmission: String,
    fuel_type: String,
    price: Number,
    description: String,
    status: String,
    createdBy: {
        type: Number,
        required: true
    },
    images: [String]
});

// Add auto-increment plugin
CarSchema.plugin(AutoIncrement, { inc_field: 'car_id' });

const car_model = mongoose.model('cars', CarSchema);

module.exports = car_model;

