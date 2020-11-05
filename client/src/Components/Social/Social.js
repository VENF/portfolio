import React, { useContext } from "react";
import Theme from "../../Context/Theme";
import IconGithub from "../Icons/IconGithub";
import IconTwitter from "../Icons/IconTwitter";
import IconLinkedin from "../Icons/IconLinkedin";
import IconMeil from "../Icons/IconMeil";
import "./social.scss";

const Social = () => {
  const theme = useContext(Theme);
  const socialMedia = [
    {
      icon: (
        <IconGithub
          width="15"
          heigth="15"
          color={theme.dark ? "#EEE" : "#580DF6"}
        />
      ),
      link: "https://github.com/VENF",
    },
    {
      icon: (
        <IconTwitter
          width="15"
          heigth="15"
          color={theme.dark ? "#EEE" : "#580DF6"}
        />
      ),
      link: "https://twitter.com/VNEF_",
    },
    {
      icon: (
        <IconLinkedin
          width="15"
          heigth="15"
          color={theme.dark ? "#EEE" : "#580DF6"}
        />
      ),
      link: "https://www.linkedin.com/in/victor-naranjo-8121611a5/",
    },
    {
      icon: (
        <IconMeil
          width="15"
          heigth="15"
          color={theme.dark ? "#EEE" : "#580DF6"}
        />
      ),
      link: "mailto:victornar97@gmail.com",
    },
  ];
  return (
    <>
      <div
        className={`social_container ${
          theme.dark ? "social_container_dark" : ""
        }`}
      >
        {socialMedia.map((item, i) => {
          return (
            <a href={item.link} key={i}>
              {item.icon}
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Social;
