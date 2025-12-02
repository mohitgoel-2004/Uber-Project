const captainModel = require('../models/captain.model');

module.exports.createCaptains = async ({
     firstname, lastname, email, password, 
     color, plateNumber, capacity, typevehicle
     }) => {
    if (!firstname || !email || !password || !color || !plateNumber || !capacity || !typevehicle) {
        throw new Error('All fields are required');
    }
    const captain = await captainModel.create({
        fullname: { firstname, lastname },
        email,
        password: await captainModel.hashPassword(password),
        vechicle: {
            color,
            plateNumber,
            capacity,
            typevehicle
        }
    });
    return captain;
}
