import {Plan} from "./enums/Plan";

export class WorkoutPlan {
    id: number;
    name: Plan
    description: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(id:number, name:Plan,description:string, createdAt:Date, updatedAt:Date) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
}