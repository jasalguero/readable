import React, { Component } from "react";
import serializeForm from "form-serialize";
import Modal from "react-modal";
import { Form, Button } from "semantic-ui-react";

class CommentModal extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const { comment = {} } = this.props;
    const values = serializeForm(e.target, { hash: true });

    if (comment.id) {
      this.props.onSaveComment({
        ...comment,
        ...values
      });
    } else {
      this.props.onSaveComment(values);
    }
  };

  render() {
    const { isOpen, comment = {} } = this.props;

    return (
      <Modal isOpen={isOpen} onRequestClose={this.props.onRequestClose}>
        <h1>Create Comment</h1>
        <Form
          className="comment-form"
          onSubmit={event => this.handleSubmit(event)}
        >
          <Form.Field>
            <label>Author</label>
            <input
              placeholder="Author"
              name="author"
              defaultValue={comment.author}
            />
          </Form.Field>
          <Form.Field>
            <label>Body</label>
            <textarea
              placeholder="Body"
              name="body"
              defaultValue={comment.body}
            />
          </Form.Field>
          <div className="controls-row">
            <Button type="button" onClick={this.props.onRequestClose}>
              Cancel
            </Button>
            <Button type="submit" primary>
              {comment.id ? "Update" : "Create"}
            </Button>
          </div>
        </Form>
      </Modal>
    );
  }
}

export default CommentModal;
