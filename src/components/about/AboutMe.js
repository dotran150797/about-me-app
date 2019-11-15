import React from "react";
import "./style.scss";
import { jsxFragment } from "@babel/types";

export const AboutMe = () => {
  const info = [
    {
      key: 'Full Name',
      value: 'Do Tran'
    },
    {
      key: 'Age',
      value: '22 Years'
    },
    {
      key: 'Nationality',
      value: 'Viet Nam'
    },
    {
      key: 'Address',
      value: 'An Giang'
    },
    {
      key: 'Freelance',
      value: 'Available'
    }
  ];

  const listInfo = info.map( (item,index) => 
    <React.Fragment key={index}>
      <p>{item.key} :</p>
    </React.Fragment>
  );
  const listInfoDetails = info.map( (item,index) => 
    <React.Fragment key={index}>
      <p>{item.value}</p>
    </React.Fragment>
  );
  return (
    <div className="about-me">
      <div className="about-me__title">
        <h2>About Me</h2>
        <span>About Me</span>
      </div>
      <div className="about-me__main-content">
        <div className="about-me__image"></div>
        <div className="about-me__content">
          <h3>
            I am <span>Do Tran</span>
          </h3>
          <p>
            I am a frontend web developer. I can provide clean code and pixel
            perfect design. I also make website more & more interactive with web
            animations.
          </p>
          <div className="info">
            <div className="info-title">
              {listInfo}
            </div>
            <div className="info-details">
              {listInfoDetails}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
