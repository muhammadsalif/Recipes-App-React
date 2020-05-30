import React, { Component } from "react";
import Recipe from "./Recipe";

class RecipeList extends Component {
  render() {
    const { recipes } = this.props;

    return (
      <>
        <div className="container py-5">
          {/* Title */}
          <div className="row ">
            <div className="col-10 mx-auto col-md-6 text-center text-uppercase mb-3">
              <h1 className="text-slanted">Recipe list</h1>
            </div>
          </div>
          {/*End Of Title */}

          <div className="row">
            {recipes.map((recipe) => (
              <Recipe key={recipe.recipe_id} recipes={recipes}></Recipe>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default RecipeList;
