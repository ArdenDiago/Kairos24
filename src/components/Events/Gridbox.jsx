export default function Gridbox({ testImg, text }) {
  return (
    <div className="card card-size">
      <img className="card-img-top" src={testImg} alt="Card image cap" />
      <div className="card-body">
        <h1>Event Name</h1>
        <div className="time-venus">
          <div>10:00 AM</div>
          <div>Main auditorium</div>
        </div>
        <h3>Registration AMT: 150</h3>
        <p className="card-text">{text}</p>
        <div className="card-contact">
          <div className="card-contact-left">
            <div>Name</div>
            <div>7208715575</div>
          </div>
          <div>
          <div>Name</div>
            <div>7208715575</div>

          </div>
        </div>
      </div>
    </div>
  );
}
