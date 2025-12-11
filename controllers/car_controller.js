const car_model = require('./../models/car_model');
const APIFeaures = require('../utils/apiFeatures');
// **** Handlers ****
// Root
exports.root = (req, res) => {
    res.status(200).json({
        status: 'ok',
        data: 'hello from root GET'
    });
    console.log("Root Page");
};

// Cars
/* Read all */
exports.cars = async (req, res) => {
    /* console.log("req.query :");
    console.log(req.query); */

    // Build the Query
    /* let query = car_model.find(); */

    // Execute
    const features = new APIFeaures(car_model.find(), req.query).filter().sort().paginate().limitFields();
    const cars = await features.query;

    res.status(200).json({
        status: 'ok',
        results: cars.length,
        query: req.query,
        data: cars
    });
};

/* Read one car  */
exports.cars_Byid = async (req, res) => {
    try {
        // const car = await car_model.find({ car_id: req.params.id });
        // const car = await car_model.findById( req.params.id );
        const car = await car_model.findOne({ _id: req.params.id });
        res.status(200).json({
            status: 'ok',
            id: req.params.id,
            data: car
        });
    } catch (error) {
        res.status(400).json({
            status: 'faild to find car',
            message: error
        });
    }

};

/* Create */
exports.create_car = async (req, res) => {
    try {
        const newCar = await car_model.create(req.body);
        res.status(200).json({
            status: 'car created',
            data: newCar
        });
    } catch (error) {
        res.status(400).json({
            status: 'faild to create car',
            message: error
        });
    }
}

/* Update */
exports.update_car = async (req, res) => {
    console.log(req.body);
    try {
        const car = await car_model.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: 'car Update',
            data: car
        });
    } catch (error) {
        res.status(400).json({
            status: 'faild to Update car',
            message: error
        });
    }
}

/* Delete */
exports.delete_car = async (req, res) => {
    console.log(req.body);
    try {
        await car_model.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 'car Deleted',
        });
    } catch (error) {
        res.status(400).json({
            status: 'faild to Delete car',
            message: error
        });
    }
}