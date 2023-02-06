import React, {useEffect, useState, useCallback, Fragment} from 'react'
import { useUserContext } from "../context/user-context";
import Unity, { UnityContext } from "react-unity-webgl";
import { Nav } from "./Nav";

const unityContext = new UnityContext({
  loaderUrl: "Build/Build.loader.js",
  dataUrl: "Build/Build.data",
  frameworkUrl: "Build/Build.framework.js",
  codeUrl: "Build/Build.wasm",
  streamingAssetsUrl: "StreamingAssets",
});

export const Play = () => {
    const app = useUserContext();
    const [progression, setProgression] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isGameStarted, setIsGameStarted] = useState(false);
    const [isUserDenied, setIsUserDenied] = useState(false);
    const [message,setMessage] = useState();
    
    useEffect(function () {
      unityContext.on("loaded", function () {
        setIsLoaded(true);
        console.log("is loaded");
        setIsGameStarted(false);
      });
    }, [isLoaded]);

    useEffect(function () {
      unityContext.on("progress", function (progression) {
        setProgression(progression);
      });
    }, []);

    useEffect(function () {
      unityContext.on("progress", function (progression) {
        setProgression(progression);
      });
    }, []);

    useEffect(function () {
      unityContext.on("GameStarted", function (isGameStarted) {
        setIsGameStarted(isGameStarted);
        console.log("Game Started" + isGameStarted);

        if (isGameStarted) {
          document.body.classList.add("fade-out");
        } else {
          document.body.classList.remove("fade-out");
        }
      });
    }, []);

    useEffect(function () {
      unityContext.on("DenyUser", function (isUserDenied) {
        if (isUserDenied) {
          setIsUserDenied(true);
          if (!document.body.classList.contains("deny-popup--open")) {
            document.body.classList.add("deny-popup--open");
          }
        }
      });
    }, []);
    
    const handleCollect = () => async() => {
      !app.address && setMessage('please connect') 
      if(app.address) try {
          setMessage('ready wallet. . .');
          const isCollected = await app.collect(2415700, 1000000);
          setMessage(isCollected ? 'collected' : 'transaction denied');
        
      } catch(e) {
          setMessage('errors. . .');
          console.log('Error: ', e);
      }
      setTimeout(() => {
          setMessage(null);
      }, 3200);
    };
    useEffect(function () {
      unityContext.on("TriggerWallet", function (swapId, xtzAmount) {
        console.log("trigger wallet");
        app.collect(swapId, xtzAmount);
        handleCollect(swapId, xtzAmount);
      });
    }, []);

    let interval = setInterval(UpdateUnityWalletAddress, 2000);

    function UpdateUnityWalletAddress() {
      console.log("app.address " + app.address);
      console.log("isUserDenied " + isUserDenied)
      
      if(app.activeAccount) {
        unityContext.send("WalletLoader", "GetData", app.address);
      }

      clearInterval(interval);
    }

  return (
    <>
      <Nav/>
      <div id="layout">
        <div id= "unity" className="unity-container">
          <Unity unityContext={unityContext} className={"game-canvas"} 
            style={{ visibility: isLoaded ? "visible" : "hidden" }}/>
          {!isLoaded && <p className="loading">{Math.ceil(progression * 100)}%</p>}
        </div> 
      </div>
    </>
  );
}