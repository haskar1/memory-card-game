import Card from "./Card.js";
import loadingGIF from "../img/loading.gif";

export default function Board({ cards, shuffledPokemonNames, onClick }) {
  return (
    <div>
      {cards.mewtwo.imgURL !== '' ? 
      (
        <div className="board">
          {shuffledPokemonNames.map(pokemonName => {
            return (
              <Card 
                key={cards[pokemonName].id}
                id={pokemonName} 
                imgURL={cards[pokemonName].imgURL} 
                alt={`Pokemon character named ${pokemonName}`} 
                onClick={onClick} 
              />
            )
          })}
        </div>
      ) : 
      (
        <div className="loading-spinner" >
          <img src={loadingGIF} alt="loading spinner" />
        </div>
      )}
    </div>
  )
}