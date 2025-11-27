const mongoose = require('mongoose');

function connectToDB() {
    mongoose
        .connect(process.env.DB_CONNECT, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log('Connected to the database');
        })
        .catch((err) => {
            console.error('Database connection failed:', err.message);
        });
}

module.exports = connectToDB;
