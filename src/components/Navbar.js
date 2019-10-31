import React from "react";

export const Navbar = () => {
  return(
    <div className="app__navbar">
        <div className="navbar__image">
            <img/>
        </div>
        <div className="navbar__menu">
          <div className="menu__list-item">
              <a href="/">Home</a>
              <a href="/">About</a>
              <a href="/">Portfolios</a> 
              <a href="/">Resume</a> 
              <a href="/">Contact</a> 
          </div>
        </div>
        <div class="nav__footer">
          <span>© 2019 Do Tran</span>
        </div>
    </div>
  );
};
