import React from "react";
import { Switch, Route } from "react-router-dom";
import { ThemeContextProvider } from "./Context/Theme";

/*Views*/
import Home from "./Views/Home";
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
        </Switch>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
