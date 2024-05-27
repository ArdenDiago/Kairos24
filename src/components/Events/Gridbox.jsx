import React from "react";

export default function Gridbox({
  eventImg,
  text,
  eventName,
  time,
  venu,
  regAMT,
  codName,
}) {
  return (
    <div className="card card-size">
      <img className="card-img-top" src={eventImg} alt="Card image cap" />
      <div className="card-body">
        <h1>{eventName}</h1>
        <div className="time-venu">
          <div>{time}</div>
          <div>{venu}</div>
        </div>
        <ul className="card-text" dangerouslySetInnerHTML={{__html: text}}></ul>
        <h3>Registration Fees: {regAMT}</h3>
        <div className="card-contact">
          <div className="card-contact-left">
            {codName[0] && (
              <>
                <div>Name: {codName[0].name}</div>
                <div>+91 {codName[0].number}</div>
              </>
            )}
          </div>
          <div className="card-contact-right">
            {codName[1] && (
              <>
                <div>Name: {codName[1].name}</div>
                <div>+91 {codName[1].number}</div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
