//for user or customer side only
const express = require('express');
const router = express.Router();
const signupControl = require('../controllers/ClientAuthenticationController/userSignup');
const loginControl = require('../controllers/ClientAuthenticationController/userLogin');
//const authmw = require('../middlewares/authmiddleware');
const testControlller = require('../controllers/test');
const cartControl = require('../controllers/CartController/cartControl');
const updateControl = require('../controllers/ClientAuthenticationController/userUpdate');
const forgetPasswordControl = require('../controllers/ClientAuthenticationController/forgetPassword');
const orderByUser = require('../controllers/OrderController/Userorder');
const orderCancel = require('../controllers/OrderController/orderCancel');
const paymentByUser = require('../controllers/PaymentController/Userpayment');
//const paymentDelete = require("../controllers/PaymentController/UserpaymentDelete");




router.post('/signup', signupControl);
router.post('/login', loginControl);
router.post('/update/:id', updateControl);
router.post('/forgetPassword/:id', forgetPasswordControl);
// router.get('/test',authmw.requireSignIn,authmw.isUser,testControlller);
//->token check,user check

router.post('/cart/:id/:slug', cartControl);//user_id
router.post('/order/:user_id/:slug', orderByUser);
router.post('/orderCancel/:order_id', orderCancel);
router.post('/payment/:user_id/:order_id', paymentByUser);
//router.post('/paymentDelete',paymentDelete);
module.exports = router;


// (()=>{
//     module.exports={
//         hasher:require('./hasher'),
//         cacheHelper: require('./cacheHelper'),
//     }
// })();