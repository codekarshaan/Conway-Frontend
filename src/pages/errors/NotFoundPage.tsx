import {
    Box,
    Typography,
    Button
} from "@mui/material";

import {
    SearchOff
} from "@mui/icons-material";

import {
    useNavigate
} from "react-router-dom";

function NotFoundPage() {

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

            <SearchOff
                color="primary"
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

                404

            </Typography>

            <Typography
                variant="h5"
                sx={{
                    mb: 3
                }}
            >

                Page Not Found

            </Typography>

            <Typography
                color="text.secondary"
                sx={{
                    mb: 4
                }}
            >

                The page you are looking
                for does not exist.

            </Typography>

            <Button
                variant="contained"
                onClick={() =>
                    navigate(
                        "/dashboard"
                    )
                }
            >

                Go To Home

            </Button>

        </Box>

    );
}

export default NotFoundPage;