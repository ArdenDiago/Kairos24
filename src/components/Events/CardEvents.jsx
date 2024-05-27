import React from "react";
import "./CardEvents.css";
import Gridbox from "./Gridbox";
import Img1 from "../../assets/Test/test.jpg";

const eventList = [
  {
    testImg: Img1,
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  },
  {
    testImg: Img1,
    text: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
  }
];

export default function Events() {
  return (
    <>
      <section className="my-Card-section">
        <h1>Events</h1>
        <div className="my-Card-div">
        {eventList.map((item, index) => (
          <Gridbox key={index} {...item} />
        ))}
        </div>
      </section>
    </>
  );
}
