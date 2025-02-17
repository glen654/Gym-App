import {$Enums, PrismaClient} from "@prisma/client";
import {User} from "../models/User";

const prisma = new PrismaClient();

export async function addUser(u:User){
    try{
        const newUser = await prisma.user.create({
            data:{
                name: u.name,
                email: u.email,
                password: u.password,
                role: u.role as $Enums.Role,
                createdAt: u.createdAt,
                updatedAt: u.updatedAt
            }
        })
        return newUser;
    }catch(err){
        console.log("Error adding user", err);
    }
}

