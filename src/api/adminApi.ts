import axiosClient from "./axiosClient";

import type {
    AdminResponse,
    CreateAdminRequest,
    UpdateAdminRequest
} from "../types/admin";

export const getAdmins =
    async (): Promise<
        AdminResponse[]
    > => {

        const response =
            await axiosClient.get(
                "/api/admins"
            );

        return response.data;
    };

export const toggleAdminStatus =
    async (
        adminId: number
    ) => {

        await axiosClient.patch(
            `/api/admins/${adminId}/toggle-status`
        );
    };


export const createAdmin =
    async (
        request: CreateAdminRequest
    ): Promise<AdminResponse> => {

        const response =
            await axiosClient.post(
                "/api/admins",
                request
            );

        return response.data;
    };    

export const updateAdmin =
    async (
        adminId: number,
        request: UpdateAdminRequest
    ): Promise<AdminResponse> => {

        const response =
            await axiosClient.put(
                `/api/admins/${adminId}`,
                request
            );

        return response.data;
    };    

export const getAdminById =
    async (
        adminId: number
    ): Promise<AdminResponse> => {

        const response =
            await axiosClient.get(
                `/api/admins/${adminId}`
            );

        return response.data;
    };