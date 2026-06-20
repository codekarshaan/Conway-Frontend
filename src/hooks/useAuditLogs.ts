import { useQuery }
from "@tanstack/react-query";

import {
    getAuditLogs
} from "../api/auditLogApi";

export const useAuditLogs =
    () => {

        return useQuery({

            queryKey: [
                "audit-logs"
            ],

            queryFn:
                getAuditLogs

        });
    };