import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import PostList from "../components/PostList";
import RaisedButton from "material-ui/RaisedButton";
import AddPostIcon from "react-icons/lib/fa/pencil-square";

class CategoryRoute extends Component {
  render() {
    const { posts, category } = this.props;
    return (
      <div>
        <h1>Category {category}</h1>
        {/* POST LIST */}
        <PostList posts={posts} />

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

function mapStateToProps({ posts }, { category }) {
  return {
    posts: posts.filter(post => post.category === category),
    category
  };
}

export default connect(mapStateToProps)(CategoryRoute);
