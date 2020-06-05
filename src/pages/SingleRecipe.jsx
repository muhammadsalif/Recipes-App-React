import React, { Component } from "react";
// import { recipeData } from "./../data/tempDetails";
import { Link } from "react-router-dom";

class SingleRecipe extends Component {
  constructor(props) {
    super(props);
    // this.componentDidMount = this.componentDidMount.bind(this);

    const id = this.props.match.params.id;
    this.state = {
      // recipe: recipeData,
      recipe: {},
      id: id,
      loading: true,
    };
  }

  async componentDidMount() {
    const url = `https://recipesapi.herokuapp.com/api/get?rId=${this.state.id}`;
    try {
      const reponse = await fetch(url);
      const reponseData = await reponse.json();
      this.setState({
        recipe: reponseData,
        loading: false,
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const {
      image_url,
      ingredients,
      publisher,
      publisher_url,
      source_url,
      title,
    } = this.state.recipe;
    if (this.state.loading) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto text-center col-md-6 my-3">
              <h2 className="text-slanted text-capitalize text-orange mt-5">
                Loading Recipes.....
              </h2>{" "}
            </div>
          </div>
        </div>
      );
    } else
      return (
        <div className="container my-5">
          <div className="row">
            {/* Left column */}
            <div className="col-10 mx-auto  col-md-6 my-3">
              <Link
                to="/recipes"
                className="btn btn-warning mb-5 font-weight-bold text-capitalize"
              >
                <i className="fas fa-angle-left mr-2"></i>
                back to recipes list{" "}
              </Link>
              <img
                src={image_url}
                alt="Recipe"
                className="d-block w-100"
                style={{ maxHeight: "30rem" }}
              />
            </div>
            {/* Left Column End*/}

            {/* Right column */}
            <div className="col-10 mx-auto col-md-6 my-3  ">
              <h6 className="text-capitalize font-weight-bolder">{title}</h6>
              <h6 className="text-slanted text-warning text-capitalize">
                provided by {publisher}
              </h6>
              <a
                href={publisher_url}
                rel="noopener noreferrer"
                target="_blank"
                className="btn btn-primary  text-capitalize mt-2"
              >
                Publisher Webpage
              </a>
              <a
                href={source_url}
                rel="noopener noreferrer"
                target="_blank"
                className="btn btn-success mx-2 text-capitalize mt-2"
              >
                Recipe url
              </a>
              <ul className="list-group mt-4">
                <h2 className="mt-1 mb-4 text-capitalize ">ingredients</h2>
                {ingredients.map((item, index) => {
                  return (
                    <li key={index} className="list-group-item text-slanted">
                      {item}
                    </li>
                  );
                })}
              </ul>

              {/* Ending of right side column*/}
            </div>
            {/* Ending of row*/}
          </div>
        </div>
      );
  }
}

export default SingleRecipe;
