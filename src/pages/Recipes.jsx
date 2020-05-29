import React, { Component } from "react";
import Search from "../components/Search";
import RecipeList from "../components/RecipeList";
import { recipeData } from "./../data/tempList";
class Recipes extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    recipes: recipeData,
    search: "",
  };
  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <h1>Hello From Recipes.jsx</h1>
        <Search
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        ></Search>
        <RecipeList></RecipeList>
      </div>
    );
  }
}

export default Recipes;
