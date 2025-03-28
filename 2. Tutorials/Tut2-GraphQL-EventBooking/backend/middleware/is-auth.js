const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const authHeader = req.get("Authorization");
    if (!authHeader) { //no valid token
        req.isAuth = false;
        return next();
    }
    const token = authHeader.split(" ")[1]; //Authorization: Bearer [token] i.e. return token value after space 
    if(!token || token === "") {
        req.isAuth = false;
        return next();
    }
    let decodedToken;
    try {
    decodedToken = jwt.verify(token, "somesupersecretkey"); //return decoded token
    } catch(error) {
        req.isAuth = false;
        return next();
    }
    if (!decodedToken) {
        req.isAuth = false;
        return next();
    }
    req.isAuth = true;
    req.userId = decodedToken.userId;
    next();
}