import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Theme from "../Context/Theme";
import "./scss/page404.scss";
const Page404 = () => {
  const { dark } = useContext(Theme);
  const history = useHistory();
  return (
    <>
      <div className={`page404 ${dark ? "page404_dark" : ""}`}>
        <div>
          <p>
            {" "}
            404 | <span> Page not found </span>{" "}
          </p>
          <button onClick={() => history.replace("/")}>Volver al inicio</button>
        </div>
      </div>
    </>
  );
};

export default Page404;
