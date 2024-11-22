require('dotenv').config();
const express = require('express')
const sequelize = require('./db.js');

const PORT = process.env.PORT;

const app = express();
app.use(express.json());
