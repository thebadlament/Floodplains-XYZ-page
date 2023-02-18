import { React} from "react";
import { useUserContext } from "./context/user-context";
import { Link, Routes, Route } from "react-router-dom";
import { About } from './pages/About'
import { Play } from './pages/Play'
import "./css/normalize.css";
import "./css/react-styles.css";
import "./css/index.css";

function App() {
  
  const app = useUserContext();
  const addClasses = function() {
    document.body.classList.toggle("popup-open"); 
    document.getElementsByClassName("about")[0].classList.toggle("about--open");
  }
  return (
    <>
      <About/>
      <div className="deny-popup">
        <button className="close close--deny" onClick={() => document.body.classList.toggle("deny-popup--open")}>
        </button>
        <div className="deny-popup-text">
          You will need to <a href="https://objkt.com/asset/KT1REifFaPU6hfeiCRgtCFbBkREkuNwr7488/1" target="blank" className="link">purchase an NFT ticket</a> and 
          then connect your Tezos wallet to visit the experience and collect memento artworks.
        </div>
      </div>
      <div className="popup">
        <div className="popup-shim-horiz">
        </div>
        <div className="popup-container">
          <div className="popup-shim-vert">
          </div>
          <div className="popup-text">
            <p>
              Floodplains.XYZ is a virtual 3D experience from new media artist Michelle Brown about the impact of dramatic weather events caused by climate change.
            </p>
            <p>
              You will need to <a className="link" href="https://objkt.com/asset/KT1REifFaPU6hfeiCRgtCFbBkREkuNwr7488/1" target="_blank">
                purchase an NFT ticket</a> and then connect your Tezos wallet to visit the experience and collect memento artworks. There are 10 collectible items but you can only take 5 with you each time you do the experience.
            </p>
            <p>
              Will your choices matter? Time may tell...
            </p>
            <p>
              If you have a VR headset click on the 'VR' button to learn more, there is currently no ability to collect the NFTs in the VR version
            </p>
            <img src="/images/wasd.png" className="center-img"></img>
            <div className="row">
              <p className="column">
                Space - Jump
                <br></br>
                F - Fullscreen
                <br></br>
                ESC - Exit & pause
                <br></br>
                M - Mute
                <br></br>
                H - Home
              </p>
              <p className="text-center column">
                Left click to interact with an object
              </p>
            </div>
            <div className="popup-link-container">
              <button 
                className='popup-link' 
                onClick={addClasses}>
                  More info
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        {/* <Nav/> */}
        <section id="section-socialmedia">
          <a
            className="link-socialmedia"
            id="link-discord"
            target="blank"
            href="https://discord.gg/gwyFm34Gsm"
          />
          <a
            className="link-socialmedia"
            id="link-twitter"
            target="blank"
            href="https://twitter.com/FloodplainsXYZ"
          />
        </section>
      </div>
      <Routes>
        <Route path="/" element={<Play />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  )
}

export default App;