import React, { useContext } from "react";
import Project from "../Components/Projects/Project";
import projects from "../projects.json";
import Theme from "../Context/Theme";
import { Helmet } from "react-helmet";
import "./scss/projects.scss";
const Projects = () => {
  const { dark } = useContext(Theme);
  return (
    <>
      <Helmet>
        <title> VENF | Proyectos </title>
      </Helmet>
      <div
        className={`projects_container ${dark ? "project_container_dark" : ""}`}
      >
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
    </>
  );
};

export default Projects;
