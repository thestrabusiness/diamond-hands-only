import React, { FC, useState } from "react";
import { BigNumber, ethers } from "ethers";

import NumberInput from "./NumberInput";
import Button from "./Button";
import { useStoreHoldings } from "../hooks";
import { formatEther } from "ethers/lib/utils";

interface StoreProps {
  currentBalance: BigNumber | undefined;
}

const Store: FC<StoreProps> = ({ currentBalance }) => {
  const { state, send: storeHoldings } = useStoreHoldings();
  const [amount, setAmount] = useState<number>(0);
  const [daysToHold, setDaysToHold] = useState<number>(0);

  const disabled = state.status === "Mining";

  const handleOnPressStore = () => {
    if (amount && daysToHold && amount > 0 && daysToHold > 0) {
      const value = ethers.utils.parseEther(amount.toString());

      storeHoldings(ethers.BigNumber.from(daysToHold), {
        value,
      });
    }
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-center text-2xl mb-5 rounded-lg">Store your Ether</h2>
      <div className="mx-3">
        {currentBalance && (
          <div className="bg-slate-600 rounded-lg text-center py-2 mb-2">
            <div className="text-xl">Available Balance </div>
            <div>{formatEther(currentBalance)}</div>
          </div>
        )}
        <div className="bg-slate-600 rounded-lg py-5 mb-2">
          <NumberInput
            disabled={disabled}
            value={amount}
            onChange={setAmount}
            label="Amount"
          />
          <NumberInput
            disabled={disabled}
            value={daysToHold}
            onChange={setDaysToHold}
            label="Days to hold"
          />
        </div>
        <Button
          onClick={handleOnPressStore}
          disabled={disabled}
          transactionStatus={state.status}
          label="Store"
        />
      </div>
    </div>
  );
};

export default Store;
