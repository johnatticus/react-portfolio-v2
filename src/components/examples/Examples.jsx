import "./examples.css";
// import React from 'react'

const Examples = ({img,link}) => {
  return (
    <div className="p">
      <div className="p-browser">
        <div className="p-circle-r"></div>
        <div className="p-circle-y"></div>
        <div className="p-circle-g"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
      </a>
    </div>
  );
};

export default Examples;
