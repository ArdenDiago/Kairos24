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
        <div class="form-container">
          <div class="event-logo"></div>
          <div class="event-title">KAIROS</div>
          <div class="inputs">
            <NamesAndPhoneNo
              text="Name"
              textType="text"
              textId="name"
              textPlaceHolder={name}
              onValueChange={(e) => setName(e.target.value)}
            />
            <NamesAndPhoneNo
              text="Phone No"
              textType="tel"
              textId="PhoneNo"
              textPlaceHolder={phoneNO}
              onValueChange={(e) => setPhoneNO(e.target.value)}
            />
            <NamesAndPhoneNo
              text="Name"
              textType="text"
              textId="name"
              textPlaceHolder={collegeName}
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
