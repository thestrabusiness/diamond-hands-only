import { useContractFunction } from "@usedapp/core";
import { diamondVaultContract } from "../contracts";

const useStoreHoldings = () => {
  const { state, send } = useContractFunction(
    diamondVaultContract,
    "storeHoldings"
  );
  return { state, send };
};

export default useStoreHoldings;
