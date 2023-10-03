const express = require("express");
const router = express.Router();

//import all controllers file ;
const auth = require("../controller/authController");
const property = require("../controller/propertyController");



// controller functions
router.post('/login',auth.login)
router.post('/signup',auth.signup)
router.post('/addproperty',property.addProperty)
router.get('/getproperty',property.getProperty)

module.exports = router;

