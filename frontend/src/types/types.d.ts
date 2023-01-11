interface Window {
  ethereum: any;  // 苦肉の策
}

interface WalletProps {
  currentAccount: string;
  // setterAccount: (account: string) => void;
  setCurrentAccount: (value: React.SetStateAction<string>) => void
}

interface IPFSProps {
  result: string
  setterIsLoading: (isLoading: boolean) => void
  setterResult: (result: string) => void
}

interface MintProps {
  name: string
  description: string
  openseaLink: string
  result: string
  setterName: (name: string) => void
  setterDescription: (description: string) => void
  setterOpenseaLink: (openseaLink: string) => void
  setterResult: (result: string) => void
  setterIsLoading: (isLoading: boolean) => void
}