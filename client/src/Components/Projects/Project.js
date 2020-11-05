import React, { useContext } from "react";
import IconGithub from "../Icons/IconGithub";
import Theme from "../../Context/Theme";
import "./project.scss";
const Project = ({ img, title, description, url, code }) => {
  const { dark } = useContext(Theme);
  return (
    <>
      <div className={`project ${dark ? "project_dark" : ""}`}>
        <div className={`project_image`}>
          <img src={img} alt="pro" />
        </div>
        <div className={`project_info`}>
          <h3> {title} </h3>
          <div className="content">
            <p>{description}</p>
          </div>
          <div className="actions">
            <a href={url}>Demo</a>
            <a href={code}>
              <IconGithub width="15" heigth="15" color="#580DF6" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
