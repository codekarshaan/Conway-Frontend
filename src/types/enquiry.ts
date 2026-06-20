export interface EnquiryResponse {

    id: number;

    customerName: string;

    phoneNumber: string;

    email: string;

    city: string;

    truckType: string;

    cargoType: string;

    message: string;

    status: string;

    assignedAdminId: number | null;

    createdAt: string;
}

export interface PageResponse<T> {

    content: T[];

    totalElements: number;

    totalPages: number;

    size: number;

    number: number;

    first: boolean;

    last: boolean;

    empty: boolean;
}