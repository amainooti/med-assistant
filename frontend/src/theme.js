import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      secondary: {
        main: "#00a889",
      },
    },
  })
);

export default theme;
