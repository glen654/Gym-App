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
                isDeleted: false,
                createdAt: m.createdAt,
                updatedAt: m.updatedAt,
            }
        })
        return newMembership;
    }catch(err){
        console.log("Error creating new membership", err);
    }
}

export async function updateMembership(m:Membership,userId:number){
    try{
        const updatedMembership = await prisma.membership.update({
            where: {userId: userId, isDeleted: false},
            data: {
                userId: m.userId,
                plan: m.plan,
                status: m.status,
                startDate: m.startDate,
                endDate: m.endDate,
                createdAt: m.createdAt,
                updatedAt: m.updatedAt,
            }
        })
        return updatedMembership;
    }catch (err){
        console.log("Error updating membership", err);
    }
}

export async function deleteMembership(userId:number){
    try{
        const deleteMembership = await prisma.membership.update({
            where:{userId:userId},
            data: {isDeleted:true}
        })
        return deleteMembership;
    }catch (err){
        console.log("Error deleting membership",err);
    }
}

export async function getMembership(userId:number){
    try{
        const membership = await prisma.membership.findUnique({
            where:{userId: userId},
            include:{user: true}
        })
        return membership;
    }catch (err){
        console.log("Error getting membership", err);
    }
}

export async function getAllMemberships(){
    try{
        const memberships = await prisma.membership.findMany({include: {user: true}});
        return memberships;
    }catch (err){
        console.log("Error getting all membership", err);
    }
}
