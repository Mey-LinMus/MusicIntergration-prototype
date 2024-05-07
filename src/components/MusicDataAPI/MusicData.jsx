import React, { useState, useEffect } from "react";
import axios from "axios";

const MusicSearchComponent = () => {
  const [searchResult, setSearchResult] = useState(null);

  useEffect(() => {

    const fetchData = async () => {
  
      const options = {
        method: "GET",
        url: "https://musicapi13.p.rapidapi.com/public/search/introspection",
        headers: {
          "X-RapidAPI-Key":
            "859712810fmsh4c5a7a7054a4b8cp17616ajsn3d40839b44c5",
          "X-RapidAPI-Host": "musicapi13.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        setSearchResult(response.data);
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
      <h2>Music Search Result</h2>
      {searchResult ? (
        <div>
          {/* Render search result here */}
          <pre>{JSON.stringify(searchResult, null, 2)}</pre>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default MusicSearchComponent;
