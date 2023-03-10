const hasher = require('../../helpers/hasher');
const userModel = require('../../models/clientModule');

//User Singup 
const Usersignup = async (req, res, next) => {
    try {
        const { username, password, email, phone, address } = req.body;
        // const {phone} = req.body;
        const pattern = /@gmail.com/;
        const phoneno = /^\d{10}$/;
        if (username == "" || password == "" || email == "" || phone == "" || address == "") {
            return res.send({ error: "Your all detail must be require, Fillup All!" });
        }
        if (phoneno.test(phone) == false) {
            return res.send("Phone number is start with '98' and must be 10 digit");
        }
        if (password.length < 8) {
            return res.send("Password should be at least 8 characters")
        }
        if (pattern.test(email) == false) {
            return res.send("Invalid Email!!");
        }

        // check user
        const existinguser = await userModel.findOne({ email });

        //existing user
        if (existinguser) {
            return res.status(200).send({
                message: "The given email is Already Login!",
                success: false
            })
        }
        const ByPassword = await hasher.hashPassword(password);
        const userData = await new userModel(
            {
                username: username,
                password: ByPassword,
                email: email,
                phone: phone,
                address: address
            }).save();
        return res.status(201).send({
            message: `SignUp Successfull!!`,
            data: userData,
            success: true
        });

        // if(data){

        //     sendMail({username:username, password:randompass, email:email});
        // }
    } catch (error) {
        res.status(500).send({
            message: "Error in User SignUp"
        });
        console.log(error);
    }
}

module.exports = Usersignup;




/*
"firstname" : "ABC",
  "lastname" : "Shrestha", 
  "username" : "anil",
  "password" : "abc12345",
  "email" : "abc@gmail.com",
  "phone" : "9974585256",
  "address" : "KTM"
*/ 