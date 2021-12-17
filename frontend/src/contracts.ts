import { ethers } from "ethers";
import { Contract } from "@ethersproject/contracts";
import diamondVaultJson from "./DiamondVault.json";

const diamondVaultContractAddress = process.env
  .REACT_APP_VAULT_CONTRACT_ADDRESS as string;

const diamondVaultContractInterface = new ethers.utils.Interface(
  diamondVaultJson.abi
);
const diamondVaultContract = new Contract(
  diamondVaultContractAddress,
  diamondVaultContractInterface
);

export {
  diamondVaultContract,
  diamondVaultContractAddress,
  diamondVaultContractInterface,
};
