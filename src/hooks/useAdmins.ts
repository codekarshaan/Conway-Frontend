import {
    useQuery,
    useMutation,
    useQueryClient
} from "@tanstack/react-query";

import {
    getAdmins,
    toggleAdminStatus,
    createAdmin,
    updateAdmin,
    getAdminById
} from "../api/adminApi";

export const useAdmins =
    () => {

        return useQuery({

            queryKey: [
                "admins"
            ],

            queryFn:
                getAdmins

        });
    };

export const useToggleAdminStatus =
    () => {

        const queryClient =
            useQueryClient();

        return useMutation({

            mutationFn:
                toggleAdminStatus,

            onSuccess: () => {

                queryClient.invalidateQueries({

                    queryKey: [
                        "admins"
                    ]

                });

            }

        });
    };

export const useCreateAdmin =
    () => {

        const queryClient =
            useQueryClient();

        return useMutation({

            mutationFn:
                createAdmin,

            onSuccess: () => {

                queryClient.invalidateQueries({

                    queryKey: [
                        "admins"
                    ]

                });

            }

        });
    };    

export const useUpdateAdmin =
    () => {

        const queryClient =
            useQueryClient();

        return useMutation({

            mutationFn:
                ({
                    adminId,
                    request
                }: {
                    adminId: number;
                    request: {
                        fullName: string;
                        phoneNumber: string;
                        roleName: string;
                    };
                }) =>

                    updateAdmin(
                        adminId,
                        request
                    ),

            onSuccess: () => {

                queryClient.invalidateQueries({

                    queryKey: [
                        "admins"
                    ]

                });

            }

        });
    };   
    
export const useAdmin =
    (
        adminId: number
    ) => {

        return useQuery({

            queryKey: [
                "admin",
                adminId
            ],

            queryFn: () =>
                getAdminById(
                    adminId
                )

        });
    };    