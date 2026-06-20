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

import HistoryIcon from "@mui/icons-material/History";

import {
    useAuditLogs
} from "../../hooks/useAuditLogs";
import PageSkeleton from "../../components/common/PageSkeleton";

function AuditLogsPage() {

    const auditQuery =
        useAuditLogs();

    if (
        auditQuery.isLoading
    ) {

                return (

           
            

                <PageSkeleton />

            

        );
    }

    if (
        auditQuery.isError
    ) {

        return (

            <Typography
                variant="h5"
                color="error"
            >

                Failed to load audit logs

            </Typography>

        );
    }

    const logs =
        auditQuery.data!;

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

                <HistoryIcon
                    fontSize="large"
                />

                <Typography
                    variant="h4"
                    sx={{
                        fontWeight: "bold"
                    }}
                >

                    Audit Logs

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
                                Action
                            </TableCell>

                            <TableCell>
                                Entity
                            </TableCell>

                            <TableCell>
                                Entity ID
                            </TableCell>

                            <TableCell>
                                Description
                            </TableCell>

                            <TableCell>
                                Created At
                            </TableCell>

                        </TableRow>

                    </TableHead>

                    <TableBody>

                        {
                            logs.map(
                                (log) => (

                                    <TableRow
                                        key={
                                            log.id
                                        }
                                    >

                                        <TableCell>
                                            {log.id}
                                        </TableCell>

                                        <TableCell>
                                            {log.adminName}
                                        </TableCell>

                                        <TableCell>

                                            <Chip
                                                label={
                                                    log.action
                                                }
                                                color="primary"
                                                size="small"
                                            />

                                        </TableCell>

                                        <TableCell>
                                            {log.entityName}
                                        </TableCell>

                                        <TableCell>
                                            {log.entityId}
                                        </TableCell>

                                        <TableCell>
                                            {log.description}
                                        </TableCell>

                                        <TableCell>

                                            {
                                                new Date(
                                                    log.createdAt
                                                ).toLocaleString()
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

export default AuditLogsPage;