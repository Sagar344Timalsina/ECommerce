const ModelOrder =require("../../models/ModelOrder");


const PostOrders = async (req, res) => {
try {
    const {cart}=req.body;
    let total=0;
    cart.map((i)=>{total+=i.price});
    const orderPost=new ModelOrder({
        products:cart,
        payment:total,
        buyer:req.user._id

    }).save()
    res.json({ok:true})
} catch (error) {
    console.log(error);
}


}
module.exports=PostOrders