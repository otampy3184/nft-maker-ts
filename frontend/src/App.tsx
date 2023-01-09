import React, { useState } from 'react';
import './App.css';

import { ConnectWallet } from './components/ConnectWallet';
import { UploadToIPFS } from './components/UploadToIPFS';

function App() {
  const [currentAccount, setCurrentAccount] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [result, setResult] = useState<string>("")
  const [openseaLink, setOpenseaLink] = useState<string>("");
  const [name, setName] = useState<string>("")
  const [description, setDescription] = useState<string>("")

  const setterAccount = (account : string)=> setCurrentAccount(account)
  const setterIsLoading = (isloading: boolean) => setIsLoading(isloading)
  const setterResult = (result: string) => setResult(result)
  const setterOpenseaLink = (opensealink: string) => setOpenseaLink(opensealink)
  const setterName = (name: string) => setName(name)
  const setterDescription = (description: string) => setDescription(description)

  return (
    <div className="App">
      <div className='outerBox'>
        {!currentAccount ? (
          <ConnectWallet
            currentAccount={currentAccount}
            setterAccount = {setterAccount}
           />
        ) : (
          <div>
            <UploadToIPFS
              setterIsLoading={setterIsLoading}
              setterResult={setterResult}
              result={result}
             />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
