import React from "react";
import { Home } from "./Home";
import { About } from "./About";
import {
  Switch,
  Route,
  Link,
} from "react-router-dom";
export const Navbar = () => {
  return(
    <>
      <div className="app__navbar">
          <div className="navbar__image">
              <img/>
          </div>
          <div className="navbar__menu">
            <div className="menu__list-item">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/portfolios">Portfolios</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/contact">Contact</Link>
            </div>
          </div>
          <div className="nav__footer">
            <span>© 2019 Do Tran</span>
          </div>
      </div>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
      </Switch>
    </>
  );
};
