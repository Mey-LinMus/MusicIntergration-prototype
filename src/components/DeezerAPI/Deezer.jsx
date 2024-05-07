import React, { useState, useEffect } from "react";
import axios from "axios";

const Deezer = () => {
  const [trackData, setTrackData] = useState(null);

  useEffect(() => {
    const trackId = "12345"; // Replace '12345' with the actual track ID

    const fetchData = async () => {
      const options = {
        method: "GET",
        url: `https://deezerdevs-deezer.p.rapidapi.com/track/${trackId}`,
        headers: {
          "X-RapidAPI-Key":
            "859712810fmsh4c5a7a7054a4b8cp17616ajsn3d40839b44c5",
          "X-RapidAPI-Host": "deezerdevs-deezer.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setTrackData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();

    // Clean-up function to cancel the request if the component unmounts
    return () => {
      // If axios request supports cancellation, cancel here
    };
  }, []); // Empty dependency array ensures useEffect runs only once, like componentDidMount

  return (
    <div>
      {trackData ? (
        <div>
          <h2>{trackData.title_short}</h2>
          <img src={trackData.album.cover_big} alt="" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Deezer;
