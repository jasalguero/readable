import React, { Component } from "react";
import serializeForm from "serialize-form";
import Modal from "react-modal";

class NewCommentModal extends Component {
  handleSubmit = (e) => {
    e.preventDefault();

    const values = serializeForm(e.target, { hash: true });
    console.log('values', values);
  };
  render() {
    const { isOpen } = this.props;

    return (
      <Modal isOpen={isOpen} onRequestClose={this.props.onRequestClose}>
        <form className="newsletter-form" to="/" onSubmit={this.handleSubmit}>
          <h1>Create Comment</h1>
          <div className="row">
            <div className="label">Author</div>
            <div className="value">
              <input type="text" name="author" />
            </div>
          </div>
          <div className="row">
            <div className="label">Body</div>
            <div className="value">
              <textarea type="text" name="body" />
            </div>
          </div>
        </form>
      </Modal>
    );
  }
}

export default NewCommentModal;
