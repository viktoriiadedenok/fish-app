import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import Auth from "./components/Authentication";
import Registration from "./components/Registration";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container-md">
        <ul>
          <li>
            <Link className="text-muted" to="/">
              Main
            </Link>
          </li>
          <li>
            <Link className="text-muted" to="/auth">
              Login
            </Link>
          </li>
          <li>
            <Link className="text-muted" to="/registration">
              Registration
            </Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/">
            <PostForm />
            <Posts />
          </Route>
          <Route path="/auth">
            <Auth />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
