// routes/UserRoutes.js
const { Router } = require('express');
const userController = require('../Controllers/userlogin');
const userRouter = Router();

userRouter.get('/', userController.getUsers);
module.exports = userRouter;
userRouter.post('/', userController.addUser);


