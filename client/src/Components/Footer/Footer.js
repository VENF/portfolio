import React, { useContext } from "react";
import Theme from "../../Context/Theme";
import "./footer.scss";
const Footer = () => {
  const theme = useContext(Theme);
  return (
    <>
      <footer className={`footer ${theme.dark ? "footer-dark" : ""}`}>
        <p>© Victor Naranjo</p>
        <p>Desarrollado con React &#9829;</p>
      </footer>
    </>
  );
};

export default Footer;
