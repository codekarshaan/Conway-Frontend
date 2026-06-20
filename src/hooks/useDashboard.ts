import { useQuery } from "@tanstack/react-query";

import {
    getDashboard,
    getRecentEnquiries
} from "../api/dashboardApi";

export const useDashboard = () => {

    const dashboardQuery =
        useQuery({
            queryKey: ["dashboard"],
            queryFn: getDashboard
        });

    const recentEnquiriesQuery =
        useQuery({
            queryKey: ["recent-enquiries"],
            queryFn: getRecentEnquiries
        });

    return {
        dashboardQuery,
        recentEnquiriesQuery
    };
};