import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./layoud_movile.scss";
const LayoutMovile = ({ children }) => {
  return (
    <>
      <div className={`layout-movile_container`}>
        <Header />
        <div className={`layout-movile_content`}>
          <Navbar />
          <div className={`content-movile_pages`}>{children}</div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default LayoutMovile;
