import {Plan} from "./enums/Plan";

export class ProgressLog {
    id: number;
    userId: number;
    weight: number;
    bmi: number;
    date: Date;
    notes?: string;
    createdAt: Date;

    constructor(id: number, userId: number, weight: number, bmi: number, date: Date,createdAt: Date) {
        this.id = id;
        this.userId = userId;
        this.weight = weight;
        this.bmi = bmi;
        this.date = date;
        this.createdAt = createdAt;
    }
}