import React, { useState } from "react";
import axios from "axios";

const SoundCloudPlayer = () => {
  const [songs, setSongs] = useState([]);

  const searchSongs = async () => {
    const options = {
      method: "GET",
      url: "https://soundcloud4.p.rapidapi.com/search",

      headers: {
        "X-RapidAPI-Key": "5201788b92mshedb7b53b70423a3p162fc9jsnf1e2220ab84a",
        "X-RapidAPI-Host": "soundcloud4.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      // Ensure the response has a data property containing an array of songs
      if (
        response.data &&
        response.data.data &&
        Array.isArray(response.data.data)
      ) {
        setSongs(response.data.data);
      } else {
        console.error("Invalid response format");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const playSong = (url) => {
    const audio = new Audio(url);
    audio.play();
  };

  return (
    <div>
      <h1>Calming & Relaxing Songs</h1>
      <button onClick={searchSongs}>Search</button>
      <ul>
        {songs.map((song, index) => (
          <li key={index}>
            <div>
              {song.name} - {song.artist}
            </div>
            <button onClick={() => playSong(song.url)}>Play</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SoundCloudPlayer;
