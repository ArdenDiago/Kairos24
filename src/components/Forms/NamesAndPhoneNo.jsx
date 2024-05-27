export default function NamesAndPhoneNo({
  text,
  textType,
  textId,
  textPlaceHolder,
  onValueChange,
  ability,
  name,
  value,
}) {
  return (
    <>
      <label>{text}</label>
      <input
        type={textType}
        id={textId}
        name={name}
        placeholder={textPlaceHolder}
        onChange={onValueChange}
        required
        disabled={ability}
        value={value}
      />
    </>
  );
}