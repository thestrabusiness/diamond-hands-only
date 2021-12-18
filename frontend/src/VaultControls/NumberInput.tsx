import React, { Dispatch, FC, SetStateAction } from "react";

interface NumberInputProps {
  label: string;
  value: number;
  onChange: Dispatch<SetStateAction<number>>;
  disabled: boolean;
}

const NumberInput: FC<NumberInputProps> = ({
  label,
  value,
  onChange,
  disabled,
}) => {
  return (
    <div className="flex flex-col text-center mb-2">
      <label className="mb-2">{label}</label>
      <div>
        <input
          className="rounded-lg text-slate-900 bg-red-100 p-2"
          disabled={disabled}
          type="number"
          value={value}
          onChange={(e) => {
            onChange(parseInt(e.target.value));
          }}
        />
      </div>
    </div>
  );
};

export default NumberInput;
