// import express from "express";
// import path from "path";

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');     //core nodejs module
const dotenv = require('dotenv')
const Promise = require('bluebird')

const auth = require('../routes/auth');


//to set up dotenv
dotenv.config();

const app = express();

app.use(bodyParser.json());
mongoose.Promise = Promise;

//DB Config
const db = require('../keys/config.js').mongoURI;

//Connect to mongo
mongoose
.connect(db)
.then(() => console.log("MongoDB Connected..."))
.catch(err => console.log(err));

//Use route
 app.use('/api/auth', auth)

app.post("/api/auth", (req, res) => {
    res.status(400).json({ errors: { global: "Invalid credentials"} });
})

app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(5000, console.log("Running on localhost:5000"));


// important for babelrc
// "@babel/preset-env",
// "@babel/preset-react"