import { useUserContext } from "./../context/user-context";

export const Nav = () => {
    const app = useUserContext();

    return (
      <nav className="nav">
          <div id="title-logo">
            <h2 className="screen-reader-text">Floodplains XYZ</h2>
            <button className="home-button" onClick={() => document.body.classList.toggle("popup-open")}></button>
          </div>
          <div className="nav-buttons">
  
            <div className="syncwallet-container">
              <button onClick={() => !app.activeAccount ? app.logIn() : app.logOut()}  className="syncwallet-button"> 
                {!app.activeAccount ? "Connect Wallet" : app.address.substr(0, 5) + "..." + app.address.substr(-5)}
              </button>
            </div>
  
            <div className="syncwallet-container">
              <button className="syncwallet-button"> 
                VR
              </button>
            </div>
          </div>
      </nav>
    )
  }