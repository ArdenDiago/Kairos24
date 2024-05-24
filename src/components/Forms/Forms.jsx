import "./Forms.css";

import video from "./FormVideo.mp4";

import NamesAndPhoneNo from "./NamesAndPhoneNo";

import { useState } from "react";

export default function Forms() {
  const [name, setName] = useState("");
  const [phoneNO, setPhoneNO] = useState("");
  const [collegeName, setCollegeName] = useState("");

  function checker() {
    console.log(name, phoneNO, collegeName);
    console.log(name.length, phoneNO.length, collegeName.length);
  }

  return (
    <>
      <section className="myform">
        <video autoPlay muted loop id="video-bg">
          <source src={video} type="video/mp4" />
        </video>
        <div className="form-container">
          <div className="event-logo"></div>
          <div className="event-title">KAIROS 24</div>
          <div className="inputs">
            <NamesAndPhoneNo
              text="Name"
              textType="text"
              textId="name"
              textPlaceHolder="Name"
              onValueChange={(e) => setName(e.target.value)}
            />
            <NamesAndPhoneNo
              text="Phone No"
              textType="tel"
              textId="PhoneNo"
              textPlaceHolder="Phone No"
              onValueChange={(e) => setPhoneNO(e.target.value)}
            />
            <NamesAndPhoneNo
              text="Email"
              textType="text"
              textId="name"
              textPlaceHolder="College Name"
              onValueChange={(e) => setCollegeName(e.target.value)}
            />
            <br />
            <button type="submit" onClick={() => checker()}>
              Next
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
