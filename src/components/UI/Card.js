import React from "react";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${classes.card} ${props.className}`}>{props.children}</div>
  ); // we need to do this because we want to apply the classes from the Card component itself and also allow the classes that could come from the props. So we are merging our internal class with an external class.
};

export default Card;
