import React, { FC } from "react";

interface ButtonProps {
  onClick: () => void;
  label: string;
  disabled: boolean;
}

const Button: FC<ButtonProps> = ({ onClick, label, disabled }) => {
  return (
    <button
      className="text-md self-center px-4 py-2 border border-gray-400 rounded-full"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
