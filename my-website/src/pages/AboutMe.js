import React, { useState } from 'react';
import "./AboutMe.css"


const AboutMe = () => {

  const [isSkillsOpen, setIsSkillsOpen] = useState(false);
  const [isExpOpen, setIsExpOpen] = useState(true);
  const [isEduOpen, setIsEduOpen] = useState(false);


  function setSkillsActive() {
    setIsSkillsOpen(true);
    setIsExpOpen(false);
    setIsEduOpen(false);
  }

  function setExpActive() {
    setIsExpOpen(true);
    setIsSkillsOpen(false);
    setIsEduOpen(false);
  }

  function setEduActive() {
    setIsEduOpen(true);
    setIsSkillsOpen(false);
    setIsExpOpen(false);
  }


  const MissionStatement = () => {
    return (
      <p>
        Passionate developer with experience working on mobile apps, static websites,
        and game development. Working knowledge of both front-end and back-end technologies.
      </p>
    );
  }

  /* className={`flex-menu ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} */

  const DescriptionSAS = () => {
    return (
      <div className='resume'>
        <div className='resume-header'>
          <div className='left-col'>
            <h4>
              S.A. Studio
            </h4>
            <h5>
              Junior C# Developer
            </h5>
          </div>
          <div>
            <h5 className='right-col'>
              2020 - Present
            </h5>
          </div>
        </div>
        <p>
          <ul>
            <li>
              Part of a collaborative team, I play a key role in the development of crucial
              game functions, meticulously coding features based on design documents
              provided to ensure alignment with project requirements.

            </li>
            <li>
              Exceptional problem-solving skills, leveraging C# in Unity, to
              implement game features that enriched the player experience and maintained
              a high level of code quality and readability
            </li>
            <li>
              Conduct QA with rigorous testing of implemented features to
              ensure flawless functionality. Prepare
              comprehensive documentation to enhance the overall product quality.
            </li>
            <li>
              Actively contribute to the game design process, collaborating on key aspects
              such as UI enhancements, audio integration, visual effects, gameplay
              mechanics, and responsive controls.
            </li>
          </ul>
        </p>
      </div>
    );
  }

  const DescriptionFGBH = () => {
    return (
      <div>
        <h4>
          Fontana Gardens Banquet Hall
        </h4>
        <h5>
          General Manager
        </h5>
        <h5>
          2015 - 2020
        </h5>
        <p>
          <ul>
            <li>
              Led the dynamic operations of Fontana Gardens Banquet Hall for over five
              years, taking charge as the front-facing representative under the guidance of
              the business owner.
            </li>
            <li>
              Demonstrated a keen entrepreneurial spirit, taking ownership of diverse
              responsibilities including event bookings, sales and marketing efforts, HR
              functions, and staff management.
            </li>
            <li>
              Acted as a problem-solving leader, proactively addressing issues and
              opportunities in the day-to-day operations, with a focus on optimizing
              processes, delivering superior customer experiences, and exceeding set
              objectives
            </li>
          </ul>
        </p>
      </div>
    );
  }

  const DescriptionTD = () => {
    return (
      <div>
        <h4>
          TD Canada Trust
        </h4>
        <h5>
          Customer Service Representative
        </h5>
        <h5>
          2013 - 2015
        </h5>
        <p>
          <ul>
            <li>
              Exhibited exceptional product knowledge, actively promoting and selling a
              wide range of bank services to clients, ensuring they received tailored solutions
              that met their financial needs
            </li>
            <li>
              Effectively provided comprehensive assistance to clients with their daily
              banking requirements, offering expert guidance on various banking products.
            </li>
          </ul>
        </p>
      </div>
    );
  }

  const Skills = () => {
    return (
      <div className='skills'>

        <div className='skills-container'>
          <div className='skill-container'>

            <div className='divide'>
              <strong> &lt;Front-End /&gt; </strong>
            </div>

            <p>ReactJS, React-Native, HTML, CSS, Bootstrap</p>
          </div>

          <div className='skill-container'>

            <div className='divide'>
              <strong> .Back-End </strong>
            </div>

            <p>Django, Spring Boot, Node.js, Express.js, MongoDB, MySQL</p>
          </div>

        </div>

        <div className='skills-container'>
          <div className='skill-container'>

            <div className='divide'>
              <strong> "Programming Languages" </strong>
            </div>
            <p>C#, JavaScript, Java, Python</p>
          </div>
          <div className='skill-container'>

            <div className='divide'>
              <strong> -Development Tools</strong>
            </div>
            <p>Xcode, Android Studio, Expo Go, Unity, Phaser</p>
          </div >
        </div >

      </div >
    );
  }

  const Education = () => {
    return (
      <div className='education-container'>
        <div className='education-blocks'>
          <div className='education-block'>
            <h4>
              Humber College, Etobicoke
            </h4>
            <h5>
              Diploma Computer Programming
            </h5>
            <p>
              April 2023
            </p>
          </div>

          <div className='education-block'>
            <h4>
              York University, North York
            </h4>
            <h5>
              B.B.A Human Resources Management
            </h5>
            <p>
              September 2016
            </p>

          </div>

        </div>
      </div>
    );
  }

  const Name = () => {
    return (
      <div>
        <h2>JAMES PATZMANN</h2>
      </div>
    );
  }

  const DisplayInfo = () => {
    if (isSkillsOpen) {
      return <Skills />;
    } else if (isExpOpen) {
      return (
        <div>
          <DescriptionSAS />
        </div>
      );
    } else if (isEduOpen) {
      return <Education />;
    }

    // Add a default case or return null if none of the conditions are met
    return null;
  };


  return (
    <body className="resume-page-container">
      <div className="resume-container">
        <div className="text-container">

          <div className="resume-bar">

            <div className="empty-tab">
              <h2>

              </h2>
            </div>
            <div className={`skills-tab ${isSkillsOpen ? 'active' : ''}`} onClick={setSkillsActive}>
              <h2>
                Skills
              </h2>
            </div>
            <div className={`exp-tab ${isExpOpen ? 'active' : ''}`} onClick={setExpActive}>
              <h2>
                Experience
              </h2>
            </div>
            <div className={`edu-tab ${isEduOpen ? 'active' : ''}`} onClick={setEduActive}>
              <h2>
                Education
              </h2>
            </div>
            <div className="empty-tab-two">
              <h2>

              </h2>
            </div>

          </div>
          <div className="info">


            <DisplayInfo />

          </div>

        </div>
      </div>
    </body>
  );
};

export default AboutMe;