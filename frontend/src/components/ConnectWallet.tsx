import { Button } from "@mui/material";
import { useEffect } from "react";

export function ConnectWallet(props: WalletProps) {
  const connectWallet = () => {
    const requestEthAccounts = async() => {
      const { ethereum } = window
      if( !ethereum ) throw new Error("error")
      const accounts: string = await ethereum.request({ method: "eth_requestAccounts" })
      if(accounts.length === 0) throw new Error("error")
      props.setterAccount(accounts[0])
      console.log(props.currentAccount)
    }
    requestEthAccounts()
  }

  const checkIfWalletIsConnected = () => {
    const checkEthAccounts = async () => {
      const { ethereum } = window
      if (!ethereum) throw new Error("error")
      const accounts: string = await ethereum.request({ method: "eth_accounts"})
      if (accounts.length === 0) throw new Error("error")
      props.setterAccount(accounts[0])
      console.log(props.currentAccount)
    }
    checkEthAccounts()
  }

  useEffect(() => {
    checkIfWalletIsConnected()
  })

  return (
    <div>
      <Button variant="contained" color="primary" onClick={connectWallet}>
        Connect Wallet
      </Button>
    </div>
  )
}
