import React, { useState, useEffect } from "react";
import axios from "axios";

const SoundCloudPlayer = ({ tracks }) => {
  const [currentTrack, setCurrentTrack] = useState(null);

  const playTrack = (trackUrl) => {
    if (currentTrack && currentTrack === trackUrl) {
      // Toggle play/pause if the same track is clicked
      const audio = document.getElementById("audio");
      audio.paused ? audio.play() : audio.pause();
    } else {
      // Play the selected track
      setCurrentTrack(trackUrl);
    }
  };

  useEffect(() => {
    const audio = document.getElementById("audio");
    if (currentTrack) {
      audio.src = currentTrack;
      audio.play();
    } else {
      audio.pause();
    }

    return () => {
      audio.pause(); // Cleanup on unmount
    };
  }, [currentTrack]);

  return (
    <div>
      <h2>Relaxing Songs</h2>
      <ul>
        {tracks.map((track) => (
          <li key={track.id} onClick={() => playTrack(track.stream_url)}>
            {track.title}
          </li>
        ))}
      </ul>
      <audio id="audio" controls style={{ marginTop: "20px" }} />
    </div>
  );
};

export default SoundCloudPlayer;
