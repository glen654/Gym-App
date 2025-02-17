import { PrismaClient } from "@prisma/client";
import {ProgressLog} from "../models/ProgressLog";

const prisma = new PrismaClient();

export async function addProgress(p:ProgressLog){
    try {
        const newProgress = await prisma.progressLog.create({
            data:{
                userId: p.userId,
                weight: p.weight,
                bmi: p.bmi,
                date: p.date,
                notes: p.notes,
                createdAt: p.createdAt
            }
        })
        return newProgress;
    }catch(err){
        console.log("Error adding new progress", err);
    }
}

export async function getProgress(userId:number){
    try{
        const progress = await prisma.progressLog.findUnique({
            where:{userId: userId},
            include:{user:true}
        })
        return progress;
    }catch(err){
        console.log("Error getting progress",err);
    }
}