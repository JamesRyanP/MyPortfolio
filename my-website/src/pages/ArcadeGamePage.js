import React from "react";
import { useParams } from "react-router-dom";
import Iframe from 'react-iframe';
import "./ArcadeGamePage.css";
import { getPathById, getEngineById, getStatsById } from "./components/Arcade-Items";
import { GetHighScoreSanta } from "./components/OneClickSanta-Functions";

const ArcadeGamePage = () => {
  const { id } = useParams();

  // const iframeSrc = `${process.env.PUBLIC_URL}/One-Click Santa/index.html`;
  const iframeSrc = getPathById(Number(id));
  const gameEngine = getEngineById(Number(id));

  const stats = getStatsById(Number(id));
console.log(stats);

  const getIframeStyle = (engine) => {
    if (engine === 'Phaser') {
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
      <div className="right-container">
      </div>
      <div className="game-container">
        <Iframe
          src={iframeSrc}
          id="react-native-iframe"
          className={`${iframeStyle}`}
          display="block"
          scrolling="no"
          allowFullScreen={true}
        />
      </div>
      <div className="stats-container">
        <div className="stats">
          <h2>Top Score</h2>

          <h2>{stats}</h2>
 
        </div>
      </div>
    </div>
  );
};

export default ArcadeGamePage;