import React from "react";
import "./CardEvents.css";
import Gridbox from "./Gridbox";
import Img1 from "../../assets/Test/test.jpg";

const eventList = [
  {
    eventImg: Img1,
    eventName: "Coding",
    time: "10:00 AM",
    venu: "Main auditorium",
    regAMT: "500",
    codName: [
      { name: "Dharshit", number: "2111111111" },
      { name: "Jithandar", number: "2111111111" },
    ],
    text:'<li>Maximum 3 teams from a college can take part</li><li>Each team must contain 4 players must</li><li>Cheating or emulators are strictly prohibited. If any squad is found using them , they will be immediately disqualified</li><li>GFX tool and 3rd party apps like games boosters are prohibited</li><li>participants must bring their own device and should use their own cellular data only mobile phones allowed, tablets are prohibited</li>',
  },
  {
    eventImg: Img1,
    eventName: "Coding",
    time: "10:00 AM",
    venu: "Main auditorium",
    regAMT: "500",
    codName: [
      { name: "Dharshit", number: "2111111111" },
      { name: "Jithandar", number: "2111111111" },
    ],
    text: '<li>Maximum 3 teams from a college can take part</li><li>Each team must contain 4 players must</li><li>Cheating or emulators are strictly prohibited. If any squad is found using them , they will be immediately disqualified</li><li>GFX tool and 3rd party apps like games boosters are prohibited</li><li>participants must bring their own device and should use their own cellular data only mobile phones allowed, tablets are prohibited</li>',
  },
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
