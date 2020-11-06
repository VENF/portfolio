import React, { useContext } from "react";
import Theme from "../Context/Theme";
import { Link } from "react-router-dom";
import Animate from "../Components/Home/Animate";
import Social from "../Components/Social/Social";
import { Helmet } from "react-helmet";
import "./scss/home.scss";

const Home = () => {
  const theme = useContext(Theme);
  return (
    <>
      <Helmet>
        <title> VENF | Inicio </title>
        <meta
          name="Victor Naranjo"
          content="Portafolio personal de trabajos | Victor Naranjo"
        />
      </Helmet>
      <div className={`home ${theme.dark ? "home_dark" : ""}`}>
        <div className="content">
          <div className="presentation">
            <h1>Victor Naranjo</h1>
            <h3>Desarrollador Web</h3>
            <p>
              "La verdad solo se puede encontrar en un lugar: el código". -
              Robert C. Martin
            </p>
            <div className="actions">
              <Link to="/projects" className="first">
                Ver Projectos
              </Link>
              <Link to="/about">Sobre Mi</Link>
            </div>
          </div>
          <div className="down">
            <div className="social">
              <Social />
            </div>
            <div className="illustration">
              <Animate />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
