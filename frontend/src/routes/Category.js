import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PostList from "../components/PostList";
import { Button } from "semantic-ui-react";

class CategoryRoute extends Component {
  render() {
    const { posts, category } = this.props;
    return (
      <div>
        <h1>Category {category}</h1>
        {/* POST LIST */}
        <PostList posts={posts} />

        {/* ADD POST*/}
        <Button primary>
          <Link to="posts/new">Create Post</Link>
        </Button>
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
