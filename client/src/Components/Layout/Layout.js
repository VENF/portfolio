import React, { useContext } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Social from "../Social/Social";
import Theme from '../../Context/Theme'
import "./layout.scss";
const Layout = ({ children }) => {
  const { dark } = useContext(Theme)
  return (
    <>
      <div className={`layout_container ${dark? 'layout_container_dark': ''}`}>
        <Header />
        <div className={`layout_content`}>
          <Navbar />
          <div className={`content_pages`}>{children}</div>
          <Social />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
