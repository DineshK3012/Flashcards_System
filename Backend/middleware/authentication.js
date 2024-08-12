const { verifyToken } = require('../config/jwt');

exports.isAuthenticated = async (req, res, next) => {
    try {
        const { token } = req.cookies;

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Please login first"
            })
        }
        req.user = await verifyToken(token, process.env.JWT_SECRET);
        if(!req.user){
            res.status(500).json({ success: false, message: "Please login first" });
        }

        next();
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}
