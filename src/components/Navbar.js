import React, { useState } from "react";
import { Home } from "./Home";
import { About } from "./About";
import { Switch, Route, Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setOpen] = useState({
    navbar: 'default'
  });
  const hanldeOpen = () => setOpen({navbar: 'open'});
  const handleClose = () => setOpen({navbar: 'hide'});
  let className = 'app__navbar';
  switch(isOpen.navbar) {
    case 'open':
      className += ' show';
      break;
    case 'hide':
      className += ' hide';
      break;
    case 'default':
      className+= '';
      break;
  } 
  console.log(isOpen);
  return (
    <>
      <i
        onClick={hanldeOpen}
        className="fa fa-bars collapse"
        aria-hidden="true"
      >  
      </i>
        <div className={className}>
          <div className="navbar__image">
            <img />
          </div>
          <i className="fa fa-times-circle close-btn" onClick={handleClose}></i>
          <div className="navbar__menu">
            <div className="menu__list-item">
              <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
              <Link to={process.env.PUBLIC_URL + "/about"}>About</Link>
              <Link to={process.env.PUBLIC_URL + "/portfolios"}>
                Portfolios
              </Link>
              <Link to={process.env.PUBLIC_URL + "/resume"}>Resume</Link>
              <Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link>
            </div>
          </div>
          <div className="nav__footer">
            <span>© 2019 Do Tran</span>
          </div>
        </div>

      <Switch>
        <Route exact path={process.env.PUBLIC_URL + "/"}>
          <Home />
        </Route>
        <Route path={process.env.PUBLIC_URL + "/about"}>
          <About />
        </Route>
      </Switch>
    </>
  );
};
