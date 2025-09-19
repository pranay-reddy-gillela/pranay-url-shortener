import jwt from 'jsonwebtoken';

export const isLoggedIn = (req, res, next) => {
    const token = req.cookies.jwt;
    if (!token) {
        console.log("No Token Found");
        return res.status(403).json({ status: "FORBIDDEN", message: "Token Not Found " });
    }
    try {
        const decrypted = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decrypted;
        next();
    }
    catch (err) {
        console.error("Error in validating the token in privateRoute", error.message)
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ status: 'FORBIDDEN', message: 'Token expired' });
        }
        return res.status(401).json({ status: 'FORBIDDEN', message: 'Invalid token' });
    }
}