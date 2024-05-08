import React from "react";
import MusicData from "./components/MusicDataAPI/MusicData";
import Deezer from "./components/DeezerAPI/Deezer";
import DeezerWidget from "./components/DeezerAPI/DeezerWidget";
import Jamendo from "./components/Jamendo API/Jamendo";
// import SoundCloud from "./components/SoundCloud API/SoundCloud";
// import ListenNotes from "./components/ListenNotes API/ListenNotes";
import Freesound from "./components/Freesound API/Freesound";
const App = () => {
  return (
    <div>
      <Freesound />
    </div>
  );
};

export default App;

// import Login from "./components/Login";
// import Dashboard from "./components/Dashboard";

// const code = new URLSearchParams(window.location.search).get("code");

// function App() {
//   return code ? <Dashboard code={code} /> : <Login />;
// }

// export default App;
