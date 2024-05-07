import React, { useState, useEffect } from "react";
import axios from "axios";

const JamendoTracks = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await axios.get(
          "https://api.jamendo.com/v3.0/tracks/?client_id=a0170ffb"
        );
        setTracks(response.data.results);
      } catch (error) {
        console.error("Error fetching tracks:", error);
      }
    };

    fetchTracks();
  }, []);

  const playTrack = (audioUrl) => {
    const audio = new Audio(audioUrl);
    audio.play();
    console.log("Playing track");
  };

  return (
    <div>
      <h1>Jamendo Tracks</h1>
      <ul>
        {tracks.map((track) => (
          <li key={track.id}>
            <img src={track.album_image} alt="" />
            {track.name}
            <button onClick={() => playTrack(track.audio)}>Play</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JamendoTracks;
