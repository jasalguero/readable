import React from "react";
import DeleteIcon from "react-icons/lib/fa/trash";
import EditIcon from "react-icons/lib/fa/edit";
import UpVoteIcon from "react-icons/lib/fa/thumbs-o-up";
import DownVoteIcon from "react-icons/lib/fa/thumbs-o-down";

import { Table } from "semantic-ui-react";

/**
 * id	String	Unique identifier
 * parentId	String	id of the parent post
 * timestamp	Integer	Time created - default data tracks this in Unix time. You can use Date.now() to get this number
 * body	String	Comment body
 * author	String	Comment author
 * voteScore	Integer	Net votes the comment has received (default: 1)
 * deleted	Boolean	Flag if comment has been 'deleted' (inaccessible by the front end), (default: false)
 * parentDeleted	Boolean	Flag for when the the parent post was deleted, but the comment itself was not.
 * 
 * @param {*} param0 
 */

const CommentList = ({
  comments = [],
  onEditComment,
  onDeleteComment,
  onVoteComment
}) => {
  return (
    <div className="category-list">
      <h3>Comments</h3>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Author</Table.HeaderCell>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Body</Table.HeaderCell>
            <Table.HeaderCell>Score</Table.HeaderCell>
            <Table.HeaderCell className="controls-cell">Edit</Table.HeaderCell>
            <Table.HeaderCell className="controls-cell">Vote</Table.HeaderCell>
            <Table.HeaderCell className="controls-cell">
              Delete
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {comments.map(comment => (
            <Table.Row key={comment.id}>
              <Table.Cell>{comment.author}</Table.Cell>
              <Table.Cell>
                {new Date(comment.timestamp).toLocaleDateString()} -{" "}
                {new Date(comment.timestamp).toLocaleTimeString()}
              </Table.Cell>
              <Table.Cell>{comment.body}</Table.Cell>
              <Table.Cell>{comment.voteScore}</Table.Cell>
              <Table.Cell className="controls-cell">
                <EditIcon
                  size={20}
                  className="icon"
                  onClick={() => onEditComment(comment)}
                />
              </Table.Cell>
              <Table.Cell className="controls-cell">
                <UpVoteIcon
                  size={20}
                  className="icon"
                  onClick={() => onVoteComment(comment, "upVote")}
                />
                <DownVoteIcon
                  size={20}
                  className="icon"
                  onClick={() => onVoteComment(comment, "downVote")}
                />
              </Table.Cell>
              <Table.Cell className="controls-cell">
                <DeleteIcon
                  size={20}
                  className="icon delete"
                  onClick={() => onDeleteComment(comment)}
                />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
      <ul />
    </div>
  );
};

export default CommentList;
