import React, { useEffect, useState } from 'react';

export function GetHighScoreSanta() {
  const [highscore, setHighscore] = useState(null);

  useEffect(() => {
    async function getScore() {
      try {
        const response = await fetch("https://i2kflbfcqatmfcmv5n4i52j4iy0wxavt.lambda-url.ca-central-1.on.aws/");
        const payload = await response.json();
        setHighscore(payload.Highscore?.N || 'Not Found');
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getScore();

  }, []);

  return (
    <div>
      <p>
        Highscore: {highscore}
      </p>
    </div>
  );
};

export async function PostHighScoreSanta(santaScore) {
  const [currentHighscore, setCurrentHighscore] = useState(null);
  const [updateResult, setUpdateResult] = useState(null);

  useEffect(() => {
    async function getScore() {
      try {
        const response = await fetch("https://i2kflbfcqatmfcmv5n4i52j4iy0wxavt.lambda-url.ca-central-1.on.aws/");
        const payload = await response.json();
        setCurrentHighscore(payload.Highscore?.N || 0);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    async function updateHighscore() {
      if (santaScore !== 0 && santaScore > currentHighscore) {
        try {
          const response = await fetch(`https://imh7y2u65xzksly754mwjdnd5i0hghaf.lambda-url.ca-central-1.on.aws/?highscore=${santaScore}`);
          const payload = await response.json();

          if (payload.success) {
            setUpdateResult("Successfully updated highscore!");
          } else {
            setUpdateResult("Failed to update highscore");
          }
        } catch (error) {
          console.error('Error fetching data:', error);
          setUpdateResult("An error occurred while updating highscore");
        }
      }
    }

    getScore();
    updateHighscore();
  }, [santaScore, currentHighscore]); // Dependency array includes santaScore and currentHighscore

  return updateResult;
}