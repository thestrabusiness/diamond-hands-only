import { useContractCall } from "@usedapp/core";
import {
  hodlVaultContractAddress,
  hodlVaultContractInterface,
} from "../contracts";

const useGetVaultDetails = () => {
  const [vaultDetails] =
    useContractCall({
      abi: hodlVaultContractInterface,
      address: hodlVaultContractAddress,
      method: "getVaultDetails",
      args: [],
    }) ?? [];

  return vaultDetails;
};

export default useGetVaultDetails;
