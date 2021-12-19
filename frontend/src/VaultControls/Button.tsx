import React, { FC } from "react";
import { TransactionState } from "@usedapp/core";

interface ButtonProps {
  onClick: () => void;
  label: string;
  disabled: boolean;
  transactionStatus: TransactionState;
}

const Button: FC<ButtonProps> = ({
  transactionStatus,
  onClick,
  label,
  disabled,
}) => {
  const baseClass =
    "w-full text-md text-slate-800 self-center px-4 py-2 border border-slate-400 bg-red-300 rounded-lg";
  const disabledClass = disabled ? "text-slate-500 cursor-not-allowed" : "";
  const className = `${baseClass} ${disabledClass}`;
  const buttonLabel = transactionStatus === "Mining" ? "Pending..." : label;

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {buttonLabel}
    </button>
  );
};

export default Button;
