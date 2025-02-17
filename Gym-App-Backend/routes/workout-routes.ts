import express from "express";
import {addWorkOut, getAllWorkoutPlans} from "../database/data-store-workoutplans";
import {WorkoutPlan} from "../models/WorkoutPlan";

const router = express.Router();

router.post("/add",async (req,res) => {
    const workOut: WorkoutPlan = req.body;
    try{
        const newWorkOut = await addWorkOut(workOut);
        res.json(newWorkOut);
    }catch (err){
        console.log("Error creating workOut",err);
        res.status(400).send("Error creating workOut");
    }
})


router.get('/view', async (req, res) => {
    try{
        const allPlans = await getAllWorkoutPlans();
        res.json(allPlans);
    }catch (err){
        console.log("Error getting all workout plans",err);
        res.status(400).send("Error getAllWorkoutPlans");
    }
});

export default router;