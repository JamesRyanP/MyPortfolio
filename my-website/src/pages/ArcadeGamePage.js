import React from "react";
import { useParams } from "react-router-dom";
import Iframe from 'react-iframe';
import "./ArcadeGamePage.css";
import { getPathById, getEngineById } from "./components/Arcade-Items";
import { GetHighScoreSanta } from "./components/OneClickSanta-Functions";

const ArcadeGamePage = () => {
  const { id } = useParams();

  // const iframeSrc = `${process.env.PUBLIC_URL}/One-Click Santa/index.html`;
  const iframeSrc = getPathById(Number(id));
  const gameEngine = getEngineById(Number(id));

  const getIframeStyle = (engine) => 
  {
    if (engine === 'Phaser') 
    {
      return 'phaser'
    };

    if (engine === 'React-Native') {
      return 'react-native'
    };

    return '';
  }

  const iframeStyle = getIframeStyle(gameEngine);

  return (
    <div className="agp">
      <div className="stats-container">
        <h2>Top Score</h2>
        <GetHighScoreSanta />
        <p>Item ID: {id}</p>
      </div>
      <div className="game-container">
        <Iframe
          src={iframeSrc}
          id="react-native-iframe"
          className={`${iframeStyle}`}
          display="initial"
          scrolling="no"
          allowFullScreen="true"
          marginheight="0px"
        />

      </div>
      <div className="right-container">


      </div>
    </div>
  );
};

export default ArcadeGamePage;