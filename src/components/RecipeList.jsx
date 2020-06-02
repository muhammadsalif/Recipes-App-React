import React, { Component } from "react";
import Recipe from "./Recipe";

class RecipeList extends Component {
  render() {
    const { recipe } = this.props;

    return (
      <>
        <div className="container py-5">
          {/* Title */}
          <div className="row">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase ">
              <h1 className="text-slanted">Recipe list</h1>
            </div>
          </div>
          {/*End Of Title */}

          <div className="row">
            {recipe.map((recipe) => (
              <Recipe key={recipe.recipe_id} recipe={recipe}></Recipe>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default RecipeList;
