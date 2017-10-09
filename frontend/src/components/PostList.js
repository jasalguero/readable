import React, { Component } from "react";
import SortDescIcon from "react-icons/lib/fa/sort-alpha-desc";
import SortAscIcon from "react-icons/lib/fa/sort-alpha-asc";
import { Link } from "react-router-dom";
import DetailsIcon from "react-icons/lib/fa/file-text-o";
import EditIcon from "react-icons/lib/fa/pencil-square";
import DeleteIcon from "react-icons/lib/fa/trash";
import VoteIcon from "react-icons/lib/fa/thumbs-o-up";

import "../styles/PostList.css";

import { Table } from "semantic-ui-react";

class PostList extends Component {
  /**
   * State for sorting the table
   */
  state = {
    field: "voteScore",
    order: "desc"
  };

  /**
   * Sort the list of posts according to the selected ordering state
   */
  orderPosts() {
    const { posts } = this.props;
    let orderedPosts = posts.sort((post1, post2) => {
      let field1 = post1[this.state.field];
      let field2 = post2[this.state.field];
      if (field1 === field2) {
        return 0;
      }
      if (this.state.order === "asc") {
        return field1 < field2 ? -1 : 1;
      } else {
        return field1 < field2 ? 1 : -1;
      }
    });
    return orderedPosts;
  }

  /**
   * Return the sorting order for the header if the field is currently being used to sort
   * @param {String} field 
   */
  getHeaderIcon(field) {
    if (this.state.field === field) {
      if (this.state.order === "asc") {
        return <SortAscIcon size={20} />;
      } else {
        return <SortDescIcon size={20} />;
      }
    }
  }

  /**
   * Generate dynamically the table headers
   */
  getTableHeader() {
    const fields = ["title", "timestamp", "author", "category", "voteScore"];

    return (
      <Table.Header>
        <Table.Row>
          {fields.map(field => (
            <Table.HeaderCell
              className={field === this.state.field ? "selected" : ""}
              key={field}
              onClick={() => this.handleSort(field)}
            >
              {field === "timestamp" ? "date" : field}{" "}
              {this.getHeaderIcon(field)}
            </Table.HeaderCell>
          ))}
          <Table.HeaderCell>Details</Table.HeaderCell>
          <Table.HeaderCell>Vote</Table.HeaderCell>
          <Table.HeaderCell>Edit</Table.HeaderCell>
          <Table.HeaderCell>Delete</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
    );
  }

  /**
   * Handle the clicking on the headers to change the sorting field / direction
   * @param {*} target 
   */
  handleSort(field) {
    if (field === this.state.field) {
      this.setState({ order: this.state.order === "asc" ? "desc" : "asc" });
    } else {
      this.setState({ field: field });
    }
  }

  render() {
    const posts = this.orderPosts();
    const { onVotePost, onDeletePost } = this.props;

    return (
      <div className="post-list">
        <h3>Posts</h3>
        <Table>
          {this.getTableHeader()}
          <Table.Body>
            {posts.map(post => (
              <Table.Row key={post.id}>
                <Table.Cell>{post.title}</Table.Cell>
                <Table.Cell>
                  {new Date(post.timestamp).toLocaleDateString()} -{" "}
                  {new Date(post.timestamp).toLocaleTimeString()}
                </Table.Cell>
                <Table.Cell>{post.author}</Table.Cell>
                <Table.Cell>{post.category}</Table.Cell>
                <Table.Cell>{post.voteScore}</Table.Cell>
                <Table.Cell className="controls-cell">
                  <Link to={`/posts/${post.id}`}>
                    <DetailsIcon className="icon" size={20} />
                  </Link>
                </Table.Cell>
                <Table.Cell className="controls-cell">
                  <VoteIcon
                    className="icon"
                    size={20}
                    onClick={() => onVotePost(post)}
                  />
                </Table.Cell>
                <Table.Cell className="controls-cell">
                  <Link to={`/posts/${post.id}/edit`}>
                    <EditIcon className="icon" size={20} />
                  </Link>
                </Table.Cell>
                <Table.Cell className="controls-cell">
                  <DeleteIcon
                    className="icon"
                    size={20}
                    onClick={() => onDeletePost(post)}
                  />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
        <ul />
      </div>
    );
  }
}

export default PostList;
