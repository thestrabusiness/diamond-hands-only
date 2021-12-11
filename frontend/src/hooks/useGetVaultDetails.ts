import { BigNumber } from "ethers";
import { useContractCall } from "@usedapp/core";

import {
  hodlVaultContractAddress,
  hodlVaultContractInterface,
} from "../contracts";

type GetVaultDetails = { balance: BigNumber; unlockTime: BigNumber };
const getVaultDetailsDefault = [[BigNumber.from(0), BigNumber.from(0)]];

const useGetVaultDetails = () => {
  const [[balance, unlockTime]] =
    useContractCall({
      abi: hodlVaultContractInterface,
      address: hodlVaultContractAddress,
      method: "getVaultDetails",
      args: [],
    }) ?? getVaultDetailsDefault;

  return { balance, unlockTime } as GetVaultDetails;
};

export default useGetVaultDetails;
