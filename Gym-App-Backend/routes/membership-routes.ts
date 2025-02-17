import express from "express";
import {Membership} from "../models/Membership";
import {
    createMembership,
    deleteMembership,
    getAllMemberships,
    getMembership,
    updateMembership
} from "../database/data-store-membership";

const router = express.Router();

router.post("/add",async (req,res)=>{
    const membership:Membership = req.body;
    try {
        const newMembership = await createMembership(membership);
        res.json(newMembership);
    }catch(err){
        console.log("Error creating membership",err);
        res.status(400).send("Error creating membership");
    }
});

router.put("/update/:userId",async (req,res)=>{
    const userId: number = parseInt(req.params.userId);
    const membership:Membership = req.body;
    try{
        const updatedMembership = await updateMembership(membership,userId);
        res.json(updatedMembership);
    }catch (err){
        console.log("Error updating membership",err);
        res.status(400).send("Error updating membership");
    }
});

router.delete("/delete/:userId",async (req,res)=>{
    const userId: number = parseInt(req.params.userId);
    try{
        const deletedMembership = await deleteMembership(userId);
        res.json(deletedMembership);
    }catch (err){
        console.log("Error deleting membership", err);
        res.status(400).send("Error deleting membership");
    }
});

router.get("/membership/:userId",async (req,res)=>{
    const userId: number = parseInt(req.params.userId);
    try{
        const membership = await getMembership(userId);
        res.json(membership);
    }catch (err){
        console.log("Error getting membership",err);
        res.status(400).send("Error getting membership");
    }
});

router.get("/view",async (req,res) => {
    try{
        const allMemberships = await getAllMemberships();
        res.json(allMemberships);
    }catch (err){
        console.log("Error getting allMemberships",err);
        res.status(400).send("Error getting allMemberships");
    }
});

export default router;