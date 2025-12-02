const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const captainSchema = new mongoose.Schema({
    fullname: {
        firstname: { type: String, required: true },
        lastname: { type: String }
    },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    socketId: { type: String },

    vehicle: {
        color: { type: String, required: true },
        plateNumber: { type: String, required: true },
        capacity: { type: Number, required: true },
        typevehicle: { type: String, required: true }
    },

    location: {
        lat: Number,
        lng: Number
    }
});

// INSTANCE METHODS
captainSchema.methods.generateAuthToken = function () {
    return jwt.sign(
        { _id: this._id, email: this.email },
        process.env.JWT_SECRET,
        { expiresIn: '24h' }
    );
};

captainSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
};

// STATIC METHOD
captainSchema.statics.hashPassword = async function (password) {
    return await bcrypt.hash(password, 10);
};

// FIX OverwriteModelError
const captainModel =
    mongoose.models.Captain || mongoose.model("Captain", captainSchema);

module.exports = captainModel;
