const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require("bcryptjs");
const authHash = require('../auth/Hash.json');
const Users = mongoose.model('Users');
const generateToken = (params = {}) => {
    return jwt.sign(params, authHash.secret, {
        expiresIn: 86400,
    })
}

module.exports = {
    async createUsers(request,response){
        const { email } = request.body;

        try{
            if(await Users.findOne({email})){
                return response.status(400).send({error: "User Already exists!"});
            }
            const users = await Users.create(request.body);
            users.password = undefined;
            return response.json({users, token: generateToken({id: users._id})});
        }catch(error){
            return response.status(400).send({error: "Register User failed!"});
        }
    },

    async searchUsers(request,response){
        const users = await Users.paginate();
        return response.json(users);
    },

    async authenticationUsers(request,response){
        const { email, password} = request.body;

        const users = await Users.findOne({email}).select("+password");
        if(!users){
            return response.status(400).send({error: "User not found!"});
        }

        if(!await bcrypt.compare(password, users.password)){
            return response.status(400).send({error: "Invalid password!"});
        }

        users.password = undefined;
        return response.json({users, token : generateToken({id: users._id})});

    }
}