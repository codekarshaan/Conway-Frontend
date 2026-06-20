import {
    Routes,
    Route
} from "react-router-dom";

import LoginPage from "./pages/login/LoginPage";
import DashboardPage from "./pages/dashboard/DashboardPage";
import EnquiriesPage from "./pages/enquiries/EnquiriesPage";
import EnquiryDetailsPage from "./pages/enquiries/EnquiryDetailsPage";
import NotificationsPage from "./pages/notifications/NotificationsPage";

import AdminsPage from "./pages/admins/AdminsPage";
import CreateAdminPage from "./pages/admins/CreateAdminPage";
import EditAdminPage from "./pages/admins/EditAdminPage";

import AuditLogsPage from "./pages/audit/AuditLogsPage";
import LoginHistoryPage from "./pages/loginHistory/LoginHistoryPage";

import ForbiddenPage from "./pages/errors/ForbiddenPage";
import NotFoundPage from "./pages/errors/NotFoundPage";

import ProtectedRoute from "./routes/ProtectedRoute";
import SuperAdminRoute from "./routes/SuperAdminRoute";

import AppLayout from "./components/layout/AppLayout";

function App() {

    return (

        <Routes>

            {/* Public Routes */}

            <Route
                path="/login"
                element={<LoginPage />}
            />

            <Route
                path="/403"
                element={<ForbiddenPage />}
            />

            {/* Protected Routes */}

            <Route
                element={
                    <ProtectedRoute>
                        <AppLayout />
                    </ProtectedRoute>
                }
            >

                <Route
                    path="/dashboard"
                    element={<DashboardPage />}
                />

                <Route
                    path="/enquiries"
                    element={<EnquiriesPage />}
                />

                <Route
                    path="/enquiries/:id"
                    element={<EnquiryDetailsPage />}
                />

                <Route
                    path="/notifications"
                    element={<NotificationsPage />}
                />

                {/* Super Admin Routes */}

                <Route
                    path="/admins"
                    element={
                        <SuperAdminRoute>
                            <AdminsPage />
                        </SuperAdminRoute>
                    }
                />

                <Route
                    path="/admins/create"
                    element={
                        <SuperAdminRoute>
                            <CreateAdminPage />
                        </SuperAdminRoute>
                    }
                />

                <Route
                    path="/admins/:id/edit"
                    element={
                        <SuperAdminRoute>
                            <EditAdminPage />
                        </SuperAdminRoute>
                    }
                />

                <Route
                    path="/audit-logs"
                    element={
                        <SuperAdminRoute>
                            <AuditLogsPage />
                        </SuperAdminRoute>
                    }
                />

                <Route
                    path="/login-history"
                    element={
                        <SuperAdminRoute>
                            <LoginHistoryPage />
                        </SuperAdminRoute>
                    }
                />

            </Route>

            {/* 404 Route */}

            <Route
                path="*"
                element={<NotFoundPage />}
            />

        </Routes>

    );
}

export default App;