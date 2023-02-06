export const About = () => {
    return (
      <>
        <div className="about">
          <button className="close" 
            onClick={() => document.getElementsByClassName("about")[0].classList.toggle("about--open")}>
              <span className="screen-reader-text">close</span>
          </button>
          <div className="about-container">
            <div className="about-left">
              <h3 className="h3">
                Artist Statement
              </h3>
              <p>It was an early Sunday morning in late February, my phone rang and my anxiety started to flutter. It had been raining non-stop in Brisbane for a while, reminiscent of the incessant deluge from 2011 that caused our city to flood in many residential areas that had not flooded for thirty or so years. </p>

              <p>I looked at my phone vibrating, it was my boss from the makerspace I worked at part time, and I knew what it meant instantly, as our fabrication lab is on the basement level directly on the banks of the Brisbane river.</p>

              <p>‘What do you need me to take?’ he asked.</p>

              <p>Panicked, I couldn’t think of anything but my work laptop, racking my brain I drew blanks. It was lucky that I didn’t really had anything of value at work, a bunch of incomplete electronics projects, CNC prototypes and some fancy acrylic I was still debating what what art project to use it for. </p>

              <p>But that question continued to haunt me over the coming weeks as I saw the devastation the floods caused. Friends, strangers and entire communities lost everything. </p>

              <p>‘What do you need me to take?’</p>

              <p>I thought about how lucky I was to have been asked the question, while others had no time and barely escaped with their lives and their pets.</p>

              <p>I started to ask other people; what do you treasure? What would you take if you only had a short time to evacuate? After many discussions, I gathered some interesting insight into different peoples choices.</p>

              <p>This immersive 3D experience has been created to provoke thought around your own personal choices, consumer culture, and to highlight the anxiety and stress that climate change is causing through extreme weather events. </p>

              <p>I am releasing this new work with the collectible 3D pieces listed as NFTs on the Tezos Blockchain, chosen to highlight its low energy impact and economic barriers, making it a popular and diverse community of artists.</p>

              <p>10% off all income generated through FloodplainsXYZ will be donated to climate action via - <a className="about-link" target="_blank" href="https://www.coolearth.org/">https://www.coolearth.org/</a></p>
            </div>
            <div className="about-right">
              <img className="header-img" src="/images/elements.png"></img>
              <div className="about-right-contained">
                <h4 className="h4">
                  <a className="about-link" href="https://objkt.com/asset/KT1S1m5QUCm573bkis96MhuS7jfjJs6XcBeg/0" target="_blank">
                    <span className="capitalize">Buy</span> ENTRY TICKET
                  </a>
                </h4>
                <p>
                  <span>Tezos wallet required.</span>
                </p>
                <h4 className="h4 italic">Contact</h4>
                <p className="no-margin">
                  <span>info@floodplains.xyz</span>
                </p>
                <p>
                  <span>Join the Floodplains Discord for more info and support.</span>
                </p>
                <h4 className="h4 italic">Credits</h4>
                <h5 className="h5">Artist & Producer</h5>
                <p>
                  <span>Michelle Brown | <a className="about-link" href="https://www.thebadlament.com" target="_blank">www.thebadlament.com</a> | @thebadlament</span>
                </p>
                <h5 className="h5 italic">Developer</h5>
                <p>
                  <span>Violet Forest | <a className="about-link" href="https://violetforest.com" target="_blank">https://violetforest.com</a> | @violet_forest</span>
                </p>
                {/* <h4 className="h4 italic">Support</h4>
                <p>
                  <img className="img" src="/images/logos.png"/>
                </p> */}
              </div>
            </div>
          </div>
        </div>
        <section id="section-socialmedia">
          <a
            className="link-socialmedia"
            id="link-discord"
            target="blank"
            href="https://discord.gg/"
          />
          <a
            className="link-socialmedia"
            id="link-twitter"
            target="blank"
            href="https://twitter.com/thebadlament"
          />
        </section>
      </>
    );
  }
  