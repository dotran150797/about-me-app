import React from "react";

export const Home = () => {
  return (
    <div class="app__main-content">
      <div className="home-content">
        <div className="home-content__hello">
          <h1>
            Hi I am <span>Do Tran</span>
          </h1>
        </div>
        <div className="home-content__intro">
          <span>
            I am a frontend web developer. I can provide clean code and pixel
            perfect design. I also make website more & more interactive with web
            animations.
          </span>
        </div>
        <ul className="home-content__social-icons">
          <li className="home-content__facebook">
            <a href="">
              <i className="fa fa-facebook"></i>
            </a>
          </li>
          <li className="home-content__instagram">
            <a href="">
              <i className="fa fa-instagram"></i>
            </a>
          </li>
          <li className="home-content__twitter">
            <a href="">
              <i className="fa fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
