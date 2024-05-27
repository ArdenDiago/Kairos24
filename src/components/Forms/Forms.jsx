import "./Forms.css";
import "./Events.css";

import svgFile from "./errorImg.svg";

import NamesAndPhoneNo from "./NamesAndPhoneNo";
import Event from "./Events";

import { useState } from "react";

export default function Forms() {
  // Participants Info
  const [name, setName] = useState("");
  const [phoneNO, setPhoneNO] = useState("");
  const [collegeName, setCollegeName] = useState("");

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
    setSelectedEvents((prevEvents) => ({
      ...prevEvents,
      [id]: checked,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    checker();
    if (logError.length === 0) {
      document.getElementById("myForm").submit();
    }
  }

  return (
    <>
      <section className="section-info">
        <section className="myform">
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

      <section className="section-info group-registration">
        <div className="vid">
          <div className="g2">
            <section className="gt">
              <h2 className="main-title">GROUP REGISTRATION</h2>
              <div className="container-form">
                <Event
                  className="te"
                  category="TECHNICAL EVENTS"
                  eventID={["coding", "it_quiz", "it_manager", "treasure_hunt"]}
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
                <button onClick={handleSubmit}>Submit</button>
              </div>
            </section>
          </div>
        </div>
      </section>
    </>
  );
}