import { useState, useEffect } from "react";
import useAuth from "./userAuth";
import Player from "./Player";
import TrackSearchResult from "./TrackSearchResult";
import SpotifyWebApi from "spotify-web-api-node";


const spotifyApi = new SpotifyWebApi({
  clientId: "1803dde98acd45969cde822ec00d3771",
});

export default function Dashboard({ code }) {
  const accessToken = useAuth(code);
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [playingTrack, setPlayingTrack] = useState();

  function chooseTrack(track) {
    setPlayingTrack(track);
    setSearch("");
  }

  useEffect(() => {
    if (!playingTrack) return;

    // Fetch lyrics or any other actions you might want to perform here
  }, [playingTrack]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
    console.log("Access-token:",accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!search) return setSearchResults([]);
    if (!accessToken) return;

    let cancel = false;
    spotifyApi.searchTracks(search).then((res) => {
      if (cancel) return;
      setSearchResults(
        res.body.tracks.items.map((track) => {
          const smallestAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image;
              return smallest;
            },
            track.album.images[0]
          );

          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallestAlbumImage.url,
          };
        })
      );
    });

    return () => (cancel = true);
  }, [search, accessToken]);

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search for a track..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => setSearch("")}>Clear</button>
      </div>
      <div>
        {searchResults.map((track) => (
          <TrackSearchResult
            track={track}
            key={track.uri}
            chooseTrack={chooseTrack}
          />
        ))}
      </div>
      <div>
        <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
      </div>
    </div>
  );
}
