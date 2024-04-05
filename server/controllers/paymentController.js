import { instance } from "../server.js"
import crypto from "crypto";
import {dbConnection} from "../config/db.js";

export const checkout = async(req,res)=>{

    const options = {
        amount:Number(req.body.amount * 200),
        currency:"INR",
        
    };

    const order  = await instance.orders.create(options);


    // console.log(order);
    res.status(200).json({
        success: true,
        order,
    })
};



export const paymentVerification = async(req,res)=>{
    // console.log(req.body);
    const {razorpay_order_id, razorpay_payment_id, razorpay_signature} = req.body;
    const body  =razorpay_order_id + "|" + razorpay_payment_id; 

    const expectedSignature = crypto
    .createHmac("sha256",process.env.RAZORPAY_API_SECRET)
    .update(body.toString())
    .digest("hex");

    // console.log("sign reciec" ,razorpay_signature);
    // console.log("expec sign", expectedSignature);

    const isAuthentic = expectedSignature === razorpay_signature;
    if(isAuthentic){

      const [rows, fields]= await  dbConnection.execute(
        `insert into paymentgateway(razorpay_order_id, razorpay_payment_id, razorpay_signature) values (?,?,?)`,
        [razorpay_order_id, razorpay_payment_id, razorpay_signature]
        )

    res.redirect(`http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`)
    res.status(200).json({
        success: true,
    });

}else{
    return res.status(400).json({
        success: false,
    });

}
};


