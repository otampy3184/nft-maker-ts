import { Button } from "@mui/material";
import React, { useEffect } from "react";

type NFTProps = {
  currentAccount: string
  setterAccount: () => (account: string) => void;
}

export function MintNFF(props: NFTProps) {
  const test: string = props.currentAccount
  return (
    <div>

    </div>
  )
}