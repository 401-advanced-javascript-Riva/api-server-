'use strict';

// const MongoClient = require('mongodb').MongoClient;

const mongoose = require('mongoose');


const server = require('./lib/server.js');
server.start();

//Connect to Database
mongoose.connect(process.env.MONGODB_URI,{useNewUrlParser:true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...',err));




