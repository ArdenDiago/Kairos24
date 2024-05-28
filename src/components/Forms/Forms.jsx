import React, { useState, useEffect } from "react";
import "./Forms.css";
import "./Events.css";
import svgFile from "./errorImg.svg";
import NamesAndPhoneNo from "./NamesAndPhoneNo";
import Event from "./Events";
import formVideo from "./JJKregisterMod.mp4";
import formVideo1 from "./JJKregisterMod.mp4";

export default function Forms() {
  // Participants Info
  const [name, setName] = useState("");
  const [phoneNO, setPhoneNO] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);

  // Set ReadOnly
  const [isReadOnly, setReadOnly] = useState(false);

  // Error Log
  const [logError, setLogError] = useState([]);

  // Event Updator
  const [selectedEvents, setSelectedEvents] = useState({
    coding: false,
    it_quiz: false,
    it_manager: false,
    treasure_hunt: false,
    bgmi: false,
    among_us: false,
    nfs: false,
    reverse_charades: false,
    group_dance: false,
    fashion_show: false,
  });

  const amountList = {
    coding: 200,
    it_quiz: 250,
    it_manager: 200,
    treasure_hunt: 400,
    bgmi: 250,
    among_us: 100,
    nfs: 100,
    reverse_charades: 300,
    group_dance: 600,
    fashion_show: 800,
  };

  function checker() {
    const errors = [];
    if (name.length === 0) {
      errors.push("Enter your name");
    }
    if ((phoneNO.length > 0 && phoneNO.length > 10) || phoneNO.length === 0) {
      errors.push("Enter a valid 10-digit Phone No");
    }
    if (isNaN(phoneNO)) {
      errors.push("Enter a valid Phone No");
    }
    if (collegeName.length === 0) {
      errors.push("Enter your college name");
    }
    setLogError(errors);
    if (errors.length === 0) {
      setReadOnly((isReadOnly) => !isReadOnly);
    }
  }

  function checkboxActive(e) {
    const { id, checked } = e.target;
    setSelectedEvents((prevEvents) => {
      const newEvents = {
        ...prevEvents,
        [id]: checked,
      };
      calculateTotalAmount(newEvents);
      return newEvents;
    });
  }

  function calculateTotalAmount(events) {
    const total = Object.keys(events)
      .filter((event) => events[event])
      .reduce((sum, event) => sum + amountList[event], 0);
    setTotalAmount(total);
  }

  function handleSubmit(e) {
    e.preventDefault();
    checker();
    if (logError.length === 0) {
      document.getElementById("myForm").submit();
    }
  }

  useEffect(() => {
    calculateTotalAmount(selectedEvents);
  }, [selectedEvents]);

  return (
    <>
      <section className="section-info">
        <section className="myform">
          <video autoPlay muted width="100%">
            <source src={formVideo1} type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <form
            id="myForm"
            action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSc0n_XvZRkXJWoUkYOY7REzZX7N8GMnpAJRzlHqISEAUOF2Kg/formResponse"
            method="POST"
          >
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
                  ability={isReadOnly}
                  name="entry.480650766"
                  value={name}
                />
                <NamesAndPhoneNo
                  text="Phone No"
                  textType="tel"
                  textId="phoneNo"
                  textPlaceHolder="Phone No"
                  onValueChange={(e) => setPhoneNO(e.target.value)}
                  ability={isReadOnly}
                  name="entry.484946341"
                  value={phoneNO}
                />
                <NamesAndPhoneNo
                  text="College Name"
                  textType="text"
                  textId="collegeName"
                  textPlaceHolder="College Name"
                  onValueChange={(e) => setCollegeName(e.target.value)}
                  ability={isReadOnly}
                  name="entry.1573106079"
                  value={collegeName}
                />

                <br />
                <div className="snackBar">
                  <div>
                    {logError.map((err, index) => (
                      <p key={index}>
                        <span>
                          <img src={svgFile} alt="Error Icon" />
                        </span>
                        {err}
                      </p>
                    ))}
                  </div>
                </div>
                <button className="fb" type="button" onClick={checker}>
                  {isReadOnly ? "Edit" : "Next"}
                </button>
              </div>
            </div>
            <input type="hidden" name="entry.480650766" value={name} />
            <input type="hidden" name="entry.484946341" value={phoneNO} />
            <input type="hidden" name="entry.1573106079" value={collegeName} />
            {Object.keys(selectedEvents).map((eventKey, index) => (
              <input
                type="hidden"
                name={
                  {
                    coding: "entry.1371549682",
                    it_quiz: "entry.844299347",
                    it_manager: "entry.1136504761",
                    treasure_hunt: "entry.712945024",
                    bgmi: "entry.578974792",
                    among_us: "entry.1491703766",
                    nfs: "entry.620680496",
                    reverse_charades: "entry.1925701189",
                    group_dance: "entry.1510089219",
                    fashion_show: "entry.1260383185",
                  }[eventKey]
                }
                value={selectedEvents[eventKey] ? "Yes" : "No"}
                key={index}
              />
            ))}
          </form>
        </section>
      </section>

      {isReadOnly && (
        <section className="section-info">
          <div className="vid">
            <div className="g2">
              <video className="video2Part" autoPlay muted width="100%">
                <source src={formVideo1} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <section className="gt">
                <h2 className="main-title">GROUP REGISTRATION</h2>
                <div className="container-form">
                  <Event
                    className="te"
                    category="TECHNICAL EVENTS"
                    eventID={[
                      "coding",
                      "it_quiz",
                      "it_manager",
                      "treasure_hunt",
                    ]}
                    handleChange={checkboxActive}
                  />
                  <Event
                    className="ge"
                    category="GAMING EVENTS"
                    eventID={["bgmi", "among_us", "nfs", "reverse_charades"]}
                    handleChange={checkboxActive}
                  />
                  <Event
                    className="ce"
                    category="CULTURAL EVENTS"
                    eventID={["group_dance", "fashion_show"]}
                    handleChange={checkboxActive}
                  />
                  <div
                    className="box"
                    style={{
                      background: "red",
                      color: "white",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      padding: "10px",
                      margin: "20px",
                    }}
                  >
                    <h2>
                      Payment will open on the 28<sup>th</sup> of May.
                    </h2>
                    <br />
                    <h5>We are sorry for the inconvenience</h5>
                    <p>
                      You can do the registration, we will contact you for the
                      payment.
                    </p>
                  </div>
                  <div className="box ">
                    <h2 style={{ color: "green" }}>
                      Please do enter the proper amount That is being displayed.
                    </h2>
                    <div className="my-payment">
                      <h1>Amount: {totalAmount}</h1>
                      <label>
                        <a
                          href="https://rzp.io/l/f0MEd2Ld6w"
                          style={{ color: "black" }}
                          target="blank"
                        >
                          Click To Pay
                        </a>
                      </label>
                    </div>
                  </div>
                  <div className="box">
                    <input type="file" id="myFile" name="filename" />
                  </div>
                  <button onClick={handleSubmit}>Submit</button>
                </div>
              </section>
            </div>
          </div>
        </section>
      )}
    </>
  );
}
