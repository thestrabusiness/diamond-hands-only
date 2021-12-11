import { useContractFunction } from "@usedapp/core";
import { hodlVaultContract } from "../contracts";

const useStoreHoldings = () => {
  const { state, send } = useContractFunction(
    hodlVaultContract,
    "storeHoldings"
  );
  return { state, send };
};

export default useStoreHoldings;
