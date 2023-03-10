const admin = require('../../models/admin');
const helper = require('../../helpers/authHelper');

const registerController = async (req, res) => {
    let pattern = /@gmail.com/;
    try {
      const { name, password, email, address, phone} = req.body;
      //validations
      if (!name) {
        return res.send({ message: "Name is Required" });
      }
      if (!password) {
        return res.send({ message: "Password is Required" });
      }
      if (!email) {
        return res.send({ message: "Email is Required" });
      }
      if (!address) {
        return res.send({ message: "Address is Required" });
      }
      if (!phone) {
        return res.send({ message: "Phone no is Required" });
      }
      if (phone.substring(0, 2) != "98") {
        return res.send({ message: "Phone no should start with 98" });;
      }
      if (pattern.test(email) == false) {
        return res.send({ message: "Invalid Email"});
      }
  
      //check admin
      const exisitingAdmin = await admin.findOne({ email });
      //exisiting user
      if (exisitingAdmin) {
        return res.status(200).send({
          success: false,
          message: "Already Register please login",
        });
      }
      //register admin
      const hashedPassword = await helper.hashpassword(password);
      //save
      const newadmin = await new admin({
        name,
        password: hashedPassword,
        email,
        address,
        phone,
      }).save();
  
      res.status(201).send({
        success: true,
        message: "Admin Register Successfully",
        newadmin,
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Error in Registeration",
        error,
      });
    }
  };
  module.exports = registerController;