import { useState } from "react";
import { Link } from "react-router-dom";

import {
    Box,
    Typography,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    Stack
} from "@mui/material";

import {
    useEnquiries,
    useUpdateEnquiryStatus
} from "../../hooks/useEnquiries";
import PageSkeleton from "../../components/common/PageSkeleton";

function EnquiriesPage() {

    const [search, setSearch] =
        useState("");

    const [status, setStatus] =
        useState("");

    const [page, setPage] =
        useState(0);

    const enquiryQuery =
        useEnquiries(
            page,
            10,
            search,
            status
        );

    const updateStatusMutation =
        useUpdateEnquiryStatus();

    if (enquiryQuery.isLoading) {

                return (

    

                <PageSkeleton />

    

        );
    }

    if (enquiryQuery.isError) {

        return (

            <Typography
                color="error"
                variant="h5"
            >

                Failed to load enquiries

            </Typography>

        );
    }

    const pageData =
        enquiryQuery.data!;

    const enquiries =
        pageData.content;

    return (

        <Box>

            <Typography
                variant="h4"
                sx={{
                    mb: 3,
                    fontWeight: "bold"
                }}
            >

                Enquiries

            </Typography>

            <Stack
                direction="row"
                spacing={2}
                sx={{
                    mb: 3
                }}
            >

                <TextField
                    label="Search"
                    value={search}
                    onChange={(e) => {

                        setSearch(
                            e.target.value
                        );

                        setPage(0);

                    }}
                />

                <FormControl
                    sx={{
                        minWidth: 200
                    }}
                >

                    <InputLabel>
                        Status
                    </InputLabel>

                    <Select
                        value={status}
                        label="Status"
                        onChange={(e) => {

                            setStatus(
                                e.target.value
                            );

                            setPage(0);

                        }}
                    >

                        <MenuItem value="">
                            All Statuses
                        </MenuItem>

                        <MenuItem value="NEW">
                            NEW
                        </MenuItem>

                        <MenuItem value="CONTACTED">
                            CONTACTED
                        </MenuItem>

                        <MenuItem value="IN_PROGRESS">
                            IN_PROGRESS
                        </MenuItem>

                        <MenuItem value="CLOSED">
                            CLOSED
                        </MenuItem>

                    </Select>

                </FormControl>

            </Stack>

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
                                City
                            </TableCell>

                            <TableCell>
                                Status
                            </TableCell>

                            <TableCell>
                                Created
                            </TableCell>

                            <TableCell>
                                Actions
                            </TableCell>

                        </TableRow>

                    </TableHead>

                    <TableBody>

                        {
                            enquiries.map(
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
                                                enquiry.city
                                            }
                                        </TableCell>

                                        <TableCell>

                                            <Select
                                                size="small"
                                                value={
                                                    enquiry.status
                                                }
                                                onChange={(e) =>

                                                    updateStatusMutation.mutate({

                                                        enquiryId:
                                                            enquiry.id,

                                                        status:
                                                            e.target.value

                                                    })

                                                }
                                            >

                                                <MenuItem value="NEW">
                                                    NEW
                                                </MenuItem>

                                                <MenuItem value="CONTACTED">
                                                    CONTACTED
                                                </MenuItem>

                                                <MenuItem value="IN_PROGRESS">
                                                    IN_PROGRESS
                                                </MenuItem>

                                                <MenuItem value="CLOSED">
                                                    CLOSED
                                                </MenuItem>

                                            </Select>

                                        </TableCell>

                                        <TableCell>

                                            {
                                                new Date(
                                                    enquiry.createdAt
                                                ).toLocaleDateString()
                                            }

                                        </TableCell>

                                        <TableCell>

                                            <Button
                                                component={Link}
                                                to={`/enquiries/${enquiry.id}`}
                                                variant="contained"
                                                size="small"
                                            >

                                                View

                                            </Button>

                                        </TableCell>

                                    </TableRow>

                                )
                            )
                        }

                    </TableBody>

                </Table>

            </TableContainer>

            <Box
                sx={{
                    mt: 3,
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}
            >

                <Typography>

                    Total Records: {
                        pageData.totalElements
                    }

                </Typography>

                <Box>

                    <Button
                        variant="outlined"
                        disabled={
                            pageData.first
                        }
                        onClick={() =>
                            setPage(
                                page - 1
                            )
                        }
                    >

                        Previous

                    </Button>

                    <Typography
                        component="span"
                        sx={{
                            mx: 2
                        }}
                    >

                        Page {
                            pageData.number + 1
                        } of {
                            pageData.totalPages
                        }

                    </Typography>

                    <Button
                        variant="outlined"
                        disabled={
                            pageData.last
                        }
                        onClick={() =>
                            setPage(
                                page + 1
                            )
                        }
                    >

                        Next

                    </Button>

                </Box>

            </Box>

        </Box>

    );
}

export default EnquiriesPage;