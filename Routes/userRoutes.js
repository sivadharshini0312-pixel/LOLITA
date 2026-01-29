import { createUserController, deleteUserController, getAllUserController, upadateUserPasswordController } from "../Controller/userController.js";

import express from 'express'

const userRoute = express.Router();  // post get put delete

userRoute.post('/signup', createUserController);
userRoute.get('/getusers', getAllUserController);
userRoute.put('/updatepass/:id', upadateUserPasswordController)
userRoute.delete('/deleteuser/:id', deleteUserController)



export default userRoute



