import React, { useEffect, useState } from "react";

const DeezerAPIExample = () => {
  const [artist, setArtist] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/12345/"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();

        setArtist(data);

        console.log(data.data);
      } catch (error) {
        console.error("Error fetching tracks:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {artist && (
        <div>
          <h2>{artist.name}</h2>
          <img src={artist.picture_medium} alt={artist.name} />
        </div>
      )}
    </div>
  );
};

export default DeezerAPIExample;
