import React from "react";

const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=1803dde98acd45969cde822ec00d3771&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export default function Login() {
  return (
    <a className="btn btn-success btn-lg" href={AUTH_URL}>
      Login With Spotify
    </a>
  );
}
