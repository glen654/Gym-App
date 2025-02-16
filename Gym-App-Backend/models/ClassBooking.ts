import {BookingStatus} from "./enums/BookingStatus";

export class ClassBooking{
    id: number;
    userId: number;
    classDate: Date;
    status: BookingStatus
    createdAt: Date;

    constructor(id:number, userId:number, classDate: Date, status: BookingStatus,createdAt: Date) {
        this.id = id;
        this.userId = userId;
        this.classDate = classDate;
        this.status = status;
        this.createdAt = createdAt;
    }
}