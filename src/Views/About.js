import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Theme from "../Context/Theme";
import Avatar from "../Components/Avatar/Avatar";
import AnimateCv from "../Components/About/AnimateCv";
import Technologys from "../Components/About/Technologys";
import Social from "../Components/Social/Social";
import { Helmet } from "react-helmet";
import "./scss/about.scss";
const About = () => {
  const { dark } = useContext(Theme);
  return (
    <>
      <Helmet>
        <title> VENF | Sobre Mi </title>
        <meta
          name="Victor Naranjo"
        />
      </Helmet>
      <div className={`about ${dark ? "about_dark" : ""}`}>
        <div className="content-top">
          <div className="content-avatar">
            <Avatar />
          </div>
          <div className="description">
            <p>
              Soy desarrollador de software y actualmente estudio licenciatura
              en computación. Me enfoco en crear aplicaciones basadas en
              tecnologías web usando distintos frameworks para Javascript,
              trabajo con tecnologías modernas como son React, Vue y Node.js.
              poseo conocimientos utilizando sistemas de gestión de base de
              datos NoSQL como Mongodb asi como en el desarrollo y diseño de
              API's y una pasión por aplicar las mejores prácticas en el diseño
              de software.
              <Link to="/projects">Mira algunos de mis proyectos</Link>
            </p>
          </div>
          <div className="exp">
            <h3>Experiencia en:</h3>
            <ul>
              <li>
                Desarrollo de interfaces de usuario responsivas utilizando HTML,
                CSS, Sass y frameworks de Javascript como React y Vue.
              </li>
              <li>
                Desarrollo de aplicaciones Server Side Rendering con Next.js
              </li>
              <li>
                Manejo de estados en aplicaciones con Redux, React Context y
                Vuex.
              </li>
              <li>
                Testing del lado del servidor con Jest y Supertest, unit
                testing, Integration testing.
              </li>
              <li>Desarrollo de API's con Node, express y Typescript.</li>
              <li>Modelado de Bases de Datos noSQL con MongoDB.</li>
            </ul>
          </div>
        </div>
        <div className="content-down">
          <div className="tecs">
            <h3>Tecnologías que manejo:</h3>
            <Technologys />
          </div>
          <div className="cv_contact">
            <div className="contact">
              <h3> Contactame: </h3>
              <Social />
            </div>
            <div className="animatecv">
              <a href="https://drive.google.com/file/d/1-SGxma_77FT6JMIjHMtOsMN8WzP0H2DQ/view">Ver cv</a>
              <AnimateCv />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
