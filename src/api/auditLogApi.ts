import axiosClient from "./axiosClient";

import type {
    AuditLogResponse
} from "../types/auditLog";

export const getAuditLogs =
    async (): Promise<
        AuditLogResponse[]
    > => {

        const response =
            await axiosClient.get(
                "/api/audit-logs"
            );

        return response.data;
    };