import express from "express";
import {ProgressLog} from "../models/ProgressLog";
import {addProgress, getProgress} from "../database/data-store-progress";

const router = express.Router();

router.post("/add",async (req,res)=>{
    const progress:ProgressLog = req.body;
    try{
        const newProgress = await addProgress(progress);
        res.json(newProgress);
    }catch (err){
        console.log("Error creating progress",err);
        res.status(400).send("Error creating progress");
    }
});

router.get("/progress/:userId",async (req,res)=>{
    const userId:number = parseInt(req.params.userId);
    try{
        const progress = await getProgress(userId);
        res.json(progress);
    }catch (err){
        console.log("Error getting progress",err);
        res.status(400).send("Error getting progress");
    }
});

export default router;