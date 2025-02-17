import express from "express";
import {getAllWorkoutPlans} from "../database/data-store-workoutplans";

const router = express.Router();

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