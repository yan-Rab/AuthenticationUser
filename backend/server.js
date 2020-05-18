const express = require('express');
const api = express();
const mongoose = require('mongoose');
const cors = require('cors');
api.use(express.json());
mongoose.connect("mongodb://localhost:27017/api-rest", {useNewUrlParser: true});

api.use(cors());
api.listen(3003);