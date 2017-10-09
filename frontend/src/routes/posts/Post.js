import React, { Component } from "react";
import { connect } from "react-redux";
import { loadComments, createComment, saveComment, deleteComment } from "../../actions";
import { Button } from "semantic-ui-react";

import PostDetails from "../../components/PostDetails";
import CommentList from "../../components/CommentList";
import CommentModal from "../../components/CommentModal";

class PostRoute extends Component {
  state = {
    isCommentModalOpen: false,
    selectedComment: undefined
  };

  componentWillMount() {
    const { dispatch, postId } = this.props;

    dispatch(loadComments(postId));
  }

  saveComment = comment => {
    const { dispatch, postId } = this.props;
    if (comment.id) {
      dispatch(saveComment(comment));
    } else {
      dispatch(
        createComment({
          ...comment,
          parentId: postId
        })
      );
    }

    this.closeModal();
  };

  closeModal() {
    this.setState({ isCommentModalOpen: false, selectedComment: undefined });
  }

  handleEditComment = comment => {
    this.setState({ selectedComment: comment, isCommentModalOpen: true });
  };

  handleDeleteComment = comment => {
    const { dispatch } = this.props;

    dispatch(deleteComment(comment));
  };

  render() {
    const { post, comments } = this.props;

    return (
      <div>
        <h1>Post {post.id}</h1>
        <ul>
          <li>should have controls to edit or delete the post</li>
        </ul>

        {/* POST DETAILS */}
        <PostDetails post={post} />

        {/* COMMENT LIST */}
        <CommentList
          comments={comments}
          onEditComment={this.handleEditComment}
          onDeleteComment={this.handleDeleteComment}
        />

        {/* ADD COMMENT*/}
        <div className="controls-row">
          <Button primary onClick={() => this.setState({isCommentModalOpen: true, selectedComment: undefined})}>
            Create Comment
          </Button>
        </div>

        <CommentModal
          isOpen={this.state.isCommentModalOpen}
          comment={this.state.selectedComment}
          onSaveComment={this.saveComment}
          onRequestClose={() => this.closeModal()}
        />
      </div>
    );
  }
}

function mapStateToProps({ posts = [], comments = [] }, { postId }) {
  return {
    post: posts.find(post => post.id === postId) || {},
    comments: comments.filter(c => !c.deleted).sort((c1, c2) => c1 - c2)
  };
}

export default connect(mapStateToProps)(PostRoute);
