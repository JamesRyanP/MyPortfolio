import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";
import { gameData, generateImageUrl } from "./components/Gallery-Items";




const Portfolio = () => {
  const GalleryList = ({ data }) => {
    return (
      <div className="item-container">
        {data.map(item => (
          <Link to={`/portfolio/game/detail/${item.id}`} key={item.id} className="item">
            <img src={generateImageUrl(item.id)} alt={item.title} />
            <h3>{item.title}</h3>
            <p>{item.category}</p>
          </Link>
        ))}
      </div>
    );
  };

  return (
    <div className="page-container">
      <div className="portfolio-container">
        <h2>Portfolio</h2>
        <div className="gallery-container">
          <GalleryList data={gameData} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;