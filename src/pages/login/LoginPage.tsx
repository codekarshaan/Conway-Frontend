import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
    Box,
    Paper,
    Typography,
    TextField,
    Button,
    InputAdornment,
    IconButton
} from "@mui/material";

import {
    Email,
    Lock,
    Visibility,
    VisibilityOff,
    LocalShipping
} from "@mui/icons-material";

import { login } from "../../api/authApi";
import { saveAuth } from "../../services/authService";

import {
    showSuccess,
    showError
} from "../../utils/toast";

function LoginPage() {

    const navigate =
        useNavigate();

    const [email, setEmail] =
        useState("");

    const [password, setPassword] =
        useState("");

    const [showPassword, setShowPassword] =
        useState(false);

    const [loading, setLoading] =
        useState(false);

    const handleSubmit = async (
        e: React.FormEvent
    ) => {

        e.preventDefault();

        try {

            setLoading(true);

            const response =
                await login({
                    email,
                    password
                });

            saveAuth(response);

            showSuccess(
                "Login Successful"
            );

            navigate(
                "/dashboard"
            );

        } catch (error) {

            console.error(error);

            showError(
                "Invalid Credentials"
            );

        } finally {

            setLoading(false);
        }
    };

    return (

        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                bgcolor: "#f4f6f8",
                p: 2
            }}
        >

            <Paper
                elevation={6}
                sx={{
                    width: "100%",
                    maxWidth: 450,
                    p: 4,
                    borderRadius: 3
                }}
            >

                <Box
                    sx={{
                        textAlign: "center",
                        mb: 4
                    }}
                >

                    <LocalShipping
                        sx={{
                            fontSize: 60,
                            color: "primary.main",
                            mb: 1
                        }}
                    />

                    <Typography
                        variant="h4"
                        sx={{
                            fontWeight: "bold"
                        }}
                    >

                        Conway

                    </Typography>

                    <Typography
                        color="text.secondary"
                    >

                        Logistics Management Platform

                    </Typography>

                </Box>

                <form
                    onSubmit={handleSubmit}
                >

                    <TextField
                        fullWidth
                        label="Email"
                        type="email"
                        value={email}
                        onChange={(e) =>
                            setEmail(
                                e.target.value
                            )
                        }
                        margin="normal"
                        required
                        slotProps={{
                            input: {
                                startAdornment: (

                                    <InputAdornment
                                        position="start"
                                    >

                                        <Email />

                                    </InputAdornment>

                                )
                            }
                        }}
                    />

                    <TextField
                        fullWidth
                        label="Password"
                        type={
                            showPassword
                                ? "text"
                                : "password"
                        }
                        value={password}
                        onChange={(e) =>
                            setPassword(
                                e.target.value
                            )
                        }
                        margin="normal"
                        required
                        slotProps={
                            {
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Lock />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                onClick={() => setShowPassword(!showPassword)}
                                            >
                                                {showPassword ? <VisibilityOff /> : <Visibility />}
                                            </IconButton>
                                        </InputAdornment>
                                    )
                                }
                            } as any
                        }
                    />

                    <Button
                        type="submit"
                        variant="contained"
                        fullWidth
                        size="large"
                        sx={{
                            mt: 3,
                            py: 1.5
                        }}
                        disabled={loading}
                    >

                        {
                            loading
                                ? "Signing In..."
                                : "Login"
                        }

                    </Button>

                </form>

            </Paper>

        </Box>

    );
}

export default LoginPage;