import React from "react";
import LeftBar from "../Common/LeftBar";
import Footer from "../Footer/Footer";

export const DesktopLayout = ({ children }) => {
  return (
    <>
      <LeftBar>{children}</LeftBar>
      <Footer />
    </>
  );
};
