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
        <div className="time-venus">
          <div>{time}</div>
          <div>{venu}</div>
        </div>
        <h3>Registration AMT: {regAMT}</h3>
        <p className="card-text">{text}</p>
        <div className="card-contact">
          <div className="card-contact-left">
            <div>Name {codName[0].name}</div>
            <div>+91 {codName[0].number}</div>
          </div>
          <div>
            <div>Name {codName[1].name}</div>
            <div>+91 {codName[1].number}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
