export interface AdminResponse {

    id: number;

    fullName: string;

    email: string;

    phoneNumber: string;

    role: string;

    isActive: boolean;
}
export interface CreateAdminRequest {

    fullName: string;

    email: string;

    phoneNumber: string;

    password: string;

    roleName: string;
}

export interface UpdateAdminRequest {

    fullName: string;

    phoneNumber: string;

    roleName: string;
}