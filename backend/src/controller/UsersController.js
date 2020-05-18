const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const AuthHash = require('../auth/Hash.json');
const Users = mongoose.model("Users");

const generateToken = (params = {}) => {
    jwt.sign(params, AuthHash, {
        expiresIn: 86400,
    })
}
module.exports = {
    async createUsers(request,response){
        const { email } = request.body;
        const { password } = request.body;

        try{
            if(await Users.findOne({email})){
                return response.status(400).send({error: "User already exists!"})
            }

            const user = await Users.create(request.body);
            user.password = undefined;

            return response.json({user, token: generateToken({id: user._id})});
        }catch(erro){
            return response.status(400).send({error: "Register User failed!"})
        }
    }
}