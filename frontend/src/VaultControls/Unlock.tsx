import React, { FC } from "react";
import { formatEther } from "@ethersproject/units";

import UnlockButton from "./UnlockButton";
import { BigNumber } from "ethers";

const DATE_FORMAT = {
  weekday: "long" as const,
  year: "numeric" as const,
  month: "long" as const,
  day: "numeric" as const,
  timeZoneName: "short" as const,
};

interface UnlockProps {
  balance: BigNumber;
  unlockTimePosix: BigNumber;
}

const Unlock: FC<UnlockProps> = ({ balance, unlockTimePosix }) => {
  const unlockTime = new Date(
    unlockTimePosix.toNumber() * 1000
  ).toLocaleDateString("en-US", DATE_FORMAT);

  return (
    <div className="mx-2">
      <h2 className="text-center text-2xl mb-5 rounded-lg">Unlock</h2>
      <div className="text-center bg-gray-600 rounded-lg mb-2 py-5">
        <div className="mb-5">
          <div className="text-3xl mb-2">Stored Balance</div>
          <div className="text-xl">{formatEther(balance)}</div>
        </div>
        <div>
          <div className="text-3xl mb-2">Unlocks at</div>
          <div className="text-xl">{unlockTime}</div>
        </div>
      </div>
      <UnlockButton unlockTimePosix={unlockTimePosix} />
    </div>
  );
};

export default Unlock;
