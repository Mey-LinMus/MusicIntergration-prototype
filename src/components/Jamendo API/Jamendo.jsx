import React, { useState, useEffect } from "react";
import axios from "axios";

const JamendoCalmingTracks = () => {
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    const fetchCalmingTracks = async () => {
      try {
        const response = await axios.get(
          "https://api.jamendo.com/v3.0/tracks/?client_id=a0170ffb&tags=calm,serene&exclude=lofi,chill out,jazz,meditation music,ambient music&limit=20"
        );
        setTracks(response.data.results);
      } catch (error) {
        console.error("Error fetching calming tracks:", error);
      }
    };

    fetchCalmingTracks();
  }, []);

  const playTrack = (audioUrl) => {
    const audio = new Audio(audioUrl);
    audio.play();
  };

  const formatDuration = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  return (
    <div>
      <h1>Calming Tracks</h1>
      <ul>
        {tracks.map((track) => (
          <li key={track.id}>
            <img src={track.album_image} alt="" />
            {track.name} - {formatDuration(track.duration)}
            <button onClick={() => playTrack(track.audio)}>Play</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JamendoCalmingTracks;
