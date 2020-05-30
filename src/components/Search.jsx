import React, { Component } from "react";

class Search extends Component {
  render() {
    const { handleChange, handleSubmit, search } = this.props;
    return (
      <div className="container ">
        <div className="row ">
          <div className="col-10 col-md-8 mt-5 text-center mx-auto ">
            <h1 className="text-slanted text-capitalize">
              {" "}
              search recipes with{" "}
              <strong className="text-orange">Food2Fork</strong>
            </h1>
            <form className="mt-4">
              <label htmlFor="search" className="text-capitalize">
                type recipes separated by comma
              </label>
              <div className="input-group">
                <input
                  type="text"
                  name="search"
                  className="form-control"
                  placeholder="chicken,onion,carrots"
                  value={search}
                  onChange={handleChange}
                ></input>
                <div className="input-group-append">
                  <button
                    type="submit"
                    className="input-group-text text-white bg-primary border-0"
                    onClick={handleSubmit}
                  >
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
