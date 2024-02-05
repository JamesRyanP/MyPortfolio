import React from "react";
import "./Home.css";
import James from "../assets/images/James square.jpg";

const Home = () => {
  const Introduction = () => {
    return (
      <div className="center">
        <p className="name">James Patzmann</p>
        <p className="title">Programmer / Developer / Designer</p>
        <div className="divider" ></div>
        <p className="description">
          Hi, I enjoy making games, building websites, and generally enjoy coding.
          I built this website to showcase my work.
        </p>
      </div>
    );
  }


  return (
    <div className="page">
      <div className="flex-container">
        <div className="photo">
          <div className="image-container">
            <img src={James} alt="Centered Image" />
          </div>
        </div>
        <div className="text">
          <Introduction />
        </div>
      </div>
    </div>
  );
};

export default Home;
