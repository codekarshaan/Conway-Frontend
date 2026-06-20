import {
    Box,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Chip
} from "@mui/material";

import LoginIcon from "@mui/icons-material/Login";

import {
    useLoginHistory
} from "../../hooks/useLoginHistory";
import PageSkeleton from "../../components/common/PageSkeleton";

function LoginHistoryPage() {

    const historyQuery =
        useLoginHistory();

    if (
        historyQuery.isLoading
    ) {

                return (                <PageSkeleton />
);
    }

    if (
        historyQuery.isError
    ) {

        return (

            <Typography
                variant="h5"
                color="error"
            >

                Failed to load login history

            </Typography>

        );
    }

    const records =
        historyQuery.data!;

    return (

        <Box>

            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 1,
                    mb: 3
                }}
            >

                <LoginIcon
                    fontSize="large"
                />

                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: "bold"
                    }}
                >

                    Login History

                </Typography>

            </Box>

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
                                Admin
                            </TableCell>

                            <TableCell>
                                Email
                            </TableCell>

                            <TableCell>
                                Login Time
                            </TableCell>

                            <TableCell>
                                IP Address
                            </TableCell>

                            <TableCell>
                                Browser
                            </TableCell>

                        </TableRow>

                    </TableHead>

                    <TableBody>

                        {
                            records.map(
                                (record) => (

                                    <TableRow
                                        key={
                                            record.id
                                        }
                                    >

                                        <TableCell>
                                            {record.id}
                                        </TableCell>

                                        <TableCell>

                                            <Chip
                                                label={
                                                    record.adminName
                                                }
                                                color="primary"
                                                size="small"
                                            />

                                        </TableCell>

                                        <TableCell>
                                            {record.email}
                                        </TableCell>

                                        <TableCell>

                                            {
                                                new Date(
                                                    record.loginTime
                                                ).toLocaleString()
                                            }

                                        </TableCell>

                                        <TableCell>
                                            {record.ipAddress}
                                        </TableCell>

                                        <TableCell>

                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    maxWidth: 400,
                                                    overflow: "hidden",
                                                    textOverflow: "ellipsis",
                                                    whiteSpace: "nowrap"
                                                }}
                                            >

                                                {
                                                    record.userAgent
                                                }

                                            </Typography>

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

export default LoginHistoryPage;