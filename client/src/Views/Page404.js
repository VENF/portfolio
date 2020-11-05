import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Theme from '../Context/Theme'
import "./scss/error404.scss";
const Page404 = () => {
  const router = useHistory();
  const { dark } = useContext(Theme);
  return (
    <div className={`page_error ${dark? 'page_error_dark': ''}`}>
      <div>
        <p>
          {" "}
          404 | <span>PAGINA NO ENCONTRADA</span>
        </p>
        <button onClick={() => router.replace("/")}>Ir al Inicio</button>
      </div>
    </div>
  );
};

export default Page404;
