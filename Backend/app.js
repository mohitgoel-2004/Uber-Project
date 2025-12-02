const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const app = express();

const cors = require('cors');
const cookieParser = require('cookie-parser');

const connectToDB = require('./db/db');
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Database
connectToDB();

// Test route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Routes
app.use('/users', userRoutes);
app.use('/captains', captainRoutes);

module.exports = app;
