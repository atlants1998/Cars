const user_model = require('./../models/user_model');

// **** Handlers ****
// users
/* Read all */
exports.users = async (req, res) => {
    // Build the Query
    let query = user_model.find();

    query = query.select('-__v');

    // Execute Query
    const users = await query;

    res.status(200).json({
        status: 'ok',
        results: users.length,
        data: users
    });
}
/* Add */
exports.addUser = async (req, res) => {
    try {
        const newUser = await user_model.create(req.body);
        res.status(200).json({
            status: 'User created',
            data: newUser
        });
    } catch (error) {
        res.status(400).json({
            status: 'faild to create User',
            message: error
        });
    }
}

/* Read one user  */
exports.readUser = async (req, res) => {
    try {
        const user = await user_model.findOne({ user_id: req.params.id });
        res.status(200).json({
            status: 'ok',
            data: user
        });
    } catch (error) {
        res.status(400).json({
            status: 'faild to find user',
            data: error
        });
    }
}

/* Update */
exports.updateUser = async (req, res) => {
    try {
        const user = await user_model.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: 'user Update',
            data: user
        });
    } catch (error) {
        res.status(400).json({
            status: 'faild to Update user',
            message: error
        });
    }
}

/* Delete */
exports.deleteUser = async (req, res) => {
    try {
        await user_model.findByIdAndDelete(req.params.id);
        res.status(200).json({
            status: 'user Deleted',
        });
    } catch (error) {
        res.status(400).json({
            status: 'faild to Delete User',
            message: error
        });
    }
}