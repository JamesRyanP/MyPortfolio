import React from "react";
import "./Home.css";
import James from "../assets/images/James square.jpg";
import ResumePDF from "../assets/Documents/Resume.pdf";
import { Link } from "react-router-dom";


const Home = () => {

  const handleDownload = () => {
    // Use the anchor element to initiate the download
    const link = document.createElement('a');
    link.href = ResumePDF;
    link.download = 'Resume.pdf'; // specify the filename for download
    link.click();
  };

  const Introduction = () => {
    return (
      <div className="center">
        <p className="name">James Patzmann</p>
     
        <p className="title">Programmer / Developer / Designer</p>
        <div className="divider" ></div>
        <p className="description">
          Welcome to my digital playground!
          I enjoy making games, crafting websites, and coding. You can find my credentials, play in the arcade, and see my portfolio.
        </p>
        <div className="home-button-container">
          <button className="button-resume-download" onClick={handleDownload}>Download Resume</button>
          <Link className="arcade-link" to="/arcade"><button className="arcade-button">Arcade</button></Link>
        </div>

   


      </div>
    );
  }


  return (
    <div className="home">
      <div className="home-page">
        <div className="hp-flex-container">
          <div className="photo">
            <div className="image-container">  </div>



            <img src={James} alt="Centered Image" />


          </div>
          <div className="text">
            <Introduction />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
