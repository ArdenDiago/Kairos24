import React from "react";
import "./CardEvents.css";
import Gridbox from "./Gridbox";
import Img1 from "../../assets/EventImages/coding.jpeg";
import Img2 from "../../assets/EventImages/itQuiz.jpg";
import Img3 from "../../assets/EventImages/itManager.jpg";
import Img4 from "../../assets/EventImages/treasureHunt.jpg";
import Img5 from "../../assets/EventImages/bgmi.jpg";
import Img6 from "../../assets/EventImages/amoungUs.jpg";
import Img7 from "../../assets/EventImages/nfs.jpg";
import Img8 from "../../assets/EventImages/nfs.jpg";
import Img9 from "../../assets/EventImages/groupDance.jpg";
import Img10 from "../../assets/EventImages/nfs.jpg";





const eventList = [
  {
    eventImg: Img1,
    eventName: "Coding",
    time: "10:30 AM",
    venu: "Lab 2",
    regAMT: "200",
    codName: [
      { name: "Dharshith", number: "9037200857" },
      { name: "Jeetandar", number: "96639266665" },
    ],
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    eventImg: Img2,
    eventName: "IT Quiz",
    time: "10:30 AM",
    venu: "Mini Auditorium",
    regAMT: "250",
    codName: [
      { name: "Rakshitha", number: "8050327122" },
      { name: "Dhanush", number: "8217254183" },
    ],
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    eventImg: Img3,
    eventName: "IT Manager",
    time: "10:00 AM",
    venu: "Mini Auditorium",
    regAMT: "200",
    codName: [
      { name: "Anusha", number: "6364314942" },
      { name: "Rizwana", number: "6360432178" },
    ],
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    eventImg: Img4,
    eventName: "Treasure Hunt",
    time: "10:00 AM",
    venu: "Basketball Court",
    regAMT: "400",
    codName: [
      { name: "Dharshit", number: "2111111111" },
      { name: "Jithandar", number: "2111111111" },
    ],
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    eventImg: Img5,
    eventName: "BGMI",
    time: "11:00 AM",
    venu: "Room 107",
    regAMT: "250",
    codName: [
      { name: "Simran", number: "9863961303" },
      { name: "Zayed", number: "6362675597" },
    ],
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    eventImg: Img6,
    eventName: "Among Us",
    time: "10:30 AM",
    venu: "Business Lab",
    regAMT: "100",
    codName: [
      { name: "Noufal", number: "9342059498" },
      { name: "Alita", number: "7019527086" },
    ],
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    eventImg: Img7,
    eventName: "Need For Speed ",
    time: "10:00 AM",
    venu: "Lab 1",
    regAMT: "100",
    codName: [
      { name: "Dyju", number: "8867322759" },
      { name: "Ajai Das", number: "8281460874" },
    ],
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    eventImg: Img1,
    eventName: "Reverse Charades",
    time: "01:00 PM",
    venu: "Main Auditorium",
    regAMT: "300",
    codName: [
      { name: "Rohini", number: "8792564304" },
      { name: "Jeel", number: "9316423550" },
    ],
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    eventImg: Img9,
    eventName: "Group Dance",
    time: "02:00 PM",
    venu: "Main Auditorium",
    regAMT: "600",
    codName: [
      { name: "Lisha", number: "7676844960" },
      { name: "Aishwarya Baby", number: "9380185770" },
    ],
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    eventImg: Img1,
    eventName: "Fashion Show",
    time: "03:00 PM",
    venu: "Main Auditorium",
    regAMT: "800",
    codName: [
      { name: "Krishna", number: "8848648242" },
      { name: "Nandana", number: "8431996352" },
    ],
    text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
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
