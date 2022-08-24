import { Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      align="center"
      sx={{
        mb: "20px",
      }}
    >
      &copy; {new Date().getFullYear()} AlphaDevs. All Rights Reserved.
    </Box>
  );
};

export default Footer;
