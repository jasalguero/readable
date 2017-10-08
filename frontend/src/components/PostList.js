import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import RightArrow from "react-icons/lib/md/link";
import SortDescIcon from "react-icons/lib/fa/sort-alpha-desc";
import SortAscIcon from "react-icons/lib/fa/sort-alpha-asc";

import "../styles/PostList.css";

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";

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
   * Handle the clicking on the headers to change the sorting field / direction
   * @param {*} target 
   */
  handleSort(target) {
    const field = target.getAttribute("data-field");

    if (field === this.state.field) {
      this.setState({ order: this.state.order === "asc" ? "desc" : "asc" });
    } else {
      this.setState({ field: field });
    }
  }

  /**
   * Generate dynamically the table headers
   */
  getTableHeader() {
    const fields = ["title", "timestamp", "author", "category", "voteScore"];

    return (
      <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
        <TableRow onCellClick={event => this.handleSort(event.target)}>
          {fields.map(field => (
            <TableHeaderColumn
              className={field === this.state.field ? "selected" : ""}
              data-field={field}
              key={field}
            >
              {field} {this.getHeaderIcon(field)}
            </TableHeaderColumn>
          ))}
        </TableRow>
      </TableHeader>
    );
  }

  render() {
    const posts = this.orderPosts();

    return (
      <div className="post-list">
        <h3>Posts</h3>
        <Table>
          {this.getTableHeader()}
          <TableBody displayRowCheckbox={false} showRowHover={true}>
            {posts.map(post => (
              <TableRow key={post.id}>
                <TableRowColumn>{post.title}</TableRowColumn>
                <TableRowColumn>
                  {new Date(post.timestamp).toLocaleDateString()} -{" "}
                  {new Date(post.timestamp).toLocaleTimeString()}
                </TableRowColumn>
                <TableRowColumn>{post.author}</TableRowColumn>
                <TableRowColumn>{post.category}</TableRowColumn>
                <TableRowColumn>{post.voteScore}</TableRowColumn>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <ul />
      </div>
    );
  }
}

export default PostList;
