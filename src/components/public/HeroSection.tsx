import {
    Box,
    Button,
    Container,
    Grid,
    Stack,
    Typography,
    Paper
} from "@mui/material";

import truckImage
from "../../assets/truck.png";

function HeroSection() {

    const scrollToContact =
        () => {

            document
                .getElementById("contact")
                ?.scrollIntoView({
                    behavior: "smooth"
                });
        };

    return (

        <Box
            id="home"
            sx={{
                minHeight: "100vh",
                background:
                    "linear-gradient(135deg,#0F4C81,#1B6CA8)",
                color: "white",
                display: "flex",
                alignItems: "center",
                pt: 10
            }}
        >

            <Container maxWidth="xl">

                <Grid
                    container
                    spacing={6}
                    sx={{
                        alignItems: "center"
                    }}
                >

                    {/* LEFT SIDE */}

                    <Grid
                        size={{
                            xs: 12,
                            md: 6
                        }}
                    >

                        <Typography
                            variant="h2"
                            sx={{
                                fontWeight: 800,
                                mb: 3,
                                fontSize: {
                                    xs: "2.5rem",
                                    md: "4rem"
                                }
                            }}
                        >

                            Fast & Reliable
                            Logistics
                            Across India

                        </Typography>

                        <Typography
                            variant="h6"
                            sx={{
                                mb: 4,
                                opacity: 0.9,
                                lineHeight: 1.8
                            }}
                        >

                            Conway Logistics delivers
                            secure transportation
                            solutions, freight movement,
                            truck booking and nationwide
                            logistics services for
                            businesses and individuals.

                        </Typography>

                        <Stack
                            direction={{
                                xs: "column",
                                sm: "row"
                            }}
                            spacing={2}
                        >

                            <Button
                                size="large"
                                variant="contained"
                                color="secondary"
                                onClick={
                                    scrollToContact
                                }
                            >

                                Request Quote

                            </Button>

                            <Button
                                size="large"
                                variant="outlined"
                                onClick={
                                    scrollToContact
                                }
                                sx={{
                                    color: "white",
                                    borderColor:
                                        "white"
                                }}
                            >

                                Contact Us

                            </Button>

                        </Stack>

                    </Grid>

                    {/* RIGHT SIDE */}

                    <Grid
                        size={{
                            xs: 12,
                            md: 6
                        }}
                    >

                        <Box
                            sx={{
                                textAlign: "center"
                            }}
                        >

                            <Box
                                component="img"
                                src={truckImage}
                                alt="Truck"
                                sx={{
                                    width: "100%",
                                    maxWidth: 600,
                                    objectFit:
                                        "contain"
                                }}
                            />

                        </Box>

                    </Grid>

                </Grid>

                {/* STATS BAR */}

                <Paper
                    elevation={5}
                    sx={{
                        mt: 8,
                        p: 3,
                        borderRadius: 4
                    }}
                >

                    <Grid
                        container
                        spacing={3}
                        sx={{ textAlign: "center" }}
                    >

                        <Grid
                            size={{
                                xs: 6,
                                md: 3
                            }}
                        >

                            <Typography
                                variant="h4"
                                sx={{ fontWeight: 'bold' }}
                                color="primary"
                            >


                                5000+

                            </Typography>

                            <Typography>

                                Deliveries

                            </Typography>

                        </Grid>

                        <Grid
                            size={{
                                xs: 6,
                                md: 3
                            }}
                        >

                            <Typography
                                variant="h4"
                                sx={{ fontWeight: 'bold' }}
                                color="primary"
                            >
                                200+

                            </Typography>

                            <Typography>

                                Fleet Vehicles

                            </Typography>

                        </Grid>

                        <Grid
                            size={{
                                xs: 6,
                                md: 3
                            }}
                        >

                            <Typography
                                variant="h4"
                                sx={{ fontWeight: 'bold' }}
                                color="primary"
                            >

                                50+

                            </Typography>

                            <Typography>

                                Cities Covered

                            </Typography>

                        </Grid>

                        <Grid
                            size={{
                                xs: 6,
                                md: 3
                            }}
                        >

                            <Typography
                                variant="h4"
                                sx={{ fontWeight: 'bold' }}
                                color="primary"
                            >

                                98%

                            </Typography>

                            <Typography>

                                On-Time Delivery

                            </Typography>

                        </Grid>

                    </Grid>

                </Paper>

            </Container>

        </Box>

    );
}

export default HeroSection;