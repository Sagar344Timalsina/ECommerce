const ModelOrder =require("../../models/ModelOrder");
// const adminModel = require('../../models/clientModule');


const getOrdersController = async (req, res) => {
    try {
        const orders = await ModelOrder
            .find({ });
            // .populate("products", "-image")
            // .populate("buyer", "name");
        res.json(orders);
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error WHile Geting Orders",
            error,
        });
    }
};
module.exports = getOrdersController;