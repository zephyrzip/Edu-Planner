const jwt = require("jsonwebtoken");

const protect = (req, res, next) => {
    let token;

    // Check Authorization header
    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
        return res.status(401).json({
            message: "No token, authorization denied"
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // attach user info to request
        req.user = {
            id: decoded.id,
            role: decoded.role
        };

        next();
    } catch (error) {
        return res.status(401).json({
            message: "Token is invalid or expired"
        });
    }
};

module.exports = { 
    protect, 
    authMiddleware: protect // alias for easier imports
 };