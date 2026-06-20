import {
    Box,
    Typography,
    Button
} from "@mui/material";

import {
    Lock
} from "@mui/icons-material";

import {
    useNavigate
} from "react-router-dom";

function ForbiddenPage() {

    const navigate =
        useNavigate();

    return (

        <Box
            sx={{
                minHeight: "100vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                p: 3
            }}
        >

            <Lock
                color="error"
                sx={{
                    fontSize: 100
                }}
            />

            <Typography
                variant="h2"
                sx={{
                    fontWeight: "bold"
                }}
            >

                403

            </Typography>

            <Typography
                variant="h5"
                sx={{
                    mb: 3
                }}
            >

                Access Denied

            </Typography>

            <Typography
                color="text.secondary"
                sx={{
                    mb: 4
                }}
            >

                You do not have permission
                to access this page.

            </Typography>

            <Button
                variant="contained"
                onClick={() =>
                    navigate(
                        "/dashboard"
                    )
                }
            >

                Go To Dashboard

            </Button>

        </Box>

    );
}

export default ForbiddenPage;