const orderModel = require('../../models/orderModel');
const productModel = require('../../models/Product');
const userModel = require('../../models/clientModule');//customer_Model
// const paymentModel = require('../../models/paymentModel');

const order = async (req, res, next) => {
    try {
        const user_Id = req.params.user_id;
        console.log("UserID :", user_Id)
        // const product_Id = objData.products.product_Id;
        // const product_Name = objData.products.product_Name;
        // const qnty = objData.products.qantity;
        // const {amount,phone,address} = req.body;

        const productDetails = await productModel
            .findOne({ slug: req.params.slug })
            .select("-image");
        const user = await userModel //customer details 
            .findById({ _id: user_Id });
        const products = JSON.parse(JSON.stringify(productDetails));
        const userDetails = JSON.parse(JSON.stringify(user));
        const product_Id = products._id;
        const qnty = req.body.quantity;
        const amount = req.body.amount;

        console.log("Product_Id:", product_Id);
        console.log("Product_Title:", products.title);
        console.log("Username:", userDetails.username);
        console.log("Delivary:", userDetails.address);
        console.log("Phone:", userDetails.phone);
        console.log("Quantity:", qnty);
        console.log("Total Amount:", amount);
        const orderSuccess = await new orderModel({
            user_Id: user_Id,
            products: {
                product_Id: product_Id,
                product_Title: products.title,
                quantity: qnty,
            },
            address: userDetails.address,
            phone: userDetails.phone,
            amount: amount,
        }).save();
        if (orderSuccess) {
            return res.status(201).send({
                success: true,
                message: `Your Order has been success!!, Thankyou for Shopping, 
            Delivary To:${userDetails.username},
            Address:${userDetails.address},
            Phone:${userDetails.phone}`
            });
        } else {
            return res.status(500).send({
                success: false,
                message: "Somthing is issue in UserOrder!!"
            });
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: "Error While User OrderProduct",
            error
        });
        console.log("Error in UserOrder", error);
    }
}

module.exports = order;

/*
{
  "products":{
        "product_Id":"25",
        "product_Name":"Gaming Keyboard",
        "quantity":1
    },
    "amount":"2000",
    "phone":"9874087563",
    "address":"Balaju,KTM Area,Bagamti Province"
}
*/ 