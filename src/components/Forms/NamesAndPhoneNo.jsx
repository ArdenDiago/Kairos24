import React from "react";

export default function NamesAndPhoneNo({
  text,
  textType,
  inputId,
  inputName,
  textPlaceHolder,
  onValueChange,
  ability,
}) {
  return (
    <>
      <label>{text}</label>
      <input
        type={textType}
        id={inputId}
        name={inputName}
        placeholder={textPlaceHolder}
        onChange={onValueChange}
        required
        disabled={ability}
      />
    </>
  );
}
