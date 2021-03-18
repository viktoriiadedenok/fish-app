import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import Registration from "./components/Registration";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LogIn from "./components/Login";
import { MDBBadge } from "mdbreact";
import MyListMain from "./components/MyListMain";

function App() {
  return (
    <Router>
      <div className="container-md mx-auto">
        {/* <Link className="text-muted mr-3" to="/">
            Main
          </Link> */}
        <h5 className="text-right mt-3">
          {" "}
          <Link className="text-muted" to="/">
            Log in
          </Link>
        </h5>
        {/* <Link className="text-muted" to="/registration">
            Registration
          </Link> */}
        <Switch>
          <Route exact path="/">
            <LogIn />
          </Route>
          <Route path="/list">
            <MyListMain />
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
