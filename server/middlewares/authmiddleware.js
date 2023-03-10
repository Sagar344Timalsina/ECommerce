const JWT = require('jsonwebtoken');
const userModel = require('../models/clientModule');

//Protected routes token base
const requireUserSignIn = async (req, res, next) => {
    try {
        const decode = JWT.verify(req.headers.authorization, process.env.SECRET_KEY);
        req.user = decode;
        next();
    } catch (error) {
        console.log("Error in token middleware", error);
    }
}

//user access with token base
const isUser = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id);
        if (user.role !== 0) {
            return res.status(401).send({
                sucess: false,
                msg: "UnAuthorization Access"
            });
        } else {
            next();
        }
    } catch (error) {
        console.log("Error in authmiddleware isUser ::", error)
    }
};
module.exports = { requireUserSignIn, isUser };