const userModel = require('../models/user');
const { generateToken } = require('../config/jwt');
const bcrypt = require('bcrypt');

const getMyProfile = async (req, res)=>{
    try {
        res.json({ success: true, user: req.user });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}

const register = async (req, res) => {
    try {
        const { email, password, name, isAdmin } = req.body;

        if(!name || !email || !password){
            return res.status(400).json({
                success:false,
                message: "All fields are required"
            })
        }

        const existingUser = await userModel.findUserByEmail(email);

        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const userId = await userModel.registerUser({ email, password, name, isAdmin });
        const token = await generateToken({ email, userId, name, isAdmin });

        res.status(201)
            .cookie("token", token, {
                expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
                httpOnly: true,
                secure: true,
                sameSite: 'None' // Allow cross-site requests
            }).json({ token, userId });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findUserByEmail(email);

        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        const token = await generateToken({ email, userId: user.id, name: user.name, isAdmin: user.isAdmin });
        res.status(200).
        cookie("token", token, {
            expires: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
            httpOnly: true,
            secure: true,
            sameSite: 'None' // Allow cross-site requests
        })
            .json({
                success: true,
                user,
                token,
                message: "Login successful"
            })
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const toggleAdminStatus = async (req, res) =>{
    const userId = req.params.id;

    try {
        const newStatus = await userModel.toggleAdminStatus(userId);
        res.json({ success: true, "Admin Status": newStatus });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}


const updateUser = async (req, res) => {
    try {
        const { userId } = req.user;
        const updates = req.body;

        await userModel.updateUser(userId, updates);

        res.status(200).json({ success:true, message: 'User updated successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId, isAdmin } = req.user;

        if (!isAdmin) {
            return res.status(403).json({ message: 'Access denied' });
        }

        await userModel.deleteUser(id);
        res.status(200).json({ success:true, message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    register,
    login,
    updateUser,
    deleteUser,
    toggleAdminStatus,
    getMyProfile
};
