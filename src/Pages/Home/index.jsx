import { useEffect, useState, useContext } from "react";
import { providers, Contract, BigNumber } from "ethers";
import { Stack, TextField, Button, Grid } from "@mui/material";
import NFTItem from "../../components/NFTItem";
import InfiniteScroll from "react-infinite-scroll-component";
// import { fetchNftData } from "../../utils/query";
import axios from "axios";
import { Container } from "./styles";
import mockdata from "./mock.json";
import "react-toastify/dist/ReactToastify.css";
export const usdcDecimals = 6;

const Home = () => {
  const [address, setAddress] = useState("");
  const [tokenId, setTokenId] = useState("");
  const [nftAssets, setNftAssets] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    async function getAssets() {
      // const assets = await axios.get("https://api.opensea.io/api/v1/assets");
      const assets = mockdata;
      // const assets = await fetchNftData();
      setNftAssets(assets.slice(0, 12));
      console.log("assets: ", assets);
    }

    getAssets();
  }, []);
  console.log("nftAssets: ", nftAssets);
  const handleClick = async () => {
    const assets = await axios.get(`https://api.opensea.io/api/v1/assets`, {
      params: {
        asset_contract_address: address,
        token_ids: tokenId,
      },
    });
    setNftAssets(assets);
  };
  const getMoreNfts = async () => {
    console.log("getMore");
    const assets = mockdata;
    const newAssets = assets.slice(nftAssets.length, nftAssets.length + 12);
    setNftAssets(nftAssets.concat(newAssets));
  };
  return (
    <Container>
      <Stack direction="row" spacing={2}>
        <TextField
          label="Contract Address"
          value={address}
          variant="outlined"
          onChange={(e) => {
            setAddress(e.target.value);
          }}
        />
        <TextField
          label="token-id"
          variant="outlined"
          value={tokenId}
          type="number"
          onChange={(e) => {
            setTokenId(e.target.value);
          }}
        />
        <Button variant="contained" onClick={handleClick}>
          Find
        </Button>
      </Stack>
      <InfiniteScroll dataLength={40} next={getMoreNfts} hasMore={hasMore}>
        <Grid container spacing={2} marginTop="20px">
          {nftAssets.map((nft, index) => (
            <Grid item md={3} key={index}>
              <NFTItem nftInfo={nft} />
            </Grid>
          ))}
        </Grid>
      </InfiniteScroll>
    </Container>
  );
};

export default Home;
