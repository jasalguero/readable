import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import PostList from "../components/PostList";
import { Button, Confirm } from "semantic-ui-react";
import { deletePost, votePost } from "../actions";

class CategoryRoute extends Component {
  state = {
    isDeletePostConfirmOpen: false,
    selectedPost: undefined
  };

  deletePost = () => {
    const { dispatch } = this.props;
    dispatch(deletePost(this.state.selectedPost));
    this.cancelDeletePost();
  };

  cancelDeletePost = () => {
    this.setState({
      isDeletePostConfirmOpen: false,
      selectedPost: undefined
    });
  };

  handleDeletePost = post => {
    this.setState({
      isDeletePostConfirmOpen: true,
      selectedPost: post
    });
  };

  handleVotePost = (post, option) => {
    const { dispatch } = this.props;
    dispatch(votePost(post, option));
  };

  render() {
    const { posts, category } = this.props;
    return (
      <div>
        <h1>Category {category}</h1>
        {/* POST LIST */}
        <PostList
          posts={posts}
          onDeletePost={this.handleDeletePost}
          onVotePost={this.handleVotePost}
        />

        {/* ADD POST*/}
        <Button primary>
          <Link to="/posts/new">Create Post</Link>
        </Button>

        {/* DELETE POST CONFIRMATION  */}
        <Confirm
          open={this.state.isDeletePostConfirmOpen}
          onCancel={this.cancelDeletePost}
          onConfirm={this.deletePost}
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
