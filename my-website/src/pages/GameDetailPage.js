import React from "react";
import { useParams } from "react-router-dom";
import { gameData, generateImageUrl, generateImageBanner } from "./components/Gallery-Items";
import "./GameDetailPage.css"; // Import your CSS file

const GameDetailPage = () => {
  const { id } = useParams();
  const selectedItem = gameData.find((item) => item.id === parseInt(id));
  const bannerImage = generateImageBanner(selectedItem.id);

  const GameRolesComponent = () => {
    return (
      <div>
      
          <div key={selectedItem.id}>
            {selectedItem.roles && Array.isArray(selectedItem.roles)
              ? selectedItem.roles.map((role, index) => (
                <div className="role" key={index}><h3>{role[0]}</h3><p>{role[1]}</p></div>
              ))
              : null}
          </div>

      </div>
    );
  };


  const GameTechnologyComponent = () => {
    return (
      <div>

          <div key={selectedItem.id} className="tech-container">
            {selectedItem.technology && Array.isArray(selectedItem.technology)
              ? selectedItem.technology.map((tech, index) => (
                <div className="tech" key={index}>{tech}</div>
              ))
              : null}
          </div>
 
      </div>
    );
  };

  return (
      <div className="game-detail">

    
      <div className="gdp">

        <div className="images-container">
          <div className="banner">
            {bannerImage ? (
              <img src={bannerImage} alt={selectedItem.title} />
            ) : (
              <div className="placeholder-banner"><h3>{selectedItem.title}</h3></div>
            )}
          </div>


          <div className="icon">
            <img src={generateImageUrl(selectedItem.id)} alt={selectedItem.title} />
          </div>



          <div className="description">
            <h2>{selectedItem.title}</h2>
            <p>{selectedItem.released}</p>
            <p>{selectedItem.category}</p>

            <a>{selectedItem.description}</a>
          </div>

        </div>


        <div className="info-container">
          <div className="roles">
            <h2>Roles</h2>
            <GameRolesComponent />
          </div>
          <div className="technology">
            <h2>Technology</h2>
            <GameTechnologyComponent />

          </div>
        </div>
      </div>
      </div>
  );
};

export default GameDetailPage;