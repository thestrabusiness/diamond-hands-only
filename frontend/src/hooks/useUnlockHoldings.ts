import { useContractFunction } from "@usedapp/core";
import { diamondVaultContract } from "../contracts";

const useUnlockHoldings = () => {
  const { state, send } = useContractFunction(
    diamondVaultContract,
    "unlockHoldings"
  );
  return { state, send };
};

export default useUnlockHoldings;
