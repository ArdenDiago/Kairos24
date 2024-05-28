import "./Button.css";

export default function Button({ text, clickHandler, btnTarget }) {
  return (
    <button className="buttonhome">
      <a href={clickHandler} target={btnTarget} rel="noopener noreferrer">
        <p>{text}</p>
      </a>
    </button>
  );
}
