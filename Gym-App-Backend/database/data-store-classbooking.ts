import {$Enums, PrismaClient} from "@prisma/client";
import {ClassBooking} from "../models/ClassBooking";

const prisma = new PrismaClient();

export async function createBooking(c:ClassBooking){
    try {
        const newBooking = await prisma.classBooking.create({
            data:{
                userId: c.userId,
                classDate: c.classDate,
                status: c.status as $Enums.BookingStatus,
                createdAt: c.createdAt
            }
        })
        return newBooking;
    }catch(err){
        console.log("Error creating new booking", err);
    }
}

export async function getALLBooking(){
    try {
        const allBookings = prisma.classBooking.findMany({include: {user: true}});
        return allBookings;
    }catch (err){
        console.log("Error getting all bookings", err);
    }
}