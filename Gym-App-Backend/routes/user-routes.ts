import express from "express";
import {User} from "../models/User";
import {addUser} from "../database/data-store-user";

const router = express.Router();

router.post("/login", async (req,res) => {
    const user:User = req.body;
    try{
        const newUser = await addUser(user);
        res.json(newUser);
    }catch (err){
        console.log("Error creating user",err);
        res.status(400).send("Error creating user");
    }
})

export default router;