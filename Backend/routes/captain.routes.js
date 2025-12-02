const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const captainController = require('../Controllers/captain.controller');
// const authMiddleware = require('../middleware/auth.middleware');


router.post('/register',[
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
    body('fullname.firstname').isLength({ min: 3 }).withMessage('First name must be at least 3 characters long'),
    body('vechicle.color').isLength({ min: 3 }).withMessage('Vehicle color must be at least 3 characters long'),
    body('vechicle.plateNumber').isLength({ min: 3 }).withMessage('Plate number must be at least 3 characters long'),
    body('vechicle.capacity').isInt({ min: 1 }).withMessage('Capacity must be at least 1'),
    body('vechicle.typevehicle').isIn(['bike', 'car', 'auto']).withMessage('Invalid vehicle type'),
],
 captainController.registerCaptain
);

router.post('/login', [
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
],
 captainController.loginCaptain
);



module.exports = router;