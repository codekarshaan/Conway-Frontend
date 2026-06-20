import axiosClient from "./axiosClient";

import type {
    EnquiryResponse,
    PageResponse
} from "../types/enquiry";

export const getEnquiries =
    async (
        page = 0,
        size = 10,
        search = "",
        status = ""
    ): Promise<
        PageResponse<EnquiryResponse>
    > => {

        const response =
            await axiosClient.get(
                "/api/enquiries",
                {
                    params: {
                        page,
                        size,
                        search,
                        status
                    }
                }
            );

        return response.data;
    };

export const updateEnquiryStatus =
    async (
        enquiryId: number,
        status: string
    ) => {

        const response =
            await axiosClient.patch(
                `/api/enquiries/${enquiryId}/status`,
                {
                    status
                }
            );

        return response.data;
    };    

export const getEnquiryById =
    async (
        enquiryId: number
    ): Promise<EnquiryResponse> => {

        const response =
            await axiosClient.get(
                `/api/enquiries/${enquiryId}`
            );

        return response.data;
    };    