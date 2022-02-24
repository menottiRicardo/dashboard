import React from "react";

interface ButtonProps {
  color: string;
  text: string;
  textColor: string;
  border?: string;
  onClick: () => void;
}
const Button = ({
  color,
  text,
  textColor,
  border,
  onClick,
}: ButtonProps) => {
  return (
    <button
      className={`${color} ${textColor} shadow-md px-3 py-2 rounded-2xl font-medium flex items-center justify-center ${border}`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
