export interface NotificationResponse {

    id: number;

    type: string;

    title: string;

    message: string;

    referenceType: string;

    referenceId: number;

    isRead: boolean;

    createdAt: string;
}