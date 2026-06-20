export interface EnquiryNoteResponse {

    id: number;

    enquiryId: number;

    adminId: number;

    adminName: string;

    note: string;

    createdAt: string;
}

export interface CreateEnquiryNoteRequest {

    note: string;
}