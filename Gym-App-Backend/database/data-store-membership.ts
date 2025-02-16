import { PrismaClient } from "@prisma/client";
import {Membership} from "../models/Membership";

const prisma = new PrismaClient();

export async function createMembership(m:Membership){
    try {
        const newMembership = await prisma.membership.create({
            data:{
                userId: m.userId,
                plan: m.plan,
                status: m.status,
                startDate: m.startDate,
                endDate: m.endDate,
                createdAt: m.createdAt,
                updatedAt: m.updatedAt,
            }
        })
        return newMembership;
    }catch(err){
        console.log("Error creating new membership", err);
    }
}

export async function updateMembership(m:Membership){}