export default function NamesAndPhoneNo({text, textType, textId, textPlaceHolder, onValueChange, ability}) {
  return (
    <>
      <label>{text}</label>
      <input type={textType} id={textId} placeholder={textPlaceHolder} onChange={onValueChange} required disabled={ability}/>
    </>
  );
}
