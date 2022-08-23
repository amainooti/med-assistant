import React from "react";
import { Box, styled } from "@mui/material";

const Main = styled(Box)(() => ({
  display: "flex",
  boxPack: "center",
  flexDirection: "column",
  minHeight: "100vh",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
}));

const AuthLayout = ({ children }) => {
  return (
    <>
      <Main>{children}</Main>
    </>
  );
};

export default AuthLayout;
