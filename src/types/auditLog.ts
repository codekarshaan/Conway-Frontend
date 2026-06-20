export interface AuditLogResponse {

    id: number;

    adminName: string;

    action: string;

    entityName: string;

    entityId: number;

    description: string;

    createdAt: string;
}