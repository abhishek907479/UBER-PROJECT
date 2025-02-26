const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const captainController = require('../controllers/captain.controller')

router.post('/register' , [
    body('email').isEmail().withMessage("Invalid email"),
    body('fullname.firstname').isLength({min: 3}).withMessage("First name must be atleast three characters long"),
    body('password').isLength({min : 3}).withMessage("password must  be atleast six characters long"),
    body('vehicle.color').isLength({min:3}).withMessage("color must be atleast 3 characters long"),
    body('vehicle.plate').isLength({ min: 3}).withMessage("plate must be atleast 3 characters long"),
    body('vehicle.capacity').isInt({min : 1}).withMessage("capacity must be atleast 1"),
    body('vehicle.vehicleType').isIn(['car' , 'motorcycle' , 'auto']).withMessage("invalid vehicle type")
],

captainController.registerCaptain
)

module.exports = router;