import React from "react";

import {
    Box,
    Typography,
    Button
} from "@mui/material";

type Props = {

    children: React.ReactNode;
};

type State = {

    hasError: boolean;
};

class ErrorBoundary extends React.Component<
    Props,
    State
> {

    constructor(
        props: Props
    ) {

        super(props);

        this.state = {

            hasError: false
        };
    }

    static getDerivedStateFromError() {

        return {

            hasError: true
        };
    }

    componentDidCatch(
        error: Error,
        errorInfo: React.ErrorInfo
    ) {

        console.error(
            error,
            errorInfo
        );
    }

    render() {

        if (
            this.state.hasError
        ) {

            return (

                <Box
                    sx={{
                        minHeight: "100vh",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >

                    <Typography
                        variant="h3"
                        gutterBottom
                    >

                        Something Went Wrong

                    </Typography>

                    <Typography
                        sx={{
                            mb: 3
                        }}
                    >

                        Please refresh the page.
                    </Typography>

                    <Button
                        variant="contained"
                        onClick={() =>
                            window.location.reload()
                        }
                    >

                        Refresh

                    </Button>

                </Box>

            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;