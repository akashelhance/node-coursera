const express= require('express')
const router= express.Router();


router.get("/:dishId", (req,res,next)=>{
    res.status(200).json({message: "Getting all the data of the dishId"})
})



router.post("/:dishId", (req,res,next)=>{
    res.status(200).json({message: "Create new Dish"})
})




router.put("/:dishId", (req,res,next)=>{
    res.status(200).json({message: "updating the data"})
})



router.delete("/:dishId", (req,res,next)=>{
    res.status(200).json({message: "deleting the dish"})
})


module.exports =router;