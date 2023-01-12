import { Button } from "@mui/material";
import React, { useEffect } from "react";

import { ethers } from 'ethers'

import NFTMaker from "../abi/NFTMaker_mumbai.json"
const CONTRACT_ADDRESS = "0xb57D3b3c1C8C18b47Aa8d04d795f0c2fB7622c30"

export function MintNFT(props: MintProps) {
  const test: string = props.name
  const mintNFT =async () => {
    try {
        const provider = new ethers.providers.Web3Provider(window.ethereum)
        const signer = provider.getSigner()
        const contract = new  ethers.Contract(
            CONTRACT_ADDRESS,
            NFTMaker.abi,
            signer
        )
        const nftTxn = await contract.mintNFT(props.name, props.result, props.description, {
            gasLimit: 300000,
        })
        props.setterIsLoading(true)
        await nftTxn.wait()
        console.log(
            `Mined, see transaction: https://goerli.etherscan.io/tx/${nftTxn.hash}`
        )
        props.setterIsLoading(false)
    } catch (error){
        console.log(error)
    }
  }
  return (
    <div>

    </div>
  )
}