import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import {
    QueryClient,
    QueryClientProvider
} from "@tanstack/react-query";

import {
    ToastContainer
} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import {
    ThemeProvider,
    CssBaseline
} from "@mui/material";

import ErrorBoundary
from "./components/common/ErrorBoundary";

import theme from "./theme/theme";

import App from "./App";

const queryClient =
    new QueryClient();

ReactDOM.createRoot(
    document.getElementById("root")!
).render(

    <React.StrictMode>

        <ThemeProvider
            theme={theme}
        >

            <CssBaseline />

            <QueryClientProvider
                client={queryClient}
            >

                <BrowserRouter>
                    <ErrorBoundary>
                        <App />
                    </ErrorBoundary>

                    <ToastContainer
                        position="top-right"
                        autoClose={3000}
                        hideProgressBar={false}
                        newestOnTop
                        closeOnClick
                        pauseOnHover
                    />

                </BrowserRouter>

            </QueryClientProvider>

        </ThemeProvider>

    </React.StrictMode>

);