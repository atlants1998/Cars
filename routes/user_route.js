const express = require('express');
const userRouter = express.Router();
const UserController = require('./../controllers/user_controller')

userRouter.route('/')
/* Read all */.get( UserController.users)
/* Create */.post(UserController.addUser);


userRouter.route('/:id')
/* Read User */.get( UserController.readUser)
/* Update */.patch(UserController.updateUser)
/* Delete */.delete(UserController.deleteUser);

module.exports = userRouter;