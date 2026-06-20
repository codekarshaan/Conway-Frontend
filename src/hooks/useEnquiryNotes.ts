import {
    useQuery,
    useMutation,
    useQueryClient
} from "@tanstack/react-query";

import {
    getEnquiryNotes,
    createEnquiryNote
} from "../api/enquiryNoteApi";

export const useEnquiryNotes =
    (
        enquiryId: number
    ) => {

        return useQuery({

            queryKey: [
                "enquiry-notes",
                enquiryId
            ],

            queryFn: () =>
                getEnquiryNotes(
                    enquiryId
                )

        });
    };

export const useCreateEnquiryNote =
    (
        enquiryId: number
    ) => {

        const queryClient =
            useQueryClient();

        return useMutation({

            mutationFn: (
                note: string
            ) =>
                createEnquiryNote(
                    enquiryId,
                    {
                        note
                    }
                ),

            onSuccess: () => {

                queryClient.invalidateQueries({

                    queryKey: [
                        "enquiry-notes",
                        enquiryId
                    ]

                });

            }

        });
    };