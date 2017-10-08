import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import CategoryRoute from "./routes/Category";
import PostsRoute from "./routes/Posts";
import HomeRoute from "./routes/Home";
import NotFoundRoute from "./routes/NotFound";
import { fetchCategoriesAndPosts } from "./actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import "./App.css";

class App extends Component {
  componentWillMount() {
    this.loadInitialState();
  }

  loadInitialState() {
    const { dispatch } = this.props;
    dispatch(fetchCategoriesAndPosts()).then(() => console.log("data loaded"));
  }

  render() {
    return (
      <div className="Readable-App">
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
      </div>
    );
  }
}

export default withRouter(connect()(App));
