import React from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeContextProvider } from "./Context/Theme";

/*Views*/
import Home from "./Views/Home";
import About from './Views/About';
import Projects from './Views/Projects';
import Page404 from './Views/Page404';
/*Views*/

/* Components */
import Header from "./Components/Header/Header";

function App() {
  return (
    <ThemeContextProvider>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/projects" exact component={Projects} />
          <Route path="*" exact component={Page404} />
        </Switch>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
