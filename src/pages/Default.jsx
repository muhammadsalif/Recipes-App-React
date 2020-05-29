import React, { Component } from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
class Default extends Component {
  render() {
    return (
      <Header title="404" styleClass="default-hero">
        <h1 className="text-white text-capitalize">Page not found </h1>
        <Link to="/" className="btn btn-secondary text-capitalize btn-lg mt-3">
          <i className="fas fa-angle-left pr-2 pt-2"></i> Back to home
        </Link>
      </Header>
    );
  }
}

export default Default;
