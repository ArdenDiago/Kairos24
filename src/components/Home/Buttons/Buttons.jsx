import "./Button.css";

export default function Button({ text, clickHandler }) {
  return (
    <button className="button" onClick={clickHandler}>
      <p>{text}</p>
    </button>
  );
}
