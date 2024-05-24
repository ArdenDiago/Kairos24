import "./Button.css";

export default function Button({ text, clickHandler }) {
  return (
    <button class="button" onClick={clickHandler}>
      <p>{text}</p>
    </button>
  );
}
