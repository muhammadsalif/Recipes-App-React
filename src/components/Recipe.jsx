import React, { Component } from "react";
import { Link } from "react-router-dom";

class Recipe extends Component {
  render() {
    const {
      image_url,
      recipe_id,
      source_url,
      title,
      publisher,
    } = this.props.recipe;
    console.log(this.props.recipe);

    return (
      <div className="col-10 mx-auto col-md-6 col-lg-4">
        <div className="card" style={{ height: "100%" }}>
          <img
            src={image_url}
            alt="Recipe"
            style={{ height: "14rem" }}
            className="  img-card-top"
          />

          <div className="card-body text-capitalize">
            <h6 className="card-title">{title}</h6>
            <h6 className="text-warning text-slanted">
              provided by {publisher}
            </h6>
          </div>

          <div className="card-footer">
            <Link
              to={`/recipes/${recipe_id}`}
              className="btn btn-primary text-capitalize"
            >
              details
            </Link>
            <a
              href={source_url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success mx-2 text-capitalize text-white"
            >
              {" "}
              recipe url
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Recipe;
