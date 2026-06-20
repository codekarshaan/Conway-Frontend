import axiosClient from "./axiosClient";

import type {
    NotificationResponse
} from "../types/notification";

export const getNotifications =
    async (): Promise<
        NotificationResponse[]
    > => {

        const response =
            await axiosClient.get(
                "/api/notifications"
            );

        return response.data;
    };

export const getUnreadCount =
    async (): Promise<number> => {

        const response =
            await axiosClient.get(
                "/api/notifications/unread-count"
            );

        return response.data;
    };

export const markAsRead =
    async (
        notificationId: number
    ) => {

        await axiosClient.patch(
            `/api/notifications/${notificationId}/read`
        );
    };

export const markAllAsRead =
    async () => {

        await axiosClient.patch(
            "/api/notifications/read-all"
        );
    };