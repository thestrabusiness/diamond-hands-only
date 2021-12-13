import { BigNumber } from "ethers";
import { useContractCall } from "@usedapp/core";

import {
  hodlVaultContractAddress,
  hodlVaultContractInterface,
} from "../contracts";

type GetVaultDetails = { balance: BigNumber; unlockTime: BigNumber };
const getVaultDetailsDefault = [[BigNumber.from(0), BigNumber.from(0)]];

const useGetVaultDetails = (account: string | null | undefined) => {
  const [[balance, unlockTime]] =
    useContractCall(
      account && {
        abi: hodlVaultContractInterface,
        address: hodlVaultContractAddress,
        method: "getVaultDetails",
        args: [account],
      }
    ) ?? getVaultDetailsDefault;

  return { balance, unlockTime } as GetVaultDetails;
};

export default useGetVaultDetails;
