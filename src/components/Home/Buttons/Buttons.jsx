import "./Button.css";

export default function Button({
  classNameDefined,
  text,
  btnTarget,
}) {
  return (
    <button
      className={classNameDefined}
      onClick={btnTarget}
    >
      {text}
    </button>
  );
}
