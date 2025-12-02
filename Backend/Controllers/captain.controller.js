const captainModel = require('../Models/captain.model');
const captainService = require('../Services/captain.service');
const { validationResult } = require('express-validator');
const blacklistTokenModel = require('../models/blacklistToken.model');

const registerCaptain = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password, vechicle } = req.body;

    const hashedPassword = await captainModel.hashPassword(password);

    const isCaptainAlreadyExists = await captainModel.findOne({ email });
    if (isCaptainAlreadyExists) {
        return res.status(409).json({ message: 'Captain with this email already exists' });
    }

    const captain = await captainService.createCaptains({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password,
        color: vechicle.color,
        plateNumber: vechicle.plateNumber,
        capacity: vechicle.capacity,
        typevehicle: vechicle.typevehicle
    });

    const token = captain.generateAuthToken();
    return res.status(201).json({ token, captain });
};


const loginCaptain = async (req, res) => {
    return res.send("Login API working");
};


module.exports = {
    registerCaptain,
    loginCaptain,
};

module.exports.getCaptainProfile = async (req, res) => {
    res.status(200).json({ captain: req.captain });
}

module.exports.logoutCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    await blacklistTokenModel.create({ token });
    res.clearCookie('token');
    res.status(200).json({ message: 'Logged out successfully' });
}
 


