import React, { useContext } from "react";
import Theme from "../../Context/Theme";
import IconGithub from "../../Components/Icons/IconGithub";
import "./project.scss";
const Project = ({ img, title, description, url, code }) => {
  const { dark } = useContext(Theme);
  return (
    <div className={`project ${dark ? "project_dark" : ""}`}>
      <div className="content-img">
        <img src={img} alt={title} />
      </div>
      <div className="content-info">
        <h3> {title} </h3>
        <p> {description} </p>
        <div className="actions">
          <a href={url}>Demo</a>
          <a href={code}>
            {" "}
            <IconGithub
              width="15"
              heigth="15"
              color={dark ? "#EEE" : "#580DF6"}
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
