import { ethers } from "ethers";
import { Contract } from "@ethersproject/contracts";
import hodlVaultJson from "./HodlVault.json";

const hodlVaultContractAddress = "0xA51c1fc2f0D1a1b8494Ed1FE312d7C3a78Ed91C0";
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
