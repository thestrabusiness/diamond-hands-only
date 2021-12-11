import React, { useState } from "react";
import { ethers } from "ethers";
import { useEthers } from "@usedapp/core";

import { useStoreHoldings } from "./hooks";

const VaultControls = () => {
  const { account } = useEthers();
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

  if (account) {
    return (
      <div className="mt-10">
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
        <button onClick={handleOnPressStore} disabled={disabled}>
          Store
        </button>
      </div>
    );
  }

  return null;
};

export default VaultControls;
