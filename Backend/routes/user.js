const express = require('express');
const router = express.Router();
const {getMyProfile, register, login, updateUser, deleteUser, toggleAdminStatus} = require("../controllers/user")
const {isAuthenticated} = require("../middleware/authentication");

router.post('/register', register);
router.post('/login', login);

router.get('/logout', isAuthenticated, (req, res) => {
    res.status(200)
        .cookie("token", null, {
            expires: new Date(Date.now()),
            httpOnly: true,
            secure: true,
            sameSite: 'None' // Allow cross-site requests
        })
        .json({
            success: true,
            message: "Logged out successfully"
        })
});

router.get('/me', isAuthenticated, getMyProfile);
router.put('/update', isAuthenticated, updateUser);
router.put('/toggleAdmin/:id', isAuthenticated, toggleAdminStatus);
router.delete('/delete/:id', isAuthenticated, deleteUser);

module.exports = router;
