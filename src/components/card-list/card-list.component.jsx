import React from "react";

import Card from "../card.component";

import "./card-list.styles.css";

const CardList = (props) => (
  <div className="card-list">
    {props.monsters.map(({ ...otherProp }) => (
      <Card {...otherProp}></Card>
    ))}
  </div>
);

export default CardList;
