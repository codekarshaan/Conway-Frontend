export interface DashboardResponse {

    totalEnquiries: number;

    newEnquiries: number;

    contactedEnquiries: number;

    inProgressEnquiries: number;

    closedEnquiries: number;
}

export interface RecentEnquiryResponse {

    id: number;

    customerName: string;

    phoneNumber: string;

    status: string;

    createdAt: string;
}