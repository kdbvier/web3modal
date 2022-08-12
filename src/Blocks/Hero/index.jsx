import React from "react";
import Header from "../../components/Header";
import Sale from "./Sale";
import Info from "./Info";
import "./style.css";
// import Icon from "../../components/Icon";
import Lottie from "lottie-react";
import FenixFlying from "../../assets/animations/Fenix-Flying.json";
// import LogoMascot from "../../assets/img/brand/logoMascot.gif";
import FlamesLayer from "../../components/FlamesLayer";

const HeroSection = ({
  offsetY,
  setisWalletOptionsOpen,
  withdrawable,
  totalWithdrawn,
  allowance,
  approve,
  state,
  rate,
  startTime,
  endTime,
  claimTime,
  totalUsdc,
  totalDayl,
  usdcBalance,
  whitelisted,
  claimable,
  hardCap,
  softCap,
  addDaylToken,
  buyDayl,
  withdraw,
  claim,
  minPerWallet,
  maxPerWallet,
}) => {
  return (
    <div className="hero-container-header" id="presale">
      <Header
        setisWalletOptionsOpen={setisWalletOptionsOpen}
        offsetY={offsetY}
      />
      
    </div>
  );
};

export default HeroSection;
