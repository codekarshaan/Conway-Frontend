import {
    Grid,
    Card,
    CardContent,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Box
} from "@mui/material";

import PageSkeleton
from "../../components/common/PageSkeleton";

import {
    Assignment,
    FiberNew,
    ContactPhone,
    Engineering,
    CheckCircle
} from "@mui/icons-material";

import {
    useDashboard
} from "../../hooks/useDashboard";

function DashboardPage() {

    const {
        dashboardQuery,
        recentEnquiriesQuery
    } = useDashboard();



if (
    dashboardQuery.isLoading ||
    recentEnquiriesQuery.isLoading
) {

        return (

          
            

                <PageSkeleton />

           

        );
    }

    if (
        dashboardQuery.isError ||
        recentEnquiriesQuery.isError
    ) {

        return (

            <Typography
                variant="h5"
                color="error"
            >

                Failed to load dashboard

            </Typography>

        );
    }

    const dashboard =
        dashboardQuery.data!;

    const recentEnquiries =
        recentEnquiriesQuery.data!;

    return (

        <Box>

            <Typography
                variant="h4"
                sx={{
                    mb: 4,
                    fontWeight: "bold"
                }}
            >

                Dashboard

            </Typography>

            <Grid
                container
                spacing={3}
                sx={{
                    mb: 4
                }}
            >

                <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>

                    <Card>

                        <CardContent>

                            <Assignment
                                color="primary"
                            />

                            <Typography
                                variant="h6"
                            >

                                Total

                            </Typography>

                            <Typography
                                variant="h4"
                            >

                                {
                                    dashboard.totalEnquiries
                                }

                            </Typography>

                        </CardContent>

                    </Card>

                </Grid>

                <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>

                    <Card>

                        <CardContent>

                            <FiberNew
                                color="success"
                            />

                            <Typography
                                variant="h6"
                            >

                                New

                            </Typography>

                            <Typography
                                variant="h4"
                            >

                                {
                                    dashboard.newEnquiries
                                }

                            </Typography>

                        </CardContent>

                    </Card>

                </Grid>

                <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>

                    <Card>

                        <CardContent>

                            <ContactPhone
                                color="warning"
                            />

                            <Typography
                                variant="h6"
                            >

                                Contacted

                            </Typography>

                            <Typography
                                variant="h4"
                            >

                                {
                                    dashboard.contactedEnquiries
                                }

                            </Typography>

                        </CardContent>

                    </Card>

                </Grid>

                <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>

                    <Card>

                        <CardContent>

                            <Engineering
                                color="secondary"
                            />

                            <Typography
                                variant="h6"
                            >

                                In Progress

                            </Typography>

                            <Typography
                                variant="h4"
                            >

                                {
                                    dashboard.inProgressEnquiries
                                }

                            </Typography>

                        </CardContent>

                    </Card>

                </Grid>

                <Grid size={{ xs: 12, sm: 6, md: 2.4 }}>

                    <Card>

                        <CardContent>

                            <CheckCircle
                                color="success"
                            />

                            <Typography
                                variant="h6"
                            >

                                Closed

                            </Typography>

                            <Typography
                                variant="h4"
                            >

                                {
                                    dashboard.closedEnquiries
                                }

                            </Typography>

                        </CardContent>

                    </Card>

                </Grid>

            </Grid>

            <Typography
                variant="h5"
                sx={{
                    mb: 2,
                    fontWeight: "bold"
                }}
            >

                Recent Enquiries

            </Typography>

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
                                Customer
                            </TableCell>

                            <TableCell>
                                Phone
                            </TableCell>

                            <TableCell>
                                Status
                            </TableCell>

                        </TableRow>

                    </TableHead>

                    <TableBody>

                        {
                            recentEnquiries.map(
                                (
                                    enquiry
                                ) => (

                                    <TableRow
                                        key={
                                            enquiry.id
                                        }
                                    >

                                        <TableCell>

                                            {
                                                enquiry.id
                                            }

                                        </TableCell>

                                        <TableCell>

                                            {
                                                enquiry.customerName
                                            }

                                        </TableCell>

                                        <TableCell>

                                            {
                                                enquiry.phoneNumber
                                            }

                                        </TableCell>

                                        <TableCell>

                                            {
                                                enquiry.status
                                            }

                                        </TableCell>

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

export default DashboardPage;