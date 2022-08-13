import React, { Suspense } from "react";
import { WalletWeb3Provider } from "./context/WalletWeb3Context";
import { Web3ReactProvider } from "@web3-react/core";
import AOS from "aos";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loader from "./components/Loader";
// import { getLibrary } from "./utils/web3React";
import Header from "./components/Header";
import { ThemeProvider } from "@mui/material/styles";
import { LightTheme } from "./style";
///////////////////////////////////////
const Home = React.lazy(() => import("./Pages/Home"));

//animation aos init
AOS.init();
const App = () => {
  return (
    // <Web3ReactProvider getLibrary={getLibrary}>
    <WalletWeb3Provider>
      <ThemeProvider theme={LightTheme}>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} exact />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </WalletWeb3Provider>
    // </Web3ReactProvider>
  );
};

export default App;
