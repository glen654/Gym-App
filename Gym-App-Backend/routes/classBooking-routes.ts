import express from "express";
import {ClassBooking} from "../models/ClassBooking";
import {createBooking, getALLBooking} from "../database/data-store-classbooking";

const router = express.Router();

router.post("/add",async (req,res)=>{
    const booking:ClassBooking = req.body;
    try{
        const newBooking = await createBooking(booking);
        res.json(newBooking);
    }catch (err){
        console.log("Error creating booking",err);
        res.status(400).send("Error creating booking");
    }
});

router.get("/view",async (req,res)=>{
    try{
        const allBookings = await getALLBooking();
        res.json(allBookings);
    }catch (err){
        console.log("Error getting allBookings",err);
        res.status(400).send("Error getting allBookings");
    }
});

export default router;