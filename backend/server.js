const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/api-rest", {useNewUrlParser: true, useUnifiedTopology: true});
require('./src/models/Users');

app.use('/apiRest', require('./src/routes'));
app.listen(3001);