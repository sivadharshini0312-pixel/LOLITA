import UserModel from "../Model/userModel.js";

// user create
export const createUserController = async (req, res) => {
    // guru mmmm
    try {
        const { name, email, password } = req.body
        const response = await UserModel.createUserModel({ name, email, password });
        res.status(201).json({
            message: "user has been created",
            userId: response
        })
    }
    catch (err) {
        res.status(500).json({ error: err.message })

    }
}
// get all the users
export const getAllUserController = async (req, res) => {
    try {
        const data = await UserModel.getAllUsersModel();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const upadateUserPasswordController = async (req, res) => {
    try {
        const { password } = req.body;
        const upadatePassword = await UserModel.updateUserPasswordModel(req.params.id, { password });
        if (!upadatePassword) {
            res.json({ message: "user not found" })
        }
        else {
            res.json({
                message: "password has been updated"
            })
        }
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}
export const deleteUserController = async (req, res) => {
    try {
        const delte = await UserModel.deleteUserModel(req.params.id);
        if (!delte) {
            res.json({ message: "user not found" })
        }
        else {
            res.json({
                message: "user has been removed from ur table"
            })
        }
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}