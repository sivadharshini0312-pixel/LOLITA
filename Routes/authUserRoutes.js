import express from 'express';
import { protect } from '../middleware/protect.js';
import { isAdmin } from '../middleware/admin.js';
import { userSignUp, login } from '../Controller/authUserController.js';
const authUserRoute = express.Router();
authUserRoute.post('/authsign', userSignUp);
authUserRoute.post('/authlogin', login);
authUserRoute.get('/profile', protect, (req, res) => {
    res.json({
        message: "protected profile",
        user: req.user
    });
});
authUserRoute.get('/admin', protect, isAdmin, (req, res) => {
    res.json({
        message: "welcome admin user"
    });
});

export default authUserRoute;
