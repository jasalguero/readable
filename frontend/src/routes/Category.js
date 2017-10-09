import React, { Component } from "react";
import PostRoute from "./posts/Post";
import EditPostRoute from "./posts/Edit";
import CategoryDetail from "./CategoryDetail";
import { Route, Switch } from "react-router-dom";
import NotFoundRoute from "./NotFound";

class CategoryRoute extends Component {
  render() {
    return (
      <Switch>
        <Route
          path="/:category"
          exact
          render={({ match }) => {
            return <CategoryDetail category={this.props.category} />;
          }}
        />
        <Route
          path="/:category/:postId/edit"
          exact
          render={({ match }) => {
            return <EditPostRoute postId={match.params.postId} />;
          }}
        />
        <Route
          path="/:category/:postId"
          exact
          render={({ match }) => {
            return <PostRoute postId={match.params.postId} />;
          }}
        />
        <Route component={NotFoundRoute} />
      </Switch>
    );
  }
}

export default CategoryRoute;
