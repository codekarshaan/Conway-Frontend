import { useState } from "react";
import { useNavigate } from "react-router-dom";

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

import AddIcon from "@mui/icons-material/Add";

import {
    showSuccess,
    showError
} from "../../utils/toast";

import {
    useCreateAdmin
} from "../../hooks/useAdmins";

function CreateAdminPage() {

    const navigate =
        useNavigate();

    const createAdminMutation =
        useCreateAdmin();

    const [fullName, setFullName] =
        useState("");

    const [email, setEmail] =
        useState("");

    const [phoneNumber, setPhoneNumber] =
        useState("");

    const [password, setPassword] =
        useState("");

    const [roleName, setRoleName] =
        useState("ROLE_ADMIN");

    const handleSubmit =
        (
            e: React.FormEvent
        ) => {

            e.preventDefault();

            createAdminMutation.mutate(
                {
                    fullName,
                    email,
                    phoneNumber,
                    password,
                    roleName
                },
                {
                    onSuccess: () => {

                        showSuccess(
                            "Admin created successfully"
                        );

                        navigate("/admins");
                    },

                    onError: () => {

                        showError(
                            "Failed to create admin"
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

                Create Admin

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
                            label="Email"
                            type="email"
                            value={email}
                            onChange={(e) =>
                                setEmail(
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

                        <TextField
                            label="Password"
                            type="password"
                            value={password}
                            onChange={(e) =>
                                setPassword(
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
                            startIcon={<AddIcon />}
                            disabled={
                                createAdminMutation.isPending
                            }
                        >

                            {
                                createAdminMutation.isPending
                                    ? "Creating..."
                                    : "Create Admin"
                            }

                        </Button>

                    </Stack>

                </form>

            </Paper>

        </Box>

    );
}

export default CreateAdminPage;