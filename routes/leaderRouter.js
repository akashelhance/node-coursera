const express= require('express')
const router= express.Router();
const Leaders= require('../models/Leaders')



router.get("/", async(req,res,next)=>{
    const allLeaders = await Leaders.find()
    res.status(200).json({message: allLeaders})
})


router.post("/", async(req,res,next)=>{
    const {name, image,  designation, abbr,   description, featured} = req.body
    const newLeader =  new Leaders({
        name,
        image,
        designation,
        abbr,
        description,
        featured
    })
    await newLeader.save()
    res.status(200).json({message: newLeader})
})



router.put("/", async(req,res,next)=>{
    res.status(200).json({message: "Not Allowed"})
})



router.delete("/", async(req,res,next)=>{
    const DeleteAll = await Leaders.deleteMany()
    res.status(200).json({message: "delete leaders"})
})



router.get("/:leaderID", async(req,res,next)=>{
    const id= req.params.leaderID
    const getLeader = await Leaders.findById(id)
    res.status(200).json({message: getLeader})
})



router.post("/:leaderID", async(req,res,next)=>{
    res.status(200).json({message: "Not Alllowed"})
})




router.put("/:leaderID", async(req,res,next)=>{
    const id= req.params.leaderID
    const {name, image,  designation, abbr,   description, featured} = req.body
    const updateLeader=  await Leaders.findByIdAndUpdate(id,{
        name,
        image,
        designation,
        abbr,
        description,
        featured
    })
    res.status(200).json({message: updateLeader})
})



router.delete("/:leaderID", async(req,res,next)=>{
    const id= req.params.leaderID
    const deleteLeaders=  await Leaders.findByIdAndDelete(id)
    res.status(200).json({message: "deleting the leaders"})
})



module.exports =router;