import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <Header title="Amazing recipes">
          <Link
            to="recipes"
            className="text-uppercase btn btn-secondary btn-lg mt-3"
          >
            Search Recipes <i className="fas fa-search text-dark ml-2"></i>
          </Link>
        </Header>
      </div>
    );
  }
}

export default Home;
