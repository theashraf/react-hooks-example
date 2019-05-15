import React, { useState } from "react";

const useInput = (initialState = "") => {
  let [value, setValue] = useState(initialState);

  return {
    value,
    resetInput: () => setValue(""),
    onChange: e => setValue(e.target.value)
  };
};

const Form = ({ onSubmit }) => {
  const { resetInput, ...text } = useInput();
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        onSubmit(text.value);
        resetInput("");
      }}
    >
      <input {...text} />
    </form>
  );
};
export default Form;
