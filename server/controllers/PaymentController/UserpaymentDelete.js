const paymentModel = require('../../models/paymentModel');


const paymentDelete = async(req,res,next)=>{
    try {
        const paymentId =  req.params.id;
        const paymentDelete =await paymentModel.deleteOne({_id:paymentId});
        if(paymentDelete){
            return res.status(201).send({
                success:true,
                msg:"Your Payment has been Successfully Deleted!!"
             });
        }else{
            return res.status(500).send({
                success:false,
                msg:"Somthing is issue in Payment!!"
            });
        }
    } catch (error) {
        console.log("Error While UserPayment !!!");
        res.status(500).send({
            msg:"Error While User Payment",
            success : false
        })
    }
}

module.exports = paymentDelete;