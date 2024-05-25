import "./Button.css";

export default function Button({ text, clickHandler }) {
  return (
    <button className="buttonhome" onClick={clickHandler}>
      <p>{text}</p>
    </button>
  );
}
