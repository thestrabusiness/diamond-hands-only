import React, { FC } from "react";

interface ButtonProps {
  onClick: () => void;
  label: string;
  disabled: boolean;
}

const Button: FC<ButtonProps> = ({ onClick, label, disabled }) => {
  const baseClass =
    "text-md text-slate-800 self-center px-4 py-2 border border-slate-400 bg-red-100 rounded-full";
  const disabledClass = disabled ? "text-slate-500 cursor-not-allowed" : "";
  const className = `${baseClass} ${disabledClass}`;

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
