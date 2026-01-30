import express from 'express'
import { protect } from '../middleware/protect.js'
import { isAdmin } from '../middleware/admin.js'
import { userSignUp, login } from '../Controller/authUserController.js'
const authUserRoute = express.Router()
// http://localhost:5000/api/auth/authsign
authUserRoute.post('/authsign', userSignUp)
authUserRoute.post('/authlogin', login)
authUserRoute.get("/profile", protect, (req, res) => {
    res.json({
        message: "protected profile",
        user: req.role
    })
})
authUserRoute.get('/admin', protect, isAdmin, (req, res) => {
    res.json({
        message: "welcome admin user",
        user: req.role
    })
})
export default authUserRoute