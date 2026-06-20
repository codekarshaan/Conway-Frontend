import {
    useQuery,
    useMutation,
    useQueryClient
} from "@tanstack/react-query";

import {
    getEnquiries,
    updateEnquiryStatus
} from "../api/enquiryApi";

export const useEnquiries = (
    page: number,
    size: number,
    search: string,
    status: string
) => {

    return useQuery({

        queryKey: [
            "enquiries",
            page,
            size,
            search,
            status
        ],

        queryFn: () =>
            getEnquiries(
                page,
                size,
                search,
                status
            )

    });
};

export const useUpdateEnquiryStatus =
    () => {

        const queryClient =
            useQueryClient();

        return useMutation({

            mutationFn: ({
                enquiryId,
                status
            }: {
                enquiryId: number;
                status: string;
            }) =>
                updateEnquiryStatus(
                    enquiryId,
                    status
                ),

            onSuccess: () => {

                queryClient.invalidateQueries({
                    queryKey: [
                        "enquiries"
                    ]
                });

                queryClient.invalidateQueries({
                    queryKey: [
                        "dashboard"
                    ]
                });

            }

        });
    };