import { PrismaClient } from "@prisma/client";
import {WorkoutPlan} from "../models/WorkoutPlan";

const prisma = new PrismaClient();

export async function addWorkOut(w:WorkoutPlan){
    try {
        const newWorkoOut = await prisma.workoutPlan.create({
            data:{
                name: w.name,
                description: w.description,
                createdAt: w.createdAt,
                updatedAt: w.updatedAt,
            }
        })
        return newWorkoOut;
    }catch(err){
        console.log("Error adding workout", err);
    }
}

export async function getAllWorkoutPlans() {
    try{
        const workOutPlans = await prisma.workoutPlan.findMany();
        return workOutPlans;
    }catch(error){
        console.log("Error loading workout plan list",error);
    }
}