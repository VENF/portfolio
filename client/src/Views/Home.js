import React, { useContext, useEffect, useRef } from "react";
import Theme from "../Context/Theme";
import Animate from "../Components/Home/Animate";
import { TimelineLite, Power2 } from "gsap";
import { Helmet } from "react-helmet";
import "./scss/home.scss";

const Home = () => {
  const theme = useContext(Theme);
  const title = useRef(null);
  const sub = useRef(null);
  const anim = useRef(null);
  useEffect(() => {
    const time = new TimelineLite();
    time.fromTo(
      title.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: Power2 }
    );
    time.fromTo(
      sub.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: Power2 }
    );
    time.fromTo(
      anim.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: Power2 }
    );
  }, []);
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
        <div>
          <h1 ref={title}>Victor Naranjo</h1>
          <p ref={sub}>Desarrollador Web</p>
          <div ref={anim} className="content-animation">
            <Animate />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
