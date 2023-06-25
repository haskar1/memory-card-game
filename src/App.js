import Game from "./components/Game.js";
import logoImg from "./img/logo.png";

function App() {
  return (
    <div>
      <header className="ff-pokemon-solid">
        <img className="logo-img" src={logoImg} alt="Pokemon logo" />
        <p className="logo-instructions">Don't click the same pokemon twice!</p>
      </header>
      <div className="logo-black-line">
        <div className="logo-big-circle">
          <div className="logo-small-circle"></div>
        </div>
      </div>
      <main>
        <Game />
      </main>
    </div>
  );
}

export default App;
