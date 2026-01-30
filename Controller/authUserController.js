import { hashpassword, passwordCheck } from '../utils/hash.js'
import AuthUserModel from '../Model/authUserModel.js'


import { createToken } from '../utils/token.js'

// name email pass role
export const userSignUp = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;
        // guru@gamil.....
        const checkMail = await AuthUserModel.userLoginModel(email)
        if (checkMail) {
            return res.status(400).json({ message: "invalid credentials" })
        }
        // hashdbansbuodb^m sljdfoin#
        const newPassword = await hashpassword(password)
        const id = await AuthUserModel.userSignupModel({
            name,
            email,
            password: newPassword,
            role: role || "user"
        })
        res.status(201).json({ message: "user has been created" })

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await AuthUserModel.userLoginModel(email)
        if (!user) {
            return res.status(400).json({ message: "invalid user" })
        }
        const checkPassword = await passwordCheck(password, user.password)
        if (!checkPassword) {
            return res.status(400).json({ message: "invalid password" })
        }
        const token = createToken({
            id: user.id,
            role: user.role
        })
        res.status(200).json({ message: "login successfully", token })
    }
    catch (err) {
        res.status(500).json({
            error: err.message
        })
    }
}

