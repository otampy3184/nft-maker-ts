import React, { useState } from 'react';
import './App.css';

import { ConnectWallet } from './components/ConnectWallet';

function App() {
  const [currentAccount, setCurrentAccount] = useState<string>("")
  const setterAccount = (account : string)=> setCurrentAccount(account)

  return (
    <div className="App">
      <div className='outerBox'>
        {!currentAccount ? (
          <ConnectWallet
            currentAccount={currentAccount}
            setterAccount = {() => setterAccount}
           />
        ) : null}
      </div>
    </div>
  );
}

export default App;
