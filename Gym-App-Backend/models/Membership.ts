import {Plan} from "./enums/Plan";
import {PaymentStatus} from "./enums/PaymentStatus";

export class Membership {
    id: number;
    userId: number;
    plan: Plan
    status: PaymentStatus
    startDate: Date;
    endDate: Date;
    createdAt: Date;
    updatedAt: Date;

    constructor(id: number, userId: number, plan: Plan, status: PaymentStatus, startDate: Date, endDate: Date, createdAt: Date, updatedAt: Date) {
        this.id = id;
        this.userId = userId;
        this.plan = plan;
        this.status = status;
        this.startDate = startDate;
        this.endDate = endDate;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

}