import React, { useContext } from "react";
import IconLogo from "../Icons/IconLogo";
import ThemeContext from "../../Context/Theme";
import "./scss/logo.scss";
const Logo = () => {
  const theme = useContext(ThemeContext);

  return (
    <div className="container-logo">
      <div className="logo">
        <IconLogo
          width="25"
          heigth="25"
          color={`${theme.dark ? "#EEE" : "#080412"}`}
        />
      </div>
      <div className={`text-logo ${theme.dark ? "logo-dark" : ""}`}>
        <p className="name">VICTOR NARANJO</p>
        <p className="info">Desarrollador Web</p>
      </div>
    </div>
  );
};

export default Logo;
