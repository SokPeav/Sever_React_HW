import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Home from "../Menu/Home";
import About from "../Menu/About";
import Error from "../Menu/Error";
import AdminPage from "../Components/AdminPage";
import PrivateRoute from "../Auth/PrivateRoute";
import LoginPage from "../Auth/Login";
import ViewDetail from "../Menu/ViewDetail";
function Routing() {
  return (
    <Router>
      <AllRoute></AllRoute>
      <Switch>
        <Route exact path={["/", "/home"]} children={<Home />}></Route>
        <Route path="/about" children={<About />} />
        <PrivateRoute path="/admin" children={<AdminPage />}></PrivateRoute>
        <Route path="/login" children={<LoginPage></LoginPage>}></Route>
        <Route path="/detail/:id" children={<ViewDetail></ViewDetail>} />
        <Route children={<Error />} />
      </Switch>
    </Router>
  );
}
function AllRoute() {
  return (
    <nav class="navbar white navbar-expand-lg navbar-light bg-dark">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto white">
          <li class="nav-item ml-5 pr-5 bg-danger">
            <Link className="nav-link" to="/home">
              Home
            </Link>
          </li>
          <li class="nav-item ml-5 pr-5 bg-danger">
            <Link class="nav-link" to="/about">
              About
            </Link>
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <Link to="/admin" class="btn btn-outline-success my-2 my-sm-0">
            Login
          </Link>
        </form>
      </div>
    </nav>
  );
}

export default Routing;
