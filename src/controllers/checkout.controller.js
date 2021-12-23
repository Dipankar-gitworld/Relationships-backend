const express = require ("express");

const Checkout = require ("../models/checkout.model");

const router = express.Router();

router.post("/", async (req,res)=>{

    try{

        const checkout = await Checkout.create( req.body );

        return res.status(201).send(checkout);

    }catch(e){

        return res.status(500).json({ status: "failled", message: e.message });

    }
    
});

router.get("/", async (req,res)=>{

    try{

        const checkout = await Checkout.find().populate({path:"books",populate:"section"}).lean().exec();

        

        return res.status(201).send(checkout);

    }catch(e){

        return res.status(500).json({ status: "failled", message: e.message });

    }
    
});

router.delete("/:id", async (req,res)=>{

    try{

        const checkout = await Checkout.findByIdAndDelete(req.params.id);

        return res.status(201).send(checkout);

    }catch(e){

        return res.status(500).json({ status: "failled", message: e.message });

    }
    
});

module.exports = router;