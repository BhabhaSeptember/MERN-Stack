const { Signup, Login } = require("../Controllers/AuthController");
const { userVerification } = require("../Middlewares/AuthMiddleware");
const router = require("express").Router();

//causes SignUp controller to be executed
router.post("/signup", Signup);
router.post('/login', Login) 
router.get('/verify',userVerification)

module.exports = router;

// Nextjs and Mern pr