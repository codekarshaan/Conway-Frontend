import { Link } from "react-router-dom";

import {
    Box,
    Typography,
    Button,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Chip,
    Stack
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import EditIcon from "@mui/icons-material/Edit";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";

import {
    useAdmins,
    useToggleAdminStatus
} from "../../hooks/useAdmins";

import {
    isSuperAdmin
} from "../../services/authService";

import {
    showSuccess,
    showError
} from "../../utils/toast";
import PageSkeleton from "../../components/common/PageSkeleton";

function AdminsPage() {

    const adminsQuery =
        useAdmins();

    const toggleMutation =
        useToggleAdminStatus();

    const superAdmin =
        isSuperAdmin();

    if (
        adminsQuery.isLoading
    ) {

        return (

          

                <PageSkeleton />

         

        );
    }

    if (
        adminsQuery.isError
    ) {

        return (

            <Typography
                variant="h5"
                color="error"
            >

                Failed to load admins

            </Typography>

        );
    }

    const admins =
        adminsQuery.data!;

    return (

        <Box>

            <Stack
                direction="row"
                sx={{
                    mb: 3,
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >

                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: "bold"
                    }}
                >

                    Admin Management

                </Typography>

                {
                    superAdmin && (

                        <Button
                            component={Link}
                            to="/admins/create"
                            variant="contained"
                            startIcon={<AddIcon />}
                        >

                            Create Admin

                        </Button>

                    )
                }

            </Stack>

            <TableContainer
                component={Paper}
            >

                <Table>

                    <TableHead>

                        <TableRow>

                            <TableCell>
                                ID
                            </TableCell>

                            <TableCell>
                                Name
                            </TableCell>

                            <TableCell>
                                Email
                            </TableCell>

                            <TableCell>
                                Phone
                            </TableCell>

                            <TableCell>
                                Role
                            </TableCell>

                            <TableCell>
                                Status
                            </TableCell>

                            {
                                superAdmin &&
                                <TableCell>
                                    Edit
                                </TableCell>
                            }

                            {
                                superAdmin &&
                                <TableCell>
                                    Action
                                </TableCell>
                            }

                        </TableRow>

                    </TableHead>

                    <TableBody>

                        {
                            admins.map(
                                (admin) => (

                                    <TableRow
                                        key={
                                            admin.id
                                        }
                                    >

                                        <TableCell>
                                            {admin.id}
                                        </TableCell>

                                        <TableCell>
                                            {admin.fullName}
                                        </TableCell>

                                        <TableCell>
                                            {admin.email}
                                        </TableCell>

                                        <TableCell>
                                            {admin.phoneNumber}
                                        </TableCell>

                                        <TableCell>

                                            <Chip
                                                icon={
                                                    <AdminPanelSettingsIcon />
                                                }
                                                label={
                                                    admin.role ===
                                                    "ROLE_SUPER_ADMIN"
                                                        ? "SUPER ADMIN"
                                                        : "ADMIN"
                                                }
                                                color={
                                                    admin.role ===
                                                    "ROLE_SUPER_ADMIN"
                                                        ? "secondary"
                                                        : "primary"
                                                }
                                                size="small"
                                            />

                                        </TableCell>

                                        <TableCell>

                                            <Chip
                                                label={
                                                    admin.isActive
                                                        ? "ACTIVE"
                                                        : "INACTIVE"
                                                }
                                                color={
                                                    admin.isActive
                                                        ? "success"
                                                        : "default"
                                                }
                                                size="small"
                                            />

                                        </TableCell>

                                        {
                                            superAdmin && (

                                                <TableCell>

                                                    <Button
                                                        component={Link}
                                                        to={`/admins/${admin.id}/edit`}
                                                        size="small"
                                                        variant="outlined"
                                                        startIcon={<EditIcon />}
                                                    >

                                                        Edit

                                                    </Button>

                                                </TableCell>

                                            )
                                        }

                                        {
                                            superAdmin && (

                                                <TableCell>

                                                    <Button
                                                        size="small"
                                                        variant="contained"
                                                        color={
                                                            admin.isActive
                                                                ? "error"
                                                                : "success"
                                                        }
                                                        onClick={() =>

                                                            toggleMutation.mutate(
                                                                admin.id,
                                                                {
                                                                    onSuccess: () =>

                                                                        showSuccess(
                                                                            admin.isActive
                                                                                ? "Admin deactivated successfully"
                                                                                : "Admin activated successfully"
                                                                        ),

                                                                    onError: () =>

                                                                        showError(
                                                                            "Failed to update admin status"
                                                                        )
                                                                }
                                                            )

                                                        }
                                                    >

                                                        {
                                                            admin.isActive
                                                                ? "Deactivate"
                                                                : "Activate"
                                                        }

                                                    </Button>

                                                </TableCell>

                                            )
                                        }

                                    </TableRow>

                                )
                            )
                        }

                    </TableBody>

                </Table>

            </TableContainer>

        </Box>

    );
}

export default AdminsPage;