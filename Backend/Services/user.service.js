const userModel = require('../models/user.modal');

module.exports.createUser = async ({
    firstname, lastname, email, password
}) => {
    if (!firstname || !email || !password) {
        throw new Error('All fields are required');
    }

    const user = new userModel.create({
        fullname: { firstname, lastname },
        email,
        password: await userModel.hashPassword(password)
    });
    return user;
}