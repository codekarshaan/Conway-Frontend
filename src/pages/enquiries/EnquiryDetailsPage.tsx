import { useState } from "react";
import { useParams } from "react-router-dom";

import {
    Box,
    Typography,
    Paper,
    Grid,
    Divider,
    TextField,
    Button,
    Chip,
    Card,
    CardContent
} from "@mui/material";

import {
    useEnquiryDetails
} from "../../hooks/useEnquiryDetails";

import {
    useEnquiryNotes,
    useCreateEnquiryNote
} from "../../hooks/useEnquiryNotes";

import {
    showSuccess,
    showError
} from "../../utils/toast";
import PageSkeleton from "../../components/common/PageSkeleton";

function EnquiryDetailsPage() {

    const { id } =
        useParams();

    const enquiryId =
        Number(id);

    const enquiryQuery =
        useEnquiryDetails(
            enquiryId
        );

    const notesQuery =
        useEnquiryNotes(
            enquiryId
        );

    const [newNote, setNewNote] =
        useState("");

    const createNoteMutation =
        useCreateEnquiryNote(
            enquiryId
        );

    const handleAddNote =
        () => {

            if (
                !newNote.trim()
            ) {
                return;
            }

            createNoteMutation.mutate(
                newNote,
                {
                    onSuccess: () => {

                        showSuccess(
                            "Note added successfully"
                        );

                        setNewNote("");

                    },

                    onError: () => {

                        showError(
                            "Failed to add note"
                        );

                    }
                }
            );
        };

    if (
        enquiryQuery.isLoading ||
        notesQuery.isLoading
    ) {

        return (

           

                <PageSkeleton />

          

        );
    }

    if (
        enquiryQuery.isError ||
        notesQuery.isError
    ) {

        return (

            <Typography
                color="error"
                variant="h5"
            >

                Failed to load enquiry

            </Typography>

        );
    }

    const enquiry =
        enquiryQuery.data!;

    const notes =
        notesQuery.data!;

    return (

        <Box>

            <Typography
                variant="h4"
                sx={{
                    mb: 3,
                    fontWeight: "bold"
                }}
            >

                Enquiry Details

            </Typography>

            <Paper
                sx={{
                    p: 3,
                    mb: 4
                }}
            >

                <Grid
                    container
                    spacing={3}
                >

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Typography>
                            <strong>ID:</strong> {enquiry.id}
                        </Typography>

                        <Typography>
                            <strong>Customer:</strong> {enquiry.customerName}
                        </Typography>

                        <Typography>
                            <strong>Phone:</strong> {enquiry.phoneNumber}
                        </Typography>

                        <Typography>
                            <strong>Email:</strong> {enquiry.email}
                        </Typography>

                    </Grid>

                    <Grid size={{ xs: 12, md: 6 }}>

                        <Typography>
                            <strong>City:</strong> {enquiry.city}
                        </Typography>

                        <Typography>
                            <strong>Truck Type:</strong> {enquiry.truckType}
                        </Typography>

                        <Typography>
                            <strong>Cargo Type:</strong> {enquiry.cargoType}
                        </Typography>

                        <Typography
                            sx={{
                                mt: 1
                            }}
                        >

                            <strong>Status:</strong>{" "}

                            <Chip
                                label={enquiry.status}
                                color="primary"
                                size="small"
                            />

                        </Typography>

                    </Grid>

                </Grid>

                <Divider
                    sx={{
                        my: 3
                    }}
                />

                <Typography
                    variant="h6"
                    sx={{
                        mb: 1
                    }}
                >

                    Customer Message

                </Typography>

                <Paper
                    variant="outlined"
                    sx={{
                        p: 2
                    }}
                >

                    {enquiry.message}

                </Paper>

            </Paper>

            <Typography
                variant="h5"
                sx={{
                    mb: 2,
                    fontWeight: "bold"
                }}
            >

                Notes

            </Typography>

            {
                notes.length === 0 ? (

                    <Paper
                        sx={{
                            p: 2,
                            mb: 3
                        }}
                    >

                        No notes available

                    </Paper>

                ) : (

                    notes.map(
                        (note) => (

                            <Card
                                key={note.id}
                                sx={{
                                    mb: 2
                                }}
                            >

                                <CardContent>

                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            fontWeight: "bold"
                                        }}
                                    >

                                        {note.adminName}

                                    </Typography>

                                    <Typography
                                        sx={{
                                            my: 1
                                        }}
                                    >

                                        {note.note}

                                    </Typography>

                                    <Typography
                                        variant="caption"
                                        color="text.secondary"
                                    >

                                        {new Date(
                                            note.createdAt
                                        ).toLocaleString()}

                                    </Typography>

                                </CardContent>

                            </Card>

                        )
                    )

                )
            }

            <Paper
                sx={{
                    p: 3,
                    mt: 4
                }}
            >

                <Typography
                    variant="h6"
                    sx={{
                        mb: 2
                    }}
                >

                    Add Note

                </Typography>

                <TextField
                    multiline
                    rows={4}
                    fullWidth
                    value={newNote}
                    onChange={(e) =>
                        setNewNote(
                            e.target.value
                        )
                    }
                />

                <Button
                    variant="contained"
                    sx={{
                        mt: 2
                    }}
                    onClick={handleAddNote}
                    disabled={
                        createNoteMutation.isPending
                    }
                >

                    {
                        createNoteMutation.isPending
                            ? "Saving..."
                            : "Add Note"
                    }

                </Button>

            </Paper>

        </Box>

    );
}

export default EnquiryDetailsPage;