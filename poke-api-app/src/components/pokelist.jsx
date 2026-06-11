import PokeCard from "./pokecard";
import styles from "./pokelist.module.css";
import { useState } from "react";
import PokemonDetails from "./pokemondetails";

export default function PokeList(props) {
  const { pokemons } = props;
  const [pokemon, setPokemon] = useState(null)

  return (
    <div className={styles.list}>
      {pokemons.map((current_pokemon) => {
        return (
          <PokeCard
            key={current_pokemon.id}
            pokemon={current_pokemon}
            setPokemon={setPokemon}
          />
        );
      })}
      {pokemon && <PokemonDetails pokemon={pokemon} setPokemon={setPokemon}/>}
    </div>
  );
}
