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
              <p>I’ve been through two major flooding events in my hometown of Brisbane, in Queensland, Australia, in 2011 and 2022. Many people were impacted and lives were lost.</p>
              <p>During the 2022 floods when the water started rising quickly in the Brisbane river we knew that similar to 2011, my work place was probably going to flood and sure enough, I received a call early Sunday morning asking ‘is there anything you need me to take?</p>
              <p>Panicked, I couldn’t think of anything but my work laptop, racking my brain I drew blanks. It was lucky that I didn’t really had anything of value at work, and I thought how fortunate I was to have been asked the question.</p>
              <p>I started to ask other people; what do you treasure? What would you take if you only had a short time to evacuate? After many discussions, I gathered some interesting insight into different peoples choices and also heard many heartbreaking tales. </p>
              <p>Thanks to the incredible support from <a className="about-link" target="_blank" href="https://www.despace.berlin/">despace berlin</a> and <a className="about-link" target="_blank" href="https://www.artshelp.com/">Arts Help’s Conscious Crypto Creator</a> program, I was able to create Floodplains XYZ as an immersive 3D experience to provoke thought around personal choices, consumer culture, and to highlight the anxiety and stress that climate change is causing through extreme weather events.</p>
              <p>In a study published by <a className="about-link" target="_blank" href="https://www.earthobservatory.nasa.gov/images/148866/research-shows-more-people-living-in-floodplains">NASA</a> in August 2021, the proportion of people across the globe living in flood-prone areas has risen by 20% to 24% since 2000 — 10 times greater than the number previous models had predicted, as climate change drives extreme rainfall, rising sea levels and <a href="https://www.edf.org/are-record-breaking-hurricanes-our-new-normal" class="about-link">more intense hurricanes.</a></p>
              <p>20% off all income generated through Floodplains XYZ will be donated to climate action via - <a className="about-link" target="_blank" href="https://www.coolearth.org/">https://www.coolearth.org/</a></p>
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
  