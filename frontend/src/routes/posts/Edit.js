import React, { Component } from "react";

class NewPostRoute extends Component {
  render() {
    return (
      <div className="home">
        <h1>Edit Post {this.props.postId}</h1>
        <ul>
          <li>should have a form to create new post or edit existing posts</li>
        </ul>
      </div>
    );
  }
}

export default NewPostRoute;
