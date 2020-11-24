import React, { useState, useContext, useEffect } from "react";
import { useLocation } from 'react-router-dom';
import Theme from "../../Context/Theme";
import { Link } from "react-router-dom";
import "./scss/main.scss";

const Navbar = () => {
  const [select, setSelect] = useState(1);
  const routes = [
    { title: "Inicio", route: "/", id: 1 },
    { title: "Sobre Mí", route: "/about", id: 2 },
    { title: "Proyectos", route: "/projects", id: 3 },
  ];
  const location = useLocation();
  useEffect(() => {
    const selected = routes.filter((item)=> location.pathname === item.route)
    if(selected.length !== 0){
      setSelect(selected[0].id);
    }
  }, [location, routes])
  const theme = useContext(Theme);
  return (
    <>
      <nav
        className={`navbar_container ${
          theme.dark ? "navbar_container_dark" : ""
        }`}
      >
        {!theme.dark &&
          routes.map((item) => {
            return (
              <div
                className={`item ${select === item.id ? "selected" : "await"} `}
                key={item.id}
              >
                <Link to={item.route} onClick={() => setSelect(item.id)}>
                  <div className="line"></div>
                  <p>{item.title}</p>
                </Link>
              </div>
            );
          })}
        {theme.dark &&
          routes.map((item) => {
            return (
              <div
                className={`item ${
                  select === item.id ? "selected_dark" : "await_dark"
                } `}
                key={item.id}
              >
                <Link to={item.route} onClick={() => setSelect(item.id)}>
                  <div className="line"></div>
                  <p>{item.title}</p>
                </Link>
              </div>
            );
          })}
      </nav>
    </>
  );
};

export default Navbar;
