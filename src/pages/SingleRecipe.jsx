import React, { Component } from "react";
import { recipeData } from "./../data/tempDetails";
import { Link } from "react-router-dom";

class SingleRecipe extends Component {
  constructor(props) {
    super(props);
    const id = this.props.match.params.id;
  }

  render() {
    return (
      <div>
        <h1>Recipe Id is : </h1>
      </div>
    );
  }
}

export default SingleRecipe;
