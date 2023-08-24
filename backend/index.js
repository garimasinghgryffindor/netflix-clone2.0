const express = require("express");
const app = express();

const dotenv = require('dotenv');
const bodyParser = require('body-parser')
const cors = require('cors');
dotenv.config();

const axios = require('axios')

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }))

