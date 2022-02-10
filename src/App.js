import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import About from "./pages/About";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import SettingsPage from "./pages/SettingsPage";

const App = () => {
    return (
        <Router>
            <div>
            <Nav />
            <Switch>
             <Route path="/about">
              <About />
             </Route>
             <Route path="/settings">
              <SettingsPage />
             </Route>
             <Route path="/" exact>
              <Home />
             </Route>
           </Switch>
            </div>
        </Router>

    );
}

export default App;