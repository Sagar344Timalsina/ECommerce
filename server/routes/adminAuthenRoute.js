const express = require("express");
const router = express.Router();
//const admin = require('../models/admin')
const registerController = require("../controllers/AdminAuthenticationController/adminRegister");
const loginController = require("../controllers/AdminAuthenticationController/loginAdmin");
const testController = require("../controllers/AdminAuthenticationController/testController");
const { isAdmin, requireSignIn } = require("../middleware/authMiddleware");
const forgotPasswordController = require('../controllers/AdminAuthenticationController/forgotpasswordController')
const updateProfileController = require('../controllers/AdminAuthenticationController/updateProfile');
const { isUser, requireUserSignIn } = require("../middlewares/authmiddleware");
const GetOrdersController = require("../controllers/OrderController/GetOrdersController");
const PostOrder = require("../controllers/OrderController/PostOrder");


//REGISTER ADMIN
router.post("/register", registerController);

// ADMIN LOGIN || POST
router.post("/login", loginController);

//protected Admin route auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ ok: true });
});

//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);


//test routes
router.get("/test", requireSignIn, isAdmin, testController);

//protected route auth
router.get("/user-auth", requireUserSignIn, isUser, (req, res) => {
  res.status(200).send({ ok: true });
})

//update profile
router.put("/profile", requireSignIn, updateProfileController);

// orders
router.get('/orders', requireSignIn, GetOrdersController);

//OrderPost
router.post("/orderPost", requireSignIn, PostOrder)

module.exports = router;
