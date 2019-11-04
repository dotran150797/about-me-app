import React from "react";
import "./style.scss";

export const AboutMe = () => {
  const info = [
    {
      key: 'Full Name',
      value: 'Do Tran'
    },
    {
      key: 'Age',
      value: '24 Years'
    },
    {
      key: 'Nationality',
      value: 'American'
    },
    {
      key: 'Address',
      value: '121 King Street, Melbourne, Victoria 3000, Australia'
    },
    {
      key: 'Freelance',
      value: 'Available'
    }
  ];

  const listInfo = info.map( (item,index) => 
    <tr key={index}>
      <th className='table--left'>{item.key} :</th>
      <th className='table--right'>{item.value}</th>
    </tr>
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
          <table className="about-me__info">
            <tbody>
              {
                listInfo
              }
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
