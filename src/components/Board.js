import Card from "./Card.js";

export default function Board({ cards, shuffledPokemonNames, onClick }) {
  return (
    <>
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
    </>
  )
}