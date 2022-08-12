import React, { useContext, useState, useEffect } from "react";
import { WalletWeb3Context } from "../../context/WalletWeb3Context";
import { AppBar } from "@mui/material";
import "./style.css";
import walletIcon from "../../assets/img/icons/wallet.svg";
import downTabIcon from "../../assets/img/icons/downTab.svg";
import { Container, TokenContainer } from "./styles";
import { Stack } from "@mui/material";
import { shortenAddress } from "../../utils/utils";
import Icon from "../Icon";
import { getBalance } from "../../utils/ethers";

const Header = () => {
  const isWrongNetwork = false;
  const [token, setToken] = useState({});
  const { connectWallet, wallet, signer, library } =
    useContext(WalletWeb3Context);
  console.log("library: ", library);
  useEffect(() => {
    async function fetchData() {
      if (!!wallet) {
        const balance = await getBalance(library, wallet);
        console.log("ethBalance: ", balance);
        setToken(balance);
      }
    }
    fetchData();
  }, [wallet]);
  return (
    <AppBar position="static">
      <Container>
        <>
          {!!wallet ? (
            <Stack direction="row" spacing={2}>
              <TokenContainer>
                USDC: {Number(token.usdcBalance).toFixed(4)}
              </TokenContainer>
              <TokenContainer>
                ETH: {Number(token.ethBalance).toFixed(4)}
              </TokenContainer>
            </Stack>
          ) : (
            <>&nbsp;</>
          )}
        </>
        <div onClick={connectWallet} className="header--button aic">
          {!!wallet ? (
            <div className="walletmenu-container aic">
              <Icon
                imgsrc={walletIcon}
                classnamestyle="walletmenu--icon-wallet aic "
              />
              {shortenAddress(wallet)}
              <Icon
                imgsrc={downTabIcon}
                classnamestyle="walletmenu--icon-tab aic "
              />
            </div>
          ) : (
            "Connect Wallet"
          )}
        </div>
      </Container>
    </AppBar>
  );
};

export default Header;
