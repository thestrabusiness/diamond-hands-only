import React, { FC, useState } from "react";
import { BigNumber, ethers } from "ethers";

import { useStoreHoldings } from "../hooks";
import Button from "./Button";
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
      <h2 className="text-center text-2xl mb-5">Store your Ether</h2>
      {currentBalance && (
        <div className="text-center mb-5">
          <div className="text-xl">Available Balance </div>
          <div>{formatEther(currentBalance)}</div>
        </div>
      )}
      <div className="flex flex-col text-center mb-2">
        <label>Amount</label>
        <div>
          <input
            type="number"
            value={amount}
            onChange={(e) => {
              setAmount(parseInt(e.target.value));
            }}
          />
        </div>
      </div>
      <div className="flex flex-col text-center mb-5">
        <label>Days to hold</label>
        <div>
          <input
            type="number"
            value={daysToHold}
            onChange={(e) => {
              setDaysToHold(parseInt(e.target.value));
            }}
          />
        </div>
      </div>
      <Button onClick={handleOnPressStore} disabled={disabled} label="Store" />
    </div>
  );
};

export default Store;
