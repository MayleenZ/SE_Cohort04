import React from "react";
import "./index.css";
import cardsArr from "./components/data.js";

//import just Card bc that is now a template for future cards 
import Card from "./components/Card";
// import Card2 from "./components/Card2";

export default function App(props) {
  // LOOP OVER THE ARRAY OF DATA AND CREATE A CARD FOR EACH OBJECT
  // ARRAY METHODS: .forEach, .filter, .reduce
  // .map( (element, indexPos))
  const cards = cardsArr.map((ele, index) => {
    return (
      <Card
        // img={ele.img}
        // title={ele.title}
        // text={ele.text}
        // url={ele.url}
        {...ele}
        //using the spread operator to pass the key value's down instead of writing it out (vvv useful)
        key={index}
        //shows the index placement of each el in array
      />
    );
  });

  console.log("this is cards", cards);

  return (
    <div className="App">
      <h1>Bootstrap Cards To Component Example</h1>
      <section className="cards">
        {cards}
        {/* <Card1 title = "Santorini"/>
      <Card2 /> */}
      </section>
    </div>
  );
}
