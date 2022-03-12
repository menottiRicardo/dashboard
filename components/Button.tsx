import React, { memo } from "react";

interface ButtonProps {
  color: string;
  text: string;
  textColor: string;
  border?: string;
  icon?: React.ReactFragment;
  onClick: () => void;
}
const Button = ({
  color,
  text,
  textColor,
  border,
  onClick,
  icon = '',
}: ButtonProps) => {
  return (
    <button
      className={`${color} ${textColor} shadow-md md:cursor-pointer cursor-auto px-3 py-2 rounded-2xl font-medium flex items-center justify-center ${border}`}
      onClick={onClick}
    >
      {text}
      {icon}
    </button>
  );
};

export default memo(Button);
