import React, { Component } from "react";
import { Select, Form, Button } from "semantic-ui-react";

class PostForm extends Component {
  state = {
    title: "",
    category: null,
    body: "",
    author: ""
  };

  constructor(props) {
    super(props);
    const { post = {} } = props;

    this.state = {
      title: post.title || "",
      category: post.category || "",
      body: post.body || "",
      author: post.author || ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { post = {} } = nextProps;
    this.setState({
      title: post.title || "",
      category: post.category || "",
      body: post.body || "",
      author: post.author || ""
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const { post = {}, onSavePost } = this.props;
    const values = {
      title: this.state.title,
      body: this.state.body,
      category: this.state.category,
      author: this.state.author
    };

    if (post.id) {
      onSavePost({
        ...post,
        ...values
      });
    } else {
      onSavePost(values);
    }
  };

  handleSelectChange = (e, { name, value }) => this.setState({ [name]: value });

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  getCategoriesList() {
    return this.props.categories.map(c => ({
      key: c.path,
      value: c.name,
      text: c.name
    }));
  }

  render() {
    const categories = this.getCategoriesList();
    const { post = {} } = this.props;

    return (
      <Form
        className="comment-form"
        onSubmit={event => this.handleSubmit(event)}
      >
        <Form.Field>
          <label>Title</label>
          <input
            placeholder="Title"
            name="title"
            value={this.state.title}
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Category</label>
          <Select
            placeholder="Select a category"
            name="category"
            value={this.state.category}
            onChange={this.handleSelectChange}
            options={categories}
          />
        </Form.Field>
        <Form.Field>
          <label>Author</label>
          <input
            placeholder="Author"
            name="author"
            value={this.state.author}
            onChange={this.handleInputChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Body</label>
          <textarea
            placeholder="Body"
            name="body"
            value={this.state.body}
            onChange={this.handleInputChange}
          />
        </Form.Field>

        {/* ADD POST*/}
        <Button type="submit " primary>
          {post.id ? "Update" : "Create"}
        </Button>
      </Form>
    );
  }
}

export default PostForm;
