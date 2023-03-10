const mongoose = require("mongoose");

const CartSchema = new mongoose.Schema(
  {
    user_Id: {
      type: String,
      required: true
    },
    products: {
      product_Id: {
        type: String,
      },
      product_Name: {
        type: String
      },
      qantity: {
        type: Number,
        default: 1,
      },
    },

    //order_Id: { type: Number, required: true}
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cart", CartSchema);
