export default function NamesAndPhoneNo({text, textType, textId, textPlaceHolder, onValueChange}) {
  return (
    <>
      <label>{text}</label>
      <input type={textType} id={textId} placeholder={textPlaceHolder} onChange={onValueChange}/>
    </>
  );
}
