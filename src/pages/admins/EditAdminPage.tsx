import {
    useEffect,
    useState
} from "react";

import {
    useNavigate,
    useParams
} from "react-router-dom";

import {
    Box,
    Paper,
    Typography,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Button,
    Stack
} from "@mui/material";

import SaveIcon from "@mui/icons-material/Save";

import {
    useAdmin,
    useUpdateAdmin
} from "../../hooks/useAdmins";

import {
    showSuccess,
    showError
} from "../../utils/toast";
import PageSkeleton from "../../components/common/PageSkeleton";

function EditAdminPage() {

    const { id } =
        useParams();

    const navigate =
        useNavigate();

    const adminId =
        Number(id);

    const adminQuery =
        useAdmin(adminId);

    const updateMutation =
        useUpdateAdmin();

    const [fullName, setFullName] =
        useState("");

    const [phoneNumber, setPhoneNumber] =
        useState("");

    const [roleName, setRoleName] =
        useState("ROLE_ADMIN");

    useEffect(() => {

        if (
            adminQuery.data
        ) {

            setFullName(
                adminQuery.data.fullName
            );

            setPhoneNumber(
                adminQuery.data.phoneNumber
            );

            setRoleName(
                adminQuery.data.role
            );

        }

    }, [adminQuery.data]);

    if (
        adminQuery.isLoading
    ) {

        return (

                <PageSkeleton />

        

        );
    }

    if (
        adminQuery.isError
    ) {

        return (
            <Typography
                variant="h5"
                color="error"
            >
                Failed to load admin
            </Typography>
        );
    }

    const handleSubmit =
        (
            e: React.FormEvent
        ) => {

            e.preventDefault();

            updateMutation.mutate(
                {
                    adminId,

                    request: {

                        fullName,
                        phoneNumber,
                        roleName

                    }
                },
                {
                    onSuccess: () => {

                        showSuccess(
                            "Admin updated successfully"
                        );

                        navigate(
                            "/admins"
                        );
                    },

                    onError: () => {

                        showError(
                            "Failed to update admin"
                        );
                    }
                }
            );
        };

    return (

        <Box>

            <Typography
                variant="h4"
                sx={{
                    mb: 3,
                    fontWeight: "bold"
                }}
            >

                Edit Admin

            </Typography>

            <Paper
                sx={{
                    p: 4,
                    maxWidth: 700
                }}
            >

                <form
                    onSubmit={handleSubmit}
                >

                    <Stack spacing={3}>

                        <TextField
                            label="Full Name"
                            value={fullName}
                            onChange={(e) =>
                                setFullName(
                                    e.target.value
                                )
                            }
                            fullWidth
                            required
                        />

                        <TextField
                            label="Phone Number"
                            value={phoneNumber}
                            onChange={(e) =>
                                setPhoneNumber(
                                    e.target.value
                                )
                            }
                            fullWidth
                            required
                        />

                        <FormControl
                            fullWidth
                        >

                            <InputLabel>
                                Role
                            </InputLabel>

                            <Select
                                value={roleName}
                                label="Role"
                                onChange={(e) =>
                                    setRoleName(
                                        e.target.value
                                    )
                                }
                            >

                                <MenuItem value="ROLE_ADMIN">
                                    Admin
                                </MenuItem>

                                <MenuItem value="ROLE_SUPER_ADMIN">
                                    Super Admin
                                </MenuItem>

                            </Select>

                        </FormControl>

                        <Button
                            type="submit"
                            variant="contained"
                            startIcon={<SaveIcon />}
                            disabled={
                                updateMutation.isPending
                            }
                        >

                            {
                                updateMutation.isPending
                                    ? "Updating..."
                                    : "Update Admin"
                            }

                        </Button>

                    </Stack>

                </form>

            </Paper>

        </Box>

    );
}

export default EditAdminPage;