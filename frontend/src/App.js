import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import CategoryRoute from "./routes/Category";
import HomeRoute from "./routes/Home";
import NotFoundRoute from "./routes/NotFound";
import NewPostRoute from "./routes/posts/New";
import { loadCategoriesAndPosts } from "./actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Container } from "semantic-ui-react";
import Header from "./components/Header";

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
        <Header />
        <Container className="main-container">
          <Switch>
            <Route exact path="/" component={HomeRoute} />
            <Route path="/posts/new" exact component={NewPostRoute} />
            <Route
              path="/:category"
              render={({ match }) => {
                return <CategoryRoute category={match.params.category} />;
              }}
            />
            <Route component={NotFoundRoute} />
          </Switch>
        </Container>
      </div>
    );
  }
}

export default withRouter(connect()(App));
