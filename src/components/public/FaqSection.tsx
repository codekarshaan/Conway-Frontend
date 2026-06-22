import {
    Box,
    Container,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from "@mui/material";

import ExpandMoreIcon
from "@mui/icons-material/ExpandMore";

const faqs = [

    {
        question:
            "Which cities do you serve?",

        answer:
            "Conway Logistics provides transportation services across major cities and industrial hubs throughout India."
    },

    {
        question:
            "What types of cargo can be transported?",

        answer:
            "We transport electronics, industrial goods, machinery, FMCG products, textiles, automobile parts and more."
    },

    {
        question:
            "How quickly do you respond to enquiries?",

        answer:
            "Our team usually reviews and responds to enquiries within a few business hours."
    },

    {
        question:
            "Do you provide interstate transportation?",

        answer:
            "Yes. We specialize in interstate logistics and long-distance freight transportation."
    },

    {
        question:
            "How can I request a quotation?",

        answer:
            "Simply fill out the enquiry form and our team will contact you with the best transportation solution and pricing."
    }

];

function FaqSection() {

    return (

        <Box
        data-aos="fade-up"
            sx={{
                py: 10
            }}
        >

            <Container maxWidth="md">

                <Typography
                    variant="h3"
                    align="center"
                    sx={{ fontWeight: 'bold' }}
                    gutterBottom
                >

                    Frequently Asked Questions

                </Typography>

                <Typography
                    align="center"
                    color="text.secondary"
                    sx={{
                        mb: 5
                    }}
                >

                    Everything you need to know
                    about our logistics services

                </Typography>

                {
                    faqs.map(
                        (
                            faq,
                            index
                        ) => (

                            <Accordion
                                key={index}
                            >

                                <AccordionSummary
                                    expandIcon={
                                        <ExpandMoreIcon />
                                    }
                                >

                                    <Typography
                                        sx={{ fontWeight: 'bold' }}
                                    >

                                        {
                                            faq.question
                                        }

                                    </Typography>

                                </AccordionSummary>

                                <AccordionDetails>

                                    <Typography>

                                        {
                                            faq.answer
                                        }

                                    </Typography>

                                </AccordionDetails>

                            </Accordion>

                        )
                    )
                }

            </Container>

        </Box>

    );
}

export default FaqSection;