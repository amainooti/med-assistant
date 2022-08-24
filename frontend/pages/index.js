import Mobile from "./mobile";
import Desktop from "./desktop";
import { Box } from "@mui/material";

export default function Home() {
  return (
    <>
      <Box
        sx={{
          display: { md: "none" },
        }}
      >
        <Mobile />
      </Box>
      <Box
        sx={{
          display: { xs: "none", md: "block" },
        }}
      >
        <Desktop />
      </Box>
    </>
  );
}
