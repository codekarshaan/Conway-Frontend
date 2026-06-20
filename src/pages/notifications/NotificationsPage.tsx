import {
    Box,
    Typography,
    Paper,
    Card,
    CardContent,
    Button,
    Chip,
    CircularProgress,
    Stack
} from "@mui/material";

import NotificationsIcon from "@mui/icons-material/Notifications";
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";

import {
    useNotifications,
    useMarkNotificationRead,
    useMarkAllNotificationsRead
} from "../../hooks/useNotifications";

import {
    showSuccess,
    showError
} from "../../utils/toast";

function NotificationsPage() {

    const {
        notificationsQuery,
        unreadCountQuery
    } = useNotifications();

    const markReadMutation =
        useMarkNotificationRead();

    const markAllReadMutation =
        useMarkAllNotificationsRead();

    if (
        notificationsQuery.isLoading ||
        unreadCountQuery.isLoading
    ) {

        return (

            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    mt: 5
                }}
            >

                <CircularProgress />

            </Box>

        );
    }

    if (
        notificationsQuery.isError ||
        unreadCountQuery.isError
    ) {

        return (

            <Typography
                variant="h5"
                color="error"
            >

                Failed to load notifications

            </Typography>

        );
    }

    const notifications =
        notificationsQuery.data!;

    const unreadCount =
        unreadCountQuery.data!;

    return (

        <Box>

            <Typography
                variant="h4"
                sx={{
                    mb: 3,
                    fontWeight: "bold"
                }}
            >

                Notifications

            </Typography>

            <Paper
                sx={{
                    p: 2,
                    mb: 3,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >

                <Stack
                    direction="row"
                    spacing={1}
                    sx={{ alignItems: "center" }}
                >

                    <NotificationsIcon />

                    <Typography>

                        Unread Notifications:
                        {" "}
                        <strong>
                            {unreadCount}
                        </strong>

                    </Typography>

                </Stack>

                <Button
                    variant="contained"
                    startIcon={
                        <MarkEmailReadIcon />
                    }
                    onClick={() =>

                        markAllReadMutation.mutate(
                            undefined,
                            {
                                onSuccess: () =>

                                    showSuccess(
                                        "All notifications marked as read"
                                    ),

                                onError: () =>

                                    showError(
                                        "Failed to mark notifications"
                                    )
                            }

                        )

                    }
                >

                    Mark All Read

                </Button>

            </Paper>

            {
                notifications.length === 0 ? (

                    <Paper
                        sx={{
                            p: 3
                        }}
                    >

                        <Typography>

                            No notifications available

                        </Typography>

                    </Paper>

                ) : (

                    notifications.map(
                        (
                            notification
                        ) => (

                            <Card
                                key={
                                    notification.id
                                }
                                sx={{
                                    mb: 2,
                                    borderLeft:
                                        notification.isRead
                                            ? "4px solid #ccc"
                                            : "4px solid #1976d2"
                                }}
                            >

                                <CardContent>

                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            mb: 1
                                        }}
                                    >

                                        <Typography
                                            variant="h6"
                                        >

                                            {
                                                notification.title
                                            }

                                        </Typography>

                                        <Chip
                                            label={
                                                notification.isRead
                                                    ? "READ"
                                                    : "UNREAD"
                                            }
                                            color={
                                                notification.isRead
                                                    ? "default"
                                                    : "primary"
                                            }
                                            size="small"
                                        />

                                    </Box>

                                    <Typography
                                        sx={{
                                            mb: 2
                                        }}
                                    >

                                        {
                                            notification.message
                                        }

                                    </Typography>

                                    <Stack
                                        direction="row"
                                        spacing={2}
                                        sx={{
                                            mb: 2
                                        }}
                                    >

                                        <Chip
                                            label={
                                                notification.type
                                            }
                                            size="small"
                                        />

                                    </Stack>

                                    <Typography
                                        variant="caption"
                                        color="text.secondary"
                                    >

                                        {
                                            new Date(
                                                notification.createdAt
                                            ).toLocaleString()
                                        }

                                    </Typography>

                                    {
                                        !notification.isRead && (

                                            <Box
                                                sx={{
                                                    mt: 2
                                                }}
                                            >

                                                <Button
                                                    variant="outlined"
                                                    size="small"
                                                    onClick={() =>

                                                        markReadMutation.mutate(
                                                            notification.id,
                                                            {
                                                                onSuccess: () =>

                                                                    showSuccess(
                                                                        "Notification marked as read"
                                                                    ),

                                                                onError: () =>

                                                                    showError(
                                                                        "Failed to mark notification"
                                                                    )
                                                            }
                                                        )

                                                    }
                                                >

                                                    Mark Read

                                                </Button>

                                            </Box>

                                        )
                                    }

                                </CardContent>

                            </Card>

                        )
                    )

                )
            }

        </Box>

    );
}

export default NotificationsPage;