import { useEffect, useState, useContext } from "react";
import { providers, Contract, BigNumber } from "ethers";
import {Stack, TextField, Button } from '@mui/material'
import axios from 'axios'
import {Container} from './styles'
import "react-toastify/dist/ReactToastify.css";
export const usdcDecimals = 6;



const Home = () => {
  const [address, setAddress] = useState('')
  const [tokenId, setTokenId] = useState('')
  useEffect(()=>{
    async function getAssets() {
      const assets = await axios.get("https://api.opensea.io/api/v1/assets")
      console.log('assets: ', assets)
    }
    getAssets()
  },[])
  const handleClick = async() => {
    let findKey = ''
    if(address) findKey = 'asset_contract_address=' + address
    if(tokenId) findKey = findKey+'&token_ids=' + tokenId
    const assets = await axios.get(`https://api.opensea.io/api/v1/assets?${findKey}`)
    console.log('filteredAssets: ', assets)
  }
  return <Container>
    <Stack direction='row' spacing={2}>
      <TextField label="Contract Address" value={address} variant="outlined" onChange={(e)=>{
        setAddress(e.target.value)
      }}/>
      <TextField label="token-id" variant = "outlined" value={tokenId} type='number' onChange={(e)=>{
        setTokenId(e.target.value)
      }} />
      <Button variant="contained" onClick={handleClick}>Find</Button>
    </Stack>
  </Container>;
};

export default Home;
