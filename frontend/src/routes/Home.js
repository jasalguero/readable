import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';
import CategoryList from "../components/CategoryList";
import PostList from "../components/PostList";

class HomeRoute extends Component {
  render() {
    return (
      <div className="home">
        <h1>Home</h1>
        <ul>
          <li>
            should have a control for changing the sort method for the list,
            including at minimum, order by voteScore and order by timestamp
          </li>
          <li>should have a control for adding a new post</li>
        </ul>

        {/* CATEGORIES */}
        <CategoryList categories={this.props.categories} />

         {/* POST LIST */}
         <PostList posts={this.props.posts} />
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
