import React, { Component } from "react";
import Search from "../components/Search";
import RecipeList from "../components/RecipeList";
// import { recipeData } from "./../data/tempList";
class Recipes extends Component {
  constructor(props) {
    super(props);
    this.getRecipes = this.getRecipes.bind(this);
  }
  state = {
    // recipes: recipeData,
    recipes: {},
    search: "",
    url: `https://recipesapi.herokuapp.com/api/search`,
  };

  async getRecipes() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      this.setState({
        recipes: jsonData.recipes,
      });
    } catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getRecipes();
  }

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
        <Search
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        ></Search>
        <RecipeList recipe={this.state.recipes}></RecipeList>
      </div>
    );
  }
}

export default Recipes;
