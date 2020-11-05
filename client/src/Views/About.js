import React, { useState, useContext, useEffect, useRef } from "react";
import Theme from "../Context/Theme";
import Avatar from "../Components/Avatar/Avatar";
import Technologys from "../Components/About/Technologys";
import AnimateCv from "../Components/About/AnimateCv";
import { TimelineLite, Power2 } from "gsap";
import { Helmet } from 'react-helmet';
import "./scss/about.scss";
const About = () => {
  const [show, setShow] = useState(false);
  const { dark } = useContext(Theme);
  const info = useRef(null);
  const btn = useRef(null);
  const tecs = useRef(null);
  useEffect(() => {
    const time = new TimelineLite();
    time.fromTo(
      info.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: Power2 }
    );
    time.fromTo(
      btn.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: Power2 }
    );
    time.fromTo(
      tecs.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.5, ease: Power2 }
    );
  }, []);
  return (
    <>
    <Helmet>
      <title> VENF | Sobre Mí </title>
    </Helmet>
      <div className={`about_container ${dark ? "about_container_dakr" : ""}`}>
        <div className={`description`}>
          <div className="info" ref={info}>
            <Avatar />
            <p>
              Soy desarrollador de software y actualmente estudio licenciatura
              en computación. Me enfoco en crear aplicaciones basadas en
              tecnologías web usando distintos frameworks para Javascript,
              trabajo con tecnologías modernas como son React, Vue y Node.js.
              poseo conocimientos utilizando sistemas de gestión de base de
              datos NoSQL como Mongodb asi como en el desarrollo y diseño de
              API's y una pasión por aplicar las mejores prácticas en el diseño
              de software.
            </p>
          </div>
          {show === false && (
            <button ref={btn} onClick={() => setShow(true)} className={`btn`}>
              Leer Mas
            </button>
          )}
          {show && (
            <div className={`exp`}>
              <h3>Experiencia en:</h3>
              <p>
                Desarrollo de interfaces de usuario responsivas utilizando HTML,
                CSS, Sass y frameworks de Javascript como React y Vue.
              </p>
              <p>
                Desarrollo de aplicaciones Server Side Rendering con Next.js
              </p>
              <p>
                Manejo de estados en aplicaciones con Redux, React Context y
                Vuex.
              </p>
              <p>
                Testing del lado del servidor con Jest y Supertest, unit
                testing, Integration testing.
              </p>
              <p>Desarrollo de API's con Node, express y Typescript</p>
              <p>Modelado de Bases de Datos noSQL con MongoDB.</p>
              <button onClick={() => setShow(false)} className={`btn view`}>
                Ocultar
              </button>
            </div>
          )}
        </div>
        <div className={`tecs`} ref={tecs}>
          <h3>Tecnologias que menejo:</h3>
          <Technologys />
          <AnimateCv />
        </div>
      </div>
    </>
  );
};

export default About;
