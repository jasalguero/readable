import React from "react";
import "../styles/PostDetails.css";

/**
 * POST
 * Attribute	Type	Description
 * id	String	Unique identifier
 * timestamp	Integer	Time created - default data tracks this in Unix time. You can use Date.now() to get this number
 * title	String	Post title
 * body	String	Post body
 * author	String	Post author
 * category	String	Should be one of the categories provided by the server
 * voteScore	Integer	Net votes the post has received (default: 1)
 * deleted	Boolean	Flag if post has been 'deleted' (inaccessible by the front end), (default: false) 
 * */

const PostDetails = ({ post = {} }) => {
  return (
    <div className="post-details">
      <div className="row">
        <div className="label">Title: </div>
        <div className="value">{post.title}</div>
      </div>
      <div className="row">
        <div className="label">Date: </div>
        <div className="value">
          {new Date(post.timestamp).toLocaleDateString()} -{" "}
          {new Date(post.timestamp).toLocaleTimeString()}
        </div>
      </div>
      <div className="row">
        <div className="label">Author: </div>
        <div className="value">{post.author}</div>
      </div>
      <div className="row">
        <div className="label">Body: </div>
        <div className="value">{post.body}</div>
      </div>
      <div className="row">
        <div className="label">Category: </div>
        <div className="value">{post.category}</div>
      </div>
      <div className="row">
        <div className="label">Vote Score: </div>
        <div className="value">{post.voteScore}</div>
      </div>
    </div>
  );
};

export default PostDetails;
