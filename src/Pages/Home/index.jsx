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
  const [next, setNext] = useState('')
  const [hasMore, setHasMore] = useState(true);
  useEffect(() => {
    async function getAssets() {
      const {data:{assets, next}}= await axios.get("https://api.opensea.io/api/v1/assets?limit=12");
      // const assets = mockdata;
      // const assets = await fetchNftData();
      setNext(next);
      setNftAssets(assets);
      // console.log("assets: ", assets);
    }

    getAssets();
  }, []);
  const handleClick = async () => {
    let params = {}
    if(address) params.asset_contract_address = address;
    if(tokenId) params.token_ids = tokenId;
    params.limit=12;
    const {data:{assets, next}} = await axios.get(`https://api.opensea.io/api/v1/assets`, {
      params: params,
    });
    setNext(next);
    setNftAssets(assets);
  };
  const getMoreNfts = async () => {
    let params = {}
    if(address) params.asset_contract_address = address;
    if(tokenId) params.token_ids = tokenId;
    params.limit=12;
    if(next) {
      params.cursor = next;
      const response = await axios.get(`https://api.opensea.io/api/v1/assets`, {
      params: params,
    });
    setNext(response.data.next)
    setNftAssets(nftAssets.concat(response.data.assets))
    }
  };
  console.log('hasMore: ', hasMore)

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
      <InfiniteScroll dataLength={nftAssets.length} next={getMoreNfts} hasMore={hasMore}>
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
