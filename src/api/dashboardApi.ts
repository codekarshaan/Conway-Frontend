import axiosClient from "./axiosClient";

import type {
    DashboardResponse,
    RecentEnquiryResponse
} from "../types/dashboard";

export const getDashboard =
    async (): Promise<DashboardResponse> => {

        const response =
            await axiosClient.get(
                "/api/dashboard"
            );

        return response.data;
    };

export const getRecentEnquiries =
    async (): Promise<
        RecentEnquiryResponse[]
    > => {

        const response =
            await axiosClient.get(
                "/api/dashboard/recent-enquiries"
            );

        return response.data;
    };