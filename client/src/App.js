import React from 'react';
import { Switch, Route} from 'react-router-dom';
import { ThemeContextProvider } from './Context/Theme';
import useWindowsDimensions from './Hooks/useWindowsDimensions';
/*Components*/
import Layout from './Components/Layout/Layout';
import LayoutMovile from './Components/Layout/Layout.movile';
/*Components*/
/*Views*/
import Home from './Views/Home';
import About from './Views/About';
import Projects from './Views/Projects';
import Page404 from './Views/Page404';
/*Views*/

function App() {
  const { isSmall } = useWindowsDimensions(650);
  if(!isSmall){
    return (
      <ThemeContextProvider>
        <div className="App">
          <Layout>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About}/>
              <Route path="/projects" component={Projects}/>
              <Route path="*" component={Page404}/>
            </Switch>
          </Layout>
        </div>
      </ThemeContextProvider>
    );
  } else {
    return (
      <ThemeContextProvider>
        <div className="App">
          <LayoutMovile>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About}/>
              <Route path="/projects" component={Projects}/>
              <Route path="*" component={Page404}/>
            </Switch>
          </LayoutMovile>
        </div>
      </ThemeContextProvider>
    );
  }
}

export default App;
