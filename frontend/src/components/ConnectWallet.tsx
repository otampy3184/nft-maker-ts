import { Button } from "@mui/material";
import { useEffect } from "react";

type WalletProps = {
  currentAccount: string
  setterAccount: (account: string) => void;
}

export function ConnectWallet(props: WalletProps) {
  const connectWallet = () => {
    const requestEthAccounts = async() => {
      const { ethereum } = window
      if( !ethereum ) throw new Error("error")
      const accounts: string = await ethereum.request({ method: "eth_requestAccounts" })
      if(accounts.length === 0) throw new Error("error")
      props.setterAccount(accounts[0])
    }
    requestEthAccounts()
  }

  useEffect(() => {
    connectWallet()
  })

  return (
    <div>
      <Button variant="contained" color="primary" onClick={connectWallet}>
        Connect Wallet
      </Button>
    </div>
  )
}
