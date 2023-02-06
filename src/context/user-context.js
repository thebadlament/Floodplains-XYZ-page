import React, { useEffect, useState, useCallback} from "react";
import { TezosToolkit } from "@taquito/taquito";
import { BeaconWallet } from "@taquito/beacon-wallet";

const UserContext = React.createContext();
const options = {
  name: 'Floodplains'
 };
  
const wallet = new BeaconWallet(options);

export const useUserContext = () => {

  const app = React.useContext(UserContext);
  if (!app) {
    throw new Error(
      `!app`
    );
  }
  return app;
};

export const UserContextProvider = ({ children }) => {
  
  const [app, setApp] = React.useState("");
  const [address, setAddress] = useState("");
  const [tezos, setTezos] = useState(new TezosToolkit("https://mainnet.api.tez.ie"));
  const [activeAccount, setActiveAccount] = useState("")


  useEffect( () => {
     const getLoggedIn = async () => {
        if (await wallet?.client?.getActiveAccount()) { 
          setActiveAccount(await wallet?.client?.getActiveAccount());
          const address =  await wallet.getPKH();
          setAddress(address);
          tezos.setWalletProvider(wallet);
          setTezos(tezos)
        }
      };
      getLoggedIn();
    }, []);
  
  async function logIn() {
    app.currentUser && await app.currentUser?.logOut();
    await wallet.client.clearActiveAccount();
    await wallet.client.requestPermissions({
      network: {
        type: 'mainnet',
      },
    });
    tezos.setWalletProvider(wallet);
    setTezos(tezos)
    setAddress(await wallet.getPKH());
    setActiveAccount(await wallet?.client?.getActiveAccount());
  }

  async function logOut() {
    await wallet.client.clearActiveAccount();
    setActiveAccount("")
    setAddress("");
    //  window.location.reload();
  }

  async function collect(swapId, xtzAmount) {
    try {
      const v2 = await tezos.wallet.at('KT1WvzYHCNBvDSdwafTHv7nJ1dWmZ8GCYuuC');
      const op = await v2.methods
        .collect(parseFloat(swapId))
        .send({
            amount: parseFloat(xtzAmount),
            mutez: true,
            storageLimit: 310
          });
        await op.confirmation(2);
    } catch(e) {
      console.log('Error:', e);
      return false;
    }
    return true;
  };

  async function collect(swapId, xtzAmount) {
    console.log("swapId " + swapId);
    const contract = "KT1WvzYHCNBvDSdwafTHv7nJ1dWmZ8GCYuuC";
    try {
      const interact = await tezos.wallet.at(contract)
        const op = await interact.methods['fulfill_ask'](2415700)
        if(op) {await op.send({
          amount: 1000000,
          mutez: true,
          storageLimit: 310
      }) 
      // await op.confirmation(2)}
    }

    } catch(e) {
        console.log('Error:', e);
        return false;
    }
    return true;
};


  const wrapped = { ...app, tezos, logIn, logOut, activeAccount, address, collect};

  return (
   
    <UserContext.Provider value={wrapped}>
           {children}
    </UserContext.Provider>
  
  );
};

export default UserContextProvider;