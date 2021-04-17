const express= require('express')
const router= express.Router();
const Promotions= require('../models/Promotions')



router.get("/", async(req,res,next)=>{
    allpromotions=await Promotions.find()
    res.status(200).json({message: allpromotions})
})


router.post("/", async(req,res,next)=>{
    const {name, description, image, label, price,featured} = req.body
    console.log(name)
    const promotions = new Promotions({
       name,
       description,
       image,
       label,
       price,
       featured
    })

    await promotions.save()
    res.status(200).json({message: "Promotions Saved"})
})



router.put("/", (req,res,next)=>{
    res.status(200).json({message: "Put operations is not supported"})
})



router.delete("/", async(req,res,next)=>{
    
    await Promotions.deleteMany()
    res.status(200).json({message: "delete promotions"})
})



router.get("/:promoId", async(req,res,next)=>{
    const id= req.params.promoId
    allpromotions=await Promotions.findById(id)
    res.status(200).json({message: allpromotions})
})



router.post("/:promoId", (req,res,next)=>{
    res.status(200).json({message: "Post operation is not supoorted in ${req.params:promoId}"})
})




router.put("/:promoId", async(req,res,next)=>{
    const id= req.params.promoId
    const {name, description, image, label, price,featured} = req.body
    updatePromotions = await Promotions.findByIdAndUpdate(id,{
        name,
        description,
        image,
        label,
        price,
        featured
    })
    res.status(200).json({message: updatePromotions})
})



router.delete("/:promoId", async(req,res,next)=>{
    const id= req.params.promoId
    console.log(id)
    const deletedItem = await Promotions.findByIdAndDelete(id)
    res.status(200).json({message: "deleting the dish"})
})



module.exports =router;