import React, { useContext } from "react";
import Theme from "../Context/Theme";
import Project from "../Components/Project/Project";
import projects from "../projects.json";
import { Helmet } from "react-helmet";
import "./scss/projects.scss";
const Projects = () => {
  const { dark } = useContext(Theme);
  return (
    <>
      <Helmet>
        <title> VENF | proyectos </title>
        <meta
          name="Victor Naranjo"
        />
      </Helmet>
      <div className={`projects ${dark ? "projects_dark" : ""}`}>
        <div className="content">
          {projects.map((item, i) => {
            return (
              <Project
                key={i}
                img={item.img}
                title={item.title}
                description={item.description}
                code={item.code}
                url={item.url}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
