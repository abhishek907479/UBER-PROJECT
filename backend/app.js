const dotenv = require('dotenv');
dotenv.config();  // to use environment variables
const express = require('express')
const cors = require('cors');
const connectToDb = require('./db/db')
const app = express()
const userRoutes = require('./routes/user.routes');



connectToDb();

app.use(cors());  // we accept request from all domains only in development purposes
app.use(express.json());
app.use(express.urlencoded({ extended: true}));


app.get('/' , (req , res) => {
    res.send("hello world")
});

app.use('/users' , userRoutes);

module.exports = app;