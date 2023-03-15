// import React from "react";
//This is the parent , cardBody is the child
//Within parent we must render props to child, we passed CardBody the prop: title and gave the value "Santorini"
//Card1 is parent, cardimage is child

import CardBody from "./CardBody";
import CardImage from "./CardImage";

//create the component
const Card = (props) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <CardImage img={props.img}/>
      <CardBody title = {props.title} text={props.text} url={props.url}/>

    </div>
  );
};

//export the component
export default Card;
