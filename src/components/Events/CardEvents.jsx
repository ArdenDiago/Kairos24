import React from "react";
import "./CardEvents.css";
import Gridbox from "./Gridbox";

import {eventList} from './EventsData.js';

export default function Events() {
  return (
    <>
      <section id="Events" className="my-Card-section">
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
