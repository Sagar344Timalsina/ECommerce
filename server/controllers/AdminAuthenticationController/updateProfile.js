// const adminModel = require('../../models/admin');
const adminModel = require('../../models/clientModule');
const helper = require('../../helpers/authHelper');

//update profile
const updateProfileController = async (req, res) => {
    try {
     const { name, email, password, address, phone } = req.body;
      
      const admin = await adminModel.findById(req.user._id);   //password
      if (password && password.length < 6) {
        return res.json({ error: "Passsword is required and atleast 6 character long" });
      }
      const hashedPassword = await helper.hashpassword(password);
      const updatedAdmin = await adminModel.findByIdAndUpdate(
        req.user._id,
        {
          name: name || admin.name,
          password: hashedPassword || admin.password,
          phone: phone || admin.phone,
          address: address || admin.address,
        },
        { new: true }
      );
      res.status(200).send({
        success: true,
        message: "Profile Updated SUccessfully",
        updatedAdmin,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send({
        success: false,
        message: "Error While Update profile",
        error,
      });
    }
  };
  module.exports = updateProfileController;