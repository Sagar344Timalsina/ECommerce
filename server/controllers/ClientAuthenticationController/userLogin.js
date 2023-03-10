const hashPassword = require('../../helpers/hasher');
const userModel = require('../../models/clientModule');
const JWT = require('jsonwebtoken');
const Userlogin = async (req, res, next) => {
   try {
      const { username, password } = req.body;
      if (username == "" || password == "") {
         return res.send("username and password must be required!!");
      }
      const findData = await userModel.findOne({ username: username });
      if (findData === null) {
         return res.status(401).send({
            success: false,
            message: "The username and password is not match", username, password
         })
      }
      else {
         const hashpass = findData.password;
         const isMatch = await hashPassword.comparePassword(password, hashpass);
         if (isMatch) {
            //token
            const token = await JWT.sign({ _id: findData._id }, process.env.SECRET_KEY, { expiresIn: "14d" });
            return res.status(200).send({
               message: "Successfully, Welcome to Login Page", username,
               success: true,
               user: {
                  _id: findData._id,
                  username: findData.username,
                  email: findData.email,
                  phone: findData.phone,
                  address: findData.address,
                  role: findData.role,
               },
               token
            });
            //  next();
         }
         else {
            return res.status(401).send({
               message: "Password is not Match", password,
               success: false
            });
         }

      }
   } catch (error) {
      res.status(500).send({
         success: false,
         message: error
      });
      console.log("Error in UserLogin", error);
   }
}

module.exports = Userlogin;