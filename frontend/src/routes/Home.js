import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

import CategoryList from "../components/CategoryList";
import PostList from "../components/PostList";

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
        <Button primary>
          <Link to="posts/new">Create Post</Link>
        </Button>
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
