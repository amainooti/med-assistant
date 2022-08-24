import { createTheme, responsiveFontSizes } from "@mui/material/styles";

const theme = responsiveFontSizes(
  createTheme({
    palette: {
      secondary: {
        main: "#00a889",
      },
      typography: {
        fontFamily: ["Josefin Sans", "sans-serif"].join(","),
        fontSize: 2,
      },
    },
  })
);

export default theme;
