import { useQuery }
from "@tanstack/react-query";

import {
    getLoginHistory
} from "../api/loginHistoryApi";

export const useLoginHistory =
    () => {

        return useQuery({

            queryKey: [
                "login-history"
            ],

            queryFn:
                getLoginHistory

        });
    };