import React, { useState, useEffect } from "react";

const App = () => {
  const [music, setMusic] = useState(null);

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        // Fetch relaxing and calming music from the Freesound API
        const apiKey = "I1LpLxs7DA0cokgejhVdsZJ7TAll6pd79JGYT3E2";
        const query = "relaxing calming music";
        const response = await fetch(
          `https://freesound.org/apiv2/search/text/?query=${query}&token=${apiKey}`
        );
        const data = await response.json();
        console.log(data);

        // Filter the results to get only sound instances with relaxing or calming tags
        const filteredMusic = data.results.filter(
          (result) =>
            result.tags.includes("relaxing") || result.tags.includes("calming")
        );

        // Set the filtered music in state
        setMusic(filteredMusic);
      } catch (error) {
        console.error("Error fetching music:", error);
      }
    };

    fetchMusic();
  }, []);

  const playMusic = (url) => {
    const audio = new Audio(url);
    audio.play();
  };

  return (
    <div>
      <h1>Relaxing & Calming Music</h1>
      {music && (
        <ul>
          {music.map((track) => (
            <li key={track.id}>
              <p>{track.name}</p>

              <button
                onClick={() =>
                  playMusic(
                    track.previews["preview-hq-mp3"] ||
                      track.previews["preview-lq-mp3"]
                  )
                }
              >
                Play
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
