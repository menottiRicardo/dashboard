import React from "react";

const Button = ({ color, text, textColor, onClick }) => {
  return (
    <button
      className={`${color} ${textColor} shadow-md px-3 py-2 rounded-2xl font-medium`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
