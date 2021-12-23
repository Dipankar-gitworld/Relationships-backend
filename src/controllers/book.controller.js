const express = require ("express");

const Book = require ("../models/book.model");

const Checkout = require ("../models/checkout.model");

const router = express.Router();

router.post("/", async (req,res)=>{

    try{

        const book = await Book.create( req.body );

        return res.status(201).send(book);

    }catch(e){

        return res.status(500).json({ status: "failled", message: e.message });

    }
    
});

router.get("/", async (req,res)=>{

    try{

        const book = await Book.find().populate("author").populate("section").lean().exec();

        return res.status(201).send(book);

    }catch(e){

        return res.status(500).json({ status: "failled", message: e.message });

    }
    
});

router.get("/author/:id", async (req,res)=>{

    try{

        const book = await Book.find({author:req.params.id}).populate("author").lean().exec();

        return res.status(201).send(book);

    }catch(e){

        return res.status(500).json({ status: "failled", message: e.message });

    }
    
});

router.get("/author/:aid/section/:sid", async (req,res)=>{

    try{

        const book = await Book.find({section:req.params.sid,author:req.params.aid}).populate("section").populate("author").lean().exec();

        return res.status(201).send(book);

    }catch(e){

        return res.status(500).json({ status: "failled", message: e.message });

    }
    
});

router.get("/section/:sid", async (req,res)=>{

    try{

        const book = await Book.find({section:req.params.sid}).populate("section").lean().exec();

        return res.status(201).send(book);

    }catch(e){

        return res.status(500).json({ status: "failled", message: e.message });

    }
    
});



router.get("/section/notcheckedout/:id", async (req,res)=>{

    try{

        let book = await Book.find({section:req.params.id}).lean().exec();

        let checkout = await Checkout.find().lean().exec();
        



        let notCheckedout = book.filter((el)=>{
            let fbooks = checkout.filter((e)=>{
               
                // if( String(el._id) === String(e.books)) 
                if(el._id.equals(e.books))  //both works
                return e.books;
                
            })

            if (fbooks.length === 0) 
            return el;
        })

       

        return res.status(201).send(notCheckedout);

    }catch(e){

        return res.status(500).json({ status: "failled", message: e.message });

    }
    
});

router.patch("/:id", async (req,res)=>{

    try{

        const book = await Book.findByIdAndUpdate( req.params.id, req.body );

        return res.status(201).send(book);

    }catch(e){

        return res.status(500).json({ status: "failled", message: e.message });

    }
    
});

router.delete("/:id", async (req,res)=>{

    try{

        const book = await Book.findByIdAndDelete( req.params.id );

        return res.status(201).send(book);

    }catch(e){

        return res.status(500).json({ status: "failled", message: e.message });

    }
    
});

module.exports = router;