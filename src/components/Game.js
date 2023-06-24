import Scores from "./Scores.js";
import Board from "./Board.js";
import { useEffect, useState } from "react";

export default function Game() {
  const [cards, setCards] = useState(initialCards);
  const [shuffledPokemonNames, setShuffledPokemonNames] = useState(['blastoise', 'snorlax', 'squirtle', 'charmander', 'jigglypuff', 'ditto', 'pikachu', 'eevee', 'garchomp', 'gyarados', 'bulbasaur', 'mewtwo']);

  function handleClick() {
    shuffleCards();
  }

  function shuffleCards() {
    const newPokemonList = shuffledPokemonNames.slice();
    for (let i = newPokemonList.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = newPokemonList[i];
      newPokemonList[i] = newPokemonList[j];
      newPokemonList[j] = temp;
    }
    setShuffledPokemonNames(newPokemonList);
  }

  useEffect(() => {
    async function getPokemon() {
      const imgURLs = [];
      for (let i = 0; i < shuffledPokemonNames.length; i++) {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${shuffledPokemonNames[i]}`, {mode: 'cors'});
        const pokemonData = await response.json();
        const imgURL = pokemonData.sprites.front_default;
        imgURLs.push(imgURL);
      }
      for (let i = 0; i < imgURLs.length; i++) {
        setCards(prevCards => {
          return {
            ...prevCards,
            [shuffledPokemonNames[i]]: {
              ...cards[shuffledPokemonNames[i]],
              imgURL: imgURLs[i]
            }
          }
        })
      }
    }
    getPokemon();
    shuffleCards();
  }, []);

  return (
    <>
      <Scores />
      <Board 
        cards={cards} 
        setCards={setCards} 
        shuffledPokemonNames={shuffledPokemonNames} 
        onClick={handleClick} 
      />
    </>
  )
}

const initialCards = {
  blastoise: {
    id: crypto.randomUUID(),
    imgURL: '',
    clicked: false
  }, 
  snorlax: {
    id: crypto.randomUUID(),
    imgURL: '',
    clicked: false
  }, 
  squirtle: {
    id: crypto.randomUUID(),
    imgURL: '',
    clicked: false
  }, 
  charmander: {
    id: crypto.randomUUID(),
    imgURL: '',
    clicked: false
  }, 
  jigglypuff: {
    id: crypto.randomUUID(),
    imgURL: '',
    clicked: false
  }, 
  ditto: {
    id: crypto.randomUUID(),
    imgURL: '',
    clicked: false
  }, 
  pikachu: {
    id: crypto.randomUUID(),
    imgURL: '',
    clicked: false
  }, 
  eevee: {
    id: crypto.randomUUID(),
    imgURL: '',
    clicked: false
  }, 
  garchomp: {
    id: crypto.randomUUID(),
    imgURL: '',
    clicked: false
  }, 
  gyarados: {
    id: crypto.randomUUID(),
    imgURL: '',
    clicked: false
  }, 
  bulbasaur: {
    id: crypto.randomUUID(),
    imgURL: '',
    clicked: false
  }, 
  mewtwo: {
    id: crypto.randomUUID(),
    imgURL: '',
    clicked: false
  }
}