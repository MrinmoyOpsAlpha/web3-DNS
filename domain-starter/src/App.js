import React, { useEffect } from "react";
import "./styles/App.css";
import twitterLogo from "./assets/twitter-logo.svg";

const TWITTER_HANDLE = "MrinmoyEth";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
  const checkIfWalletIsConnected = () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("Make sure you have MetaMask!");
    } else {
      console.log("We have the ethereum object", ethereum);
    }
  };

  const renderNotConnectedContainer = () => (
    <div className="connect-wallet-container">
      <iframe
        title="Minato"
        src="https://giphy.com/embed/A8UFISckEbokw"
        width="480"
        height="258"
        frameBorder="0"
        class="giphy-embed"
        allowFullScreen
      ></iframe>
      <p>
        <a href="https://giphy.com/gifs/naruto-battle-A8UFISckEbokw">
          <br/>
        </a>
      </p>

      <button className="cta-button connect-wallet-button">
        Connect Wallet
      </button>
    </div>
  );

  useEffect(() => {
    checkIfWalletIsConnected();
  });

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <header>
            <div className="left">
              <p className="title">🤞 Kamui Name Service</p>
              <p className="subtitle">Your eternal API on the blockchain!</p>
            </div>
          </header>
        </div>

        {renderNotConnectedContainer()}

        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{` @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;
