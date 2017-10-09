import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import CategoryRoute from "./routes/Category";
import PostsRoute from "./routes/Posts";
import HomeRoute from "./routes/Home";
import NotFoundRoute from "./routes/NotFound";
import { loadCategoriesAndPosts } from "./actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Container } from "semantic-ui-react";

import "./App.css";

class App extends Component {
  componentWillMount() {
    this.loadInitialState();
  }

  loadInitialState() {
    const { dispatch } = this.props;
    dispatch(loadCategoriesAndPosts());
  }

  render() {
    return (
      <div className="Readable-App">
        <Container>
          <Switch>
            <Route exact path="/" component={HomeRoute} />
            <Route
              exact
              path="/categories/:category"
              render={({ match }) => {
                return <CategoryRoute category={match.params.category} />;
              }}
            />
            <Route path="/posts" component={PostsRoute} />
            <Route component={NotFoundRoute} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default withRouter(connect()(App));
