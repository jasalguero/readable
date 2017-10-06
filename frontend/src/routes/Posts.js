import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NewPostRoute from "./posts/New";
import PostRoute from "./posts/Post";
import EditPostRoute from "./posts/Edit";

class PostsRoute extends Component {
  render() {
    return (
      <Switch>
        <Route path="/posts/new" exact component={NewPostRoute} />
        <Route
          path="/posts/:postId/edit"
          exact
          render={({ match }) => {
            return <EditPostRoute postId={match.params.postId} />;
          }}
        />
        <Route
          path="/posts/:postId"
          exact
          render={({ match }) => {
            return <PostRoute postId={match.params.postId} />;
          }}
        />
      </Switch>
    );
  }
}

export default PostsRoute;
