
const adminModel = require('../../models/admin');
const helper = require('../../helpers/authHelper');

const forgotPasswordController = async (req, res) => {
    try {
      const { email, newPassword } = req.body;
      if (!email) {
        res.status(400).send({ message: "Emai is required" });
      }
      if (!newPassword) {
        res.status(400).send({ message: "New Password is required" });
      }
      //check
      const admin = await adminModel.findOne({ email });
      //validation
      if (!admin) {
        return res.status(404).send({
          success: false,
          message: "Wrong Email",
        });
      }
      const hashed = await helper.hashpassword(newPassword);
      await adminModel.findByIdAndUpdate(admin._id, { password: hashed });
      res.status(200).send({
        success: true,
        message: "Password Reset Successfully",
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        message: "Something went wrong",
        error,
      });
    }
  };
  module.exports = forgotPasswordController;