import axiosClient from "./axiosClient";

import type {
    EnquiryNoteResponse,
    CreateEnquiryNoteRequest
} from "../types/enquiryNote";

export const getEnquiryNotes =
    async (
        enquiryId: number
    ): Promise<
        EnquiryNoteResponse[]
    > => {

        const response =
            await axiosClient.get(
                `/api/enquiries/${enquiryId}/notes`
            );

        return response.data;
    };

export const createEnquiryNote =
    async (
        enquiryId: number,
        request: CreateEnquiryNoteRequest
    ) => {

        const response =
            await axiosClient.post(
                `/api/enquiries/${enquiryId}/notes`,
                request
            );

        return response.data;
    };