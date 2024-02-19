import React from "react";
import { Link } from "react-router-dom";
import { gameData } from "./components/Arcade-Items";
import "./Arcade.css";


const Portfolio = () => {




  const generateImageUrl = (item) => {
    try {
      const image = item.icon;
      return image;
    } catch (error) {
      return null;
    }
  };


  const ArcadeList = ({ data }) => {
    return (
      <div className="arcade-item-container">
        {data.map(item => (
          <Link to={`/arcade/game/detail/${item.id}`} key={item.id} className="arcade-item">
            <img src={generateImageUrl(item)} alt={item.title} />
            <div className="arcade-see-info">
              <h3>{item.title}</h3>
            </div>

          </Link>
        ))}
      </div>
    );
  };

  return (
    <div className="arcade">
      <div className="arcade-page-container">
        <div className="arcade-container">
          <h2>Playable Games</h2>
          <div className="arcade-gallery-container">
            <ArcadeList data={gameData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
