import React from "react";

function Input({ type, placeholder, name, value, onChange, color }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
}

export default Input;
