export default function Gridbox({ testImg, text }) {
  return (
    <div className="card card-size">
      <img className="card-img-top" src={testImg} alt="Card image cap" />
      <div className="card-body">
        <h1>Event Name</h1>
        <p className="card-text">{text}</p>
      </div>
    </div>
  );
}
