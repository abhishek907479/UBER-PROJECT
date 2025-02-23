const express = require("express");
const router = express.Router();
const { body }  = require("express-validator");  // to validate the data that are coming from the f rontend
const userController = require("../controllers/user.controller");


router.post('/register' ,[
    body('email').isEmail().withMessage("Invalid Email"),
    body('fullname.firstname').isLength({min: 3}).withMessage("First name must be atleast three characters long"),
    body('password').isLength({min: 6}).withMessage("Password must be atleast six characters long")
],
userController.registerUser
)





module.exports = router;