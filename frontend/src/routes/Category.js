import React, { Component } from "react";

class CategoryRoute extends Component {
  render() {
    return (
      <div>
        <h1>Category {this.props.categoryId}</h1>
        <ul>
          identical to the default view, but filtered to only include posts with
          the selected category
        </ul>
      </div>
    );
  }
}

export default CategoryRoute;
