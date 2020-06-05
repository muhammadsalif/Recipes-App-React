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
    base_url: `https://recipesapi.herokuapp.com/api/search`,
    query: "&q=",
    error: "",
  };

  async getRecipes() {
    try {
      const data = await fetch(this.state.url);
      const jsonData = await data.json();
      if (jsonData.recipes.length === 0) {
        this.setState({
          error:
            "Sorry! but your search did not return any recipes, Please try again or press search icon for the most popular recipes",
        });
      } else {
        this.setState({
          recipes: jsonData.recipes,
          error: "",
        });
      }
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
    const { base_url, query, search } = this.state;
    this.setState(
      {
        url: `${base_url}${query}${search}`,
        search: "",
      },
      () => this.getRecipes()
    );
  };

  render() {
    return (
      <div>
        <Search
          search={this.state.search}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        ></Search>
        {this.state.error ? (
          <section>
            <div className="row">
              <div className="col">
                <h2 className="text-orange text-center text-uppercase mt-5">
                  {this.state.error}
                </h2>
              </div>
            </div>
          </section>
        ) : (
          <RecipeList recipe={this.state.recipes}></RecipeList>
        )}
      </div>
    );
  }
}

export default Recipes;
