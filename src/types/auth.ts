export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    token: string;
    type: string;
    email: string;
    fullName: string;
    role: string;
}