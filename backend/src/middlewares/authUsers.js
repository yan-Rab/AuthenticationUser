const jwt = require('jsonwebtoken');
const authHash = require('../auth/Hash.json');
module.exports = (request,response,next) => {
    const authHeader = request.headers.authorization;

    if(!authHeader){
        return response.status(400).send({error: "No token provided!"})
    }

    const parts = authHeader.split(' ');

    if(parts.length !== 2){
        return response.status(400).send({error: "token error!"});
    }

    const [bearer, token] = parts;

    if(!/^Bearer$/i.test(bearer)){
        return response.status(400).send({error: "token malformated!"});
    }

    jwt.verify(token, authHash.secret, (error, decoded) => {
        if(error){
            return response.status(400).send({error: "Invalid token!"});
        }

        request.userId = decoded._id;
        return next();
    } )
}