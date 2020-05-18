const express = require('express');
const authMiddleware = require('./middlewares/authUsers');
const routes = express.Router();

const UsersController = require('./controller/UsersController');

routes.post('/createUsers', UsersController.createUsers);
routes.get('/searchUsers', authMiddleware ,UsersController.searchUsers);
routes.post('/authUsers', UsersController.authenticationUsers);
module.exports = routes;