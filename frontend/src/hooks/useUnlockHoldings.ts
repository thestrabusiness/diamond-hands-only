import { useContractFunction } from "@usedapp/core";
import { hodlVaultContract } from "../contracts";

const useUnlockHoldings = () => {
  const { state, send } = useContractFunction(
    hodlVaultContract,
    "unlockHoldings"
  );
  return { state, send };
};

export default useUnlockHoldings;
