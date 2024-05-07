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
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching tracks:", error);
      }
    };

    fetchTracks();
  }, []);

  return (
    <div>
      <h1>Jamendo Tracks</h1>
      <ul>
        {tracks.map((track) => (
          <li key={track.id}>
            <img src={track.album_image} alt="" />
            {track.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JamendoTracks;
