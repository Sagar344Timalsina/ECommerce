
const JWT = require("jsonwebtoken");
const admin = require('../../models/admin');
const helper = require('../../helpers/authHelper');


  //POST LOGIN
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    //check admin
    const adminData = await admin.findOne({ email });
    if (!adminData) {
      return res.status(404).send({
        success: false,
        message: "Email is not registerd",
      });
    }
    const match = await helper.comparePassword(password, adminData.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    //Creating token
    const token = await JWT.sign({ _id: adminData._id }, process.env.JWT_SECRET, {
      expiresIn: "14d",
    });
    res.status(200).send({
      success: true,
      message: "login successfully",
      adminData: {
        _id: adminData._id,
        name: adminData.name,
        email: adminData.email,
        address: adminData.address,
        phone: adminData.phone,
        
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

module.exports = loginController;
