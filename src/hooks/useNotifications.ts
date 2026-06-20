import {
    useQuery,
    useMutation,
    useQueryClient
} from "@tanstack/react-query";

import {
    getNotifications,
    getUnreadCount,
    markAsRead,
    markAllAsRead
} from "../api/notificationApi";

export const useNotifications =
    () => {

        const notificationsQuery =
            useQuery({

                queryKey: [
                    "notifications"
                ],

                queryFn:
                    getNotifications

            });

        const unreadCountQuery =
            useQuery({

                queryKey: [
                    "notification-count"
                ],

                queryFn:
                    getUnreadCount

            });

        return {

            notificationsQuery,

            unreadCountQuery

        };
    };

export const useMarkNotificationRead =
    () => {

        const queryClient =
            useQueryClient();

        return useMutation({

            mutationFn:
                markAsRead,

            onSuccess: () => {

                queryClient.invalidateQueries({
                    queryKey: [
                        "notifications"
                    ]
                });

                queryClient.invalidateQueries({
                    queryKey: [
                        "notification-count"
                    ]
                });

            }

        });
    };

export const useMarkAllNotificationsRead =
    () => {

        const queryClient =
            useQueryClient();

        return useMutation({

            mutationFn:
                markAllAsRead,

            onSuccess: () => {

                queryClient.invalidateQueries({
                    queryKey: [
                        "notifications"
                    ]
                });

                queryClient.invalidateQueries({
                    queryKey: [
                        "notification-count"
                    ]
                });

            }

        });
    };