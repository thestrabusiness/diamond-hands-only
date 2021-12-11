import { ethers } from "ethers";
import { Contract } from "@ethersproject/contracts";
import hodlVaultJson from "./HodlVault.json";

const hodlVaultContractAddress = process.env
  .REACT_APP_VAULT_CONTRACT_ADDRESS as string;

const hodlVaultContractInterface = new ethers.utils.Interface(
  hodlVaultJson.abi
);
const hodlVaultContract = new Contract(
  hodlVaultContractAddress,
  hodlVaultContractInterface
);

export {
  hodlVaultContract,
  hodlVaultContractAddress,
  hodlVaultContractInterface,
};
