import {
    Link,
    Outlet,
    useNavigate,
    useLocation
} from "react-router-dom";

import {
    Box,
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
    Divider,
    Button,
    Chip
} from "@mui/material";

import {
    Dashboard,
    Assignment,
    Notifications,
    AdminPanelSettings,
    History,
    Security,
    LocalShipping,
    Logout
} from "@mui/icons-material";

import {
    getCurrentUser,
    logout,
    isSuperAdmin
} from "../../services/authService";

const drawerWidth = 270;

function AppLayout() {

    const navigate =
        useNavigate();

    const location =
        useLocation();

    const user =
        getCurrentUser();

    const superAdmin =
        isSuperAdmin();

    const handleLogout =
        () => {

            logout();

            navigate("/login");
        };

    const isActive =
        (path: string) => {

            return location.pathname.startsWith(
                path
            );
        };

    return (

        <Box
            sx={{
                display: "flex"
            }}
        >

            <Drawer
                variant="permanent"
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,

                    "& .MuiDrawer-paper": {

                        width: drawerWidth,

                        boxSizing: "border-box",

                        bgcolor: "#0F4C81",

                        color: "#fff",

                        border: "none"
                    }
                }}
            >

                <Box
                    sx={{
                        p: 3,
                        textAlign: "center"
                    }}
                >

                    <LocalShipping
                        sx={{
                            fontSize: 48,
                            mb: 1
                        }}
                    />

                    <Typography
                        variant="h5"
                        sx={{
                            fontWeight: "bold"
                        }}
                    >

                        Conway

                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{
                            opacity: 0.8
                        }}
                    >

                        Logistics CRM

                    </Typography>

                </Box>

                <Divider
                    sx={{
                        borderColor:
                            "rgba(255,255,255,0.2)"
                    }}
                />

                <Box
                    sx={{
                        p: 2
                    }}
                >

                    <Typography
                        sx={{
                            fontWeight: "bold"
                        }}
                    >

                        {user?.fullName}

                    </Typography>

                    <Chip
                        size="small"
                        label={
                            superAdmin
                                ? "SUPER ADMIN"
                                : "ADMIN"
                        }
                        color="secondary"
                        sx={{
                            mt: 1
                        }}
                    />

                </Box>

                <Divider
                    sx={{
                        borderColor:
                            "rgba(255,255,255,0.2)"
                    }}
                />

                <List>

                    <ListItem disablePadding>

                        <ListItemButton
                            component={Link}
                            to="/dashboard"
                            selected={
                                isActive(
                                    "/dashboard"
                                )
                            }
                        >

                            <ListItemIcon>

                                <Dashboard
                                    sx={{
                                        color: "white"
                                    }}
                                />

                            </ListItemIcon>

                            <ListItemText
                                primary="Dashboard"
                            />

                        </ListItemButton>

                    </ListItem>

                    <ListItem disablePadding>

                        <ListItemButton
                            component={Link}
                            to="/enquiries"
                            selected={
                                isActive(
                                    "/enquiries"
                                )
                            }
                        >

                            <ListItemIcon>

                                <Assignment
                                    sx={{
                                        color: "white"
                                    }}
                                />

                            </ListItemIcon>

                            <ListItemText
                                primary="Enquiries"
                            />

                        </ListItemButton>

                    </ListItem>

                    <ListItem disablePadding>

                        <ListItemButton
                            component={Link}
                            to="/notifications"
                            selected={
                                isActive(
                                    "/notifications"
                                )
                            }
                        >

                            <ListItemIcon>

                                <Notifications
                                    sx={{
                                        color: "white"
                                    }}
                                />

                            </ListItemIcon>

                            <ListItemText
                                primary="Notifications"
                            />

                        </ListItemButton>

                    </ListItem>

                    {
                        superAdmin && (

                            <>

                                <ListItem disablePadding>

                                    <ListItemButton
                                        component={Link}
                                        to="/admins"
                                        selected={
                                            isActive(
                                                "/admins"
                                            )
                                        }
                                    >

                                        <ListItemIcon>

                                            <AdminPanelSettings
                                                sx={{
                                                    color: "white"
                                                }}
                                            />

                                        </ListItemIcon>

                                        <ListItemText
                                            primary="Admins"
                                        />

                                    </ListItemButton>

                                </ListItem>

                                <ListItem disablePadding>

                                    <ListItemButton
                                        component={Link}
                                        to="/audit-logs"
                                        selected={
                                            isActive(
                                                "/audit-logs"
                                            )
                                        }
                                    >

                                        <ListItemIcon>

                                            <History
                                                sx={{
                                                    color: "white"
                                                }}
                                            />

                                        </ListItemIcon>

                                        <ListItemText
                                            primary="Audit Logs"
                                        />

                                    </ListItemButton>

                                </ListItem>

                                <ListItem disablePadding>

                                    <ListItemButton
                                        component={Link}
                                        to="/login-history"
                                        selected={
                                            isActive(
                                                "/login-history"
                                            )
                                        }
                                    >

                                        <ListItemIcon>

                                            <Security
                                                sx={{
                                                    color: "white"
                                                }}
                                            />

                                        </ListItemIcon>

                                        <ListItemText
                                            primary="Login History"
                                        />

                                    </ListItemButton>

                                </ListItem>

                            </>

                        )
                    }

                </List>

                <Box
                    sx={{
                        flexGrow: 1
                    }}
                />

                <Box
                    sx={{
                        p: 2
                    }}
                >

                    <Button
                        fullWidth
                        variant="contained"
                        color="secondary"
                        startIcon={
                            <Logout />
                        }
                        onClick={
                            handleLogout
                        }
                    >

                        Logout

                    </Button>

                </Box>

            </Drawer>

            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    p: 4,
                    bgcolor:
                        "background.default",
                    minHeight: "100vh"
                }}
            >

                <Outlet />

            </Box>

        </Box>

    );
}

export default AppLayout;