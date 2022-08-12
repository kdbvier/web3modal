import { useEffect, useState, useRef } from 'react'
import { useWeb3React } from '@web3-react/core'
import { ethers } from 'ethers'
// eslint-disable-next-line import/no-unresolved
import { rpcUrl } from '../utils/web3React'
/**
 * Provides a web3 provider with or without user's signer
 * Recreate web3 instance only if the provider change
 */
export const simpleRpcProvider = new ethers.providers.JsonRpcProvider(rpcUrl)

const useActiveWeb3React = () => {
  const { library, chainId, isActive, ...web3React } = useWeb3React()
  console.log('web3ReactResult: ',library,chainId, isActive)
  const refEth = useRef(library)
  const [provider, setprovider] = useState(library)

  useEffect(() => {
    if (library !== refEth.current) {
      setprovider(library)
      refEth.current = library
    }
  }, [library])

  return { library: provider, chainId: chainId ?? parseInt(process.env.REACT_APP_CHAIN_ID, 10), ...web3React }
}

export default useActiveWeb3React
