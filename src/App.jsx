import React from "react";
import MusicData from "./components/MusicDataAPI/MusicData";
import Deezer from "./components/DeezerAPI/Deezer";
import DeezerWidget from "./components/DeezerAPI/DeezerWidget";
import Jamendo from "./components/Jamendo API/Jamendo";

const App = () => {
  return (
    <div>
      {/* <MusicData /> */}
      {/* <DeezerWidget /> */}
      {/* <Deezer /> */}
      <Jamendo />
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
