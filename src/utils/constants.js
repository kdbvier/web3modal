export const tokenddress =
  process.env.REACT_APP_NETWORK_ENV === "mainnet" ? "" : "";
/////////////////////////////////////////////////////////////////////////////////////// //////////
export const mainnetNetwork = {
  chainId: `1`,
  chainName: "Ethereum mainnet",
  nativeCurrency: {
    name: "Ethereum",
    symbol: "ETH",
    decimals: 18,
  },
  rpcUrls: ["https://mainnet.infura.io/v3/4fd0ec96b78b4f3e936c7f9719914e9a"],
  blockExplorerUrls: ["https://etherscan.io"],
};

export const infuraId = "4fd0ec96b78b4f3e936c7f9719914e9a";
