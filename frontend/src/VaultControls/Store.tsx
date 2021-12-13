import React, { useState } from "react";
import { ethers } from "ethers";

import { useStoreHoldings } from "../hooks";
import Button from "./Button";

const Store = () => {
  const { state, send: storeHoldings } = useStoreHoldings();
  const [amount, setAmount] = useState<number>();
  const [daysToHold, setDaysToHold] = useState<number>();

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
    <>
      <h2 className="text-xl mb-5">Store your Ether</h2>
      <div className="mb-2">
        <label>Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => {
            setAmount(parseInt(e.target.value));
          }}
        />
      </div>
      <div className="mb-2">
        <label>Days to hold</label>
        <input
          type="number"
          value={daysToHold}
          onChange={(e) => {
            setDaysToHold(parseInt(e.target.value));
          }}
        />
      </div>
      <Button onClick={handleOnPressStore} disabled={disabled} label="Store" />
    </>
  );
};

export default Store;
