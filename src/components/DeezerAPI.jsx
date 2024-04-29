import React, { useEffect } from "react";

const DeezerAPIExample = () => {
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
        console.log(data.data);

      } catch (error) {
        console.error("Error fetching tracks:", error);
      }
    };

    fetchData();
  }, []);

  return <div></div>;
};

export default DeezerAPIExample;
