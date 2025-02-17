import {Role} from "./enums/Role";

export class User {
    id: number;
    name: string;
    email: string;
    password: string;
    role: Role;
    createdAt: Date;
    updatedAt: Date;

    constructor(id:number, name:string, email:string, password:string,role:Role,createdAt:Date, updatedAt:Date) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.role = role;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}