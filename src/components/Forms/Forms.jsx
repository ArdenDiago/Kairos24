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
  // Technical Events
  const [checkCoding, setCoding] = useState(false);
  const [checkIT_QUIZ, setIT_QUIZ] = useState(false);
  const [checkIT_MANAGER, setIT_MANAGER] = useState(false);
  const [checkTREASURE_HUNT, setTREASURE_HUNT] = useState(false);

  // Gaming Events
  const [checkBGMI, setBGMI] = useState(false);
  const [checkAMONG_US, setAMONG_US] = useState(false);
  const [checkNEED_FOR_SPEED, setNEED_FOR_SPEED] = useState(false);
  const [checkREVERSE_CHARADES, setREVERSE_CHARADES] = useState(false);

  // Cultural Events
  const [checkGROUP_DANCE, setGROUP_DANCE] = useState(false);
  const [checkFASHION_SHOW, setFASHION_SHOW] = useState(false);

  function checker(e) {
    e.preventDefault();
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
    console.log(e.target.id);
  }

  return (
    <>
      <form

        id="myForm"
        action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSd3afF6ukRTOUg2oHHJSGGaEVGqOCKfl_TNjvzolFH0dpOfHg/formResponse"
        method="POST"
      >
        <section className="section-info">
          <section className="myform">
            <div className="form-container">
              <div className="event-logo"></div>
              <div className="event-title">KAIROS 24</div>
              <div className="inputs">
                <NamesAndPhoneNo
                  text="Name"
                  textType="text"
                  inputId="name"
                  inputName="entry.1868876427"
                  textPlaceHolder="Name"
                  onValueChange={(e) => setName(e.target.value)}
                  ability={isReadOnly}
                />
                <NamesAndPhoneNo
                  text="Phone No"
                  textType="tel"
                  inputId="phoneNo"
                  inputName="entry.1706755647"
                  textPlaceHolder="Phone No"
                  onValueChange={(e) => setPhoneNO(e.target.value)}
                  ability={isReadOnly}
                />
                <NamesAndPhoneNo
                  text="College Name"
                  textType="text"
                  inputId="collegeName"
                  inputName="entry.498382195"
                  textPlaceHolder="College Name"
                  onValueChange={(e) => setCollegeName(e.target.value)}
                  ability={isReadOnly}
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
                <button className="fb" type="submit" onClick={checker}>
                  {isReadOnly ? "Edit" : "Next"}
                </button>
              </div>
            </div>
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
                    eventID={[
                      "Coding",
                      "IT QUIZ",
                      "IT MANAGER",
                      "TREASURE HUNT",
                    ]}
                    handleChange={(e) => checkboxActive(e)}
                  />
                  <Event
                    className="ge"
                    category="GAMING EVENTS"
                    eventID={[
                      "BGMI",
                      "AMONG US",
                      "NEED FOR SPEED",
                      "REVERSE CHARADES",
                    ]}
                    handleChange={(e) => checkboxActive(e)}
                  />
                  <Event
                    className="ce"
                    category="CULTURAL EVENTS"
                    eventID={["GROUP DANCE", "FASHION SHOW"]}
                    handleChange={(e) => checkboxActive(e)}
                    
                  />
                  <button className="sf" type="submit" onClick={checker}>
                    Submit
                </button>
                  
                </div>
              </section>
            </div>
          </div>
        </section>
      </form>
    </>
  );
}
