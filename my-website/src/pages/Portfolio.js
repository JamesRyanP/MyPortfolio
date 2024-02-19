import React from "react";
import { Link } from "react-router-dom";
import { gameData, generateImageUrl } from "./components/Gallery-Items";
import "./Portfolio.css"



const Portfolio = () => {
  const GalleryList = ({ data }) => {
    return (
      <div className="item-container">
        {data.map(item => (
          <Link to={`/portfolio/game/detail/${item.id}`} key={item.id} className="item">
            <img src={generateImageUrl(item.id)} alt={item.title} />

            <div  className="see-info">
            <h3>{item.title}</h3>
            </div>
          </Link>
        ))}
      </div>
    );
  };

  return (
    <div className="portfolio">
    <div className="portfolio-page-container">
      <div className="portfolio-container">
        <h2>Portfolio</h2>
        <div className="portfolio-gallery-container">
          <GalleryList data={gameData} />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Portfolio;
