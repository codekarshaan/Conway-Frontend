import axiosClient from "./axiosClient";
import type{
    LoginRequest,
    LoginResponse
} from "../types/auth";

export const login = async (
    request: LoginRequest
): Promise<LoginResponse> => {

    const response = await axiosClient.post(
        "/api/auth/login",
        request
    );

    return response.data;
};