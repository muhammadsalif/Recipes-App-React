import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Default from "./pages/Default";
import Recipes from "./pages/Recipes";
import SingleRecipe from "./pages/SingleRecipe";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <React.Fragment>
        {/* NavBar should be render here. */}
        <NavBar></NavBar>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/recipes" exact component={Recipes}></Route>
          <Route path="/recipes/:id" component={SingleRecipe}></Route>
          <Route component={Default}></Route>
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
