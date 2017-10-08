import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import RaisedButton from "material-ui/RaisedButton";

import CategoryList from "../components/CategoryList";
import PostList from "../components/PostList";
import AddPostIcon from "react-icons/lib/fa/pencil-square";

class HomeRoute extends Component {
  render() {
    return (
      <div className="home">
        <h1>Home</h1>

        {/* CATEGORIES */}
        <CategoryList categories={this.props.categories} />

        {/* POST LIST */}
        <PostList posts={this.props.posts} />

        {/* ADD POST*/}
        <RaisedButton
          containerElement={<Link to="posts/new" />}
          label="Create Post"
          primary={true}
          icon={<AddPostIcon />}
        />
      </div>
    );
  }
}

function mapStateToProps({ categories, posts }) {
  return {
    categories,
    posts
  };
}

export default withRouter(connect(mapStateToProps)(HomeRoute));
