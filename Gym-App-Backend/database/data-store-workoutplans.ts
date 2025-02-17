import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getAllWorkoutPlans() {
    try{
        const workOutPlans = await prisma.workoutPlan.findMany();
        return workOutPlans;
    }catch(error){
        console.log("Error loading workout plan list",error);
    }
}