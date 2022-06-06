import React from 'react'
import "./examplesList.css";
import Examples from "../examples/Examples"
import { examples } from "../../data";

export const ExamplesList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Projects</h1>
        <p className="pl-desc">
          Here are some examples of what I've been working on...
        </p>
      </div>
      <div className="pl-list">
        {examples.map((item) => (
          <Examples key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ExamplesList;
