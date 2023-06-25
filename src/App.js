import { useState } from "react";
import Game from "./components/Game.js";
import logoImg from "./img/logo.png";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      {!isPlaying ? (
        <>
          <header className="ff-pokemon-solid">
            <img className="logo-img" src={logoImg} alt="Pokemon logo" />
            <p className="logo-instructions">Don't click the same pokemon twice!</p>
          </header>

          {/* decoration for the bottom of the header logo */}
          <div className="logo-black-line">
            <div className="logo-big-circle">
              <div className="logo-small-circle"></div>
            </div>
          </div>
          
          <button className="start-btn bold" onClick={() => setIsPlaying(true)}>Start</button>
        </>
      ) : (
        <main>
          <Game />
        </main>
      )}
    </div>
  );
}

export default App;
