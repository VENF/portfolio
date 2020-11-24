import React, { useContext } from "react";
import Theme from "../../Context/Theme";
import BtnMode from "../Mode/ButtonTheme";
import Logo from "../Navbar/Logo";
import "./header.scss";
const Header = () => {
  const theme = useContext(Theme);
  return (
    <>
      <header className={`header ${theme.dark ? "header_dark" : ""}`}>
        <Logo />
        <BtnMode />
      </header>
    </>
  );
};

export default Header;
