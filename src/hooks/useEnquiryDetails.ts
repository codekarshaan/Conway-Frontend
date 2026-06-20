import { useQuery } from "@tanstack/react-query";

import { getEnquiryById }
from "../api/enquiryApi";

export const useEnquiryDetails =
    (
        enquiryId: number
    ) => {

        return useQuery({

            queryKey: [
                "enquiry-details",
                enquiryId
            ],

            queryFn: () =>
                getEnquiryById(
                    enquiryId
                ),

            enabled:
                !!enquiryId

        });
    };