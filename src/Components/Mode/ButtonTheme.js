import React, { useContext  } from "react";
import ThemeContext from "../../Context/Theme";
/*Icons*/
import Moon from "../Icons/IconMoon";
import Sun from "../Icons/IconSun";
/*Icons*/

import "./btnSwitch.scss";
const ButtonTheme = () => {
  const {  dark, setDark } = useContext(ThemeContext);
  const themeSwitch = () => {
    dark? setDark(false): setDark(true)
    dark? localStorage.setItem('dark', false): localStorage.setItem('dark', true)
  };

  const darkColor = `#580DF6`;
  return (
    <button
      className={`btn-swtich ${dark ? "btn-dark" : ""}`}
      onClick={themeSwitch}
    >
      <div className={`container_sun ${dark ? "off" : "on"}`}>
        <Sun
          width="20"
          heigth="20"
          color={`${dark ? "#aaaaaa" : `${darkColor}`}`}
        />
      </div>
      <div className={`container_moon ${dark ? "on" : "off"}`}>
        <Moon
          width="20"
          heigth="20"
          color={`${dark ? `${darkColor}` : "#aaaaaa"}`}
        />
      </div>
    </button>
  );
};

export default ButtonTheme;
