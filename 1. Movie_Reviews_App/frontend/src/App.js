import React from "react";

//CHAPTER13
//below assist in creating different URL routes to diff components
import { Switch, Route, Link } from "react-router-dom";

//library of reusable frontend components
//help build UI components eg forms, buttons, icons
import "bootstrap/dist/css/bootstrap.min.css";


import { useState } from "react";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

//IMPORT COMPONENTS
import AddReview from "./components/add-review";
import MoviesList from "./components/movies-list";
import Movie from "./components/movie";
import Login from "./components/login";

function App() {
  const [user, setUser] = React.useState(null);

  async function login(user = null) {
    // default user to null
    setUser(user);
  }

  async function logout() {
    setUser(null);
  }

  return (
    <div className="App">

      {/* Hello Movie Reviews Frontend! */}

      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/"> Movie Reviews </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to={"/movies"}> Movies </Link>
            </Nav.Link>
            <Nav.Link href="#link">
              {user ? (
                <a onClick={logout}> Logout </a>
              ) : (
                <Link to={"/login"}> Login </Link>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path={["/", "/movies"]} component={MoviesList}></Route>
        <Route
          path="/movies/:id/review"
          render={(props) => <AddReview {...props} user={user} />}   
        ></Route>
        <Route
          path="/movies/:id/"
          render={(props) => <Movie {...props} user={user} />}
        ></Route>
        <Route
          path="/login"
          render={(props) => <Login {...props} login={login} />}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
