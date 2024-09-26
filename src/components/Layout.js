import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { GeistSans } from "geist/font/sans";

const Layout = ({ children }) => {
  return (
    <div className={`min-h-screen ${GeistSans.className}`}>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
