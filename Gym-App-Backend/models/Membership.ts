import {Plan} from "./enums/Plan";
import {PaymentStatus} from "./enums/PaymentStatus";

export class Membership {
    id: number;
    userId: number;
    plan: Plan
    status: PaymentStatus
    startDate: Date;
    endDate: Date;
    isDeleted: boolean;
    createdAt: Date;
    updatedAt: Date;

    constructor(id: number, userId: number, plan: Plan, status: PaymentStatus, startDate: Date, endDate: Date, isDeleted: boolean,createdAt: Date, updatedAt: Date) {
        this.id = id;
        this.userId = userId;
        this.plan = plan;
        this.status = status;
        this.startDate = startDate;
        this.endDate = endDate;
        this.isDeleted = isDeleted;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

}