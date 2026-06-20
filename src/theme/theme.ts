import { createTheme } from "@mui/material/styles";

const theme = createTheme({

    palette: {

        primary: {
            main: "#0F4C81"
        },

        secondary: {
            main: "#F7931E"
        },

        background: {

            default: "#F4F6F8",

            paper: "#FFFFFF"
        }
    },

    typography: {

        fontFamily:
            "Inter, Roboto, sans-serif",

        h4: {

            fontWeight: 700
        },

        h5: {

            fontWeight: 600
        }
    },

    shape: {

        borderRadius: 12
    }
});

export default theme;