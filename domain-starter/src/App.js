import React from "react";
import "./styles/App.css";
import twitterLogo from "./assets/twitter-logo.svg";

const TWITTER_HANDLE = "MrinmoyEth";
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;

const App = () => {
	const checkIfWalletIsConnected = () => {
		const {ethereum} = window;

		if(!ethereum) {
			console.log("Make sure you have MetaMask!");
		}
		else{
			console.log("We have the ethereum object", ethereum);
		}
	}


  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <header>
            <div className="left">
              <p className="title">🤞 Yolo Name Service</p>
              <p className="subtitle">Your eternal API on the blockchain!</p>
            </div>
          </header>
        </div>

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
