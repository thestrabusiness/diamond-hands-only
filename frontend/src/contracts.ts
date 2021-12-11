import { ethers } from "ethers";
import { Contract } from "@ethersproject/contracts";
import hodlVaultJson from "./HodlVault.json";

const hodlVaultContractAddress = "0xa513E6E4b8f2a923D98304ec87F64353C4D5C853";
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
