import Registration from "./components/Registration";
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LogIn from "./components/Login";
import MyListMain from "./components/MyListMain";
import ToDo from "./components/ToDo";

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={"/sign-in"}>
              My list
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-in"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/sign-up"}>
                    Sign up
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/my-list"}>
                    My list
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"/to-do"}>
                    To Do
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={LogIn} />
          <Route path="/sign-in" component={LogIn} />
          <Route path="/sign-up" component={Registration} />
          <Route path="/my-list" component={MyListMain} />
          <Route path="/to-do" component={ToDo} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
