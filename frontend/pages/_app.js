import "../styles/globals.css";
import { ThemeProvider, CssBaseline } from "@mui/material";
import AuthContextProvider from "../contexts/authContext";
import theme from "../src/theme";

function MyApp({ Component, pageProps }) {
  return (
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </AuthContextProvider>
  );
}

export default MyApp;
