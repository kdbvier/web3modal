import { ethers, Contract, utils } from "ethers";
import { USDCAddress } from "../constants/index";
import ERC20 from "../constants/abis/ERC20.json";

export const getBalance = async (library, address) => {
  const usdcReadContract = new Contract(USDCAddress, ERC20, library);
  console.log("address: ", usdcReadContract);
  const [ethBalance, usdcBalance] = await Promise.all([
    library.getBalance(address),
    usdcReadContract.balanceOf(address),
  ]);
  return {
    ethBalance: utils.formatEther(ethBalance),
    usdcBalance: utils.formatUnits(usdcBalance, 6),
  };
};
