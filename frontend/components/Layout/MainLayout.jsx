import React from "react";
import LeftBar from "../Common/LeftBar";
import Footer from "../Footer/Footer";

const MainLayout = ({ children }) => {
  return (
    <>
      <LeftBar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
