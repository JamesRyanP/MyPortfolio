import React from "react";
import { Link } from "react-router-dom";
import "./Arcade.css";
import { gameData } from "./components/Arcade-Items";



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
      <div className="item-container">
        {data.map(item => (
          <Link to={`/arcade/game/detail/${item.id}`} key={item.id} className="item">
            <img src={generateImageUrl(item)} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.mainCategory}</p>
            <p>{item.secondaryCategory}</p>
          </Link>
        ))}
      </div>
    );
  };

  return (
    <div className="page-container">
      <div className="portfolio-container">
        <h2>Playable Games</h2>
        <div className="gallery-container">
          <ArcadeList data={gameData} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
