import axiosClient from "./axiosClient";

import type {
    LoginHistoryResponse
} from "../types/loginHistory";

export const getLoginHistory =
    async (): Promise<
        LoginHistoryResponse[]
    > => {

        const response =
            await axiosClient.get(
                "/api/login-history"
            );

        return response.data;
    };