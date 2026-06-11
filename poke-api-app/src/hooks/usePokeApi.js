import { useEffect, useState } from "react";

export default function usePokeApi(url) {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        const getPokeData = async () => {
            const res = await (await fetch(url)).json()
            const tempPokemons = []
            for(const pokemon of res.results){
                const pokemon_result = await (await fetch(pokemon.url)).json()
                const newPokemon = {
                    name: pokemon.name,
                    id: pokemon_result.id,
                    species: pokemon_result.species.name,
                    height: pokemon_result.height,
                    weight: pokemon_result.weight,
                    abilities: {
                        ability1: pokemon_result.abilities[0].ability.name,
                        ability2: pokemon_result.abilities[1] ? pokemon_result.abilities[1].ability.name : "empty",
                        ability3: pokemon_result.abilities[2] ? pokemon_result.abilities[2].ability.name : "empty",
                    },
                    types: {
                        type1: pokemon_result.types[0].type.name,
                        type2: pokemon_result.types[1] ? pokemon_result.types[1].type.name : "empty",
                    },
                    sprites: {
                        small_sprite: pokemon_result.sprites.front_default,
                        official_artwork: pokemon_result.sprites.other?.["official-artwork"]?.front_default,
                    },
                    stats: [
                        {stat_name: "HP", stat_value: pokemon_result.stats[0].base_stat},
                        {stat_name: "Atk", stat_value: pokemon_result.stats[1].base_stat},
                        {stat_name: "Def", stat_value: pokemon_result.stats[2].base_stat},
                        {stat_name: "Sp. Atk.", stat_value: pokemon_result.stats[3].base_stat},
                        {stat_name: "Sp. Def.", stat_value: pokemon_result.stats[4].base_stat},
                        {stat_name: "Spd", stat_value: pokemon_result.stats[5].base_stat},
                    ]
                    
                }
                tempPokemons.push(newPokemon)
            }
            setPokemons(tempPokemons)
        }
        getPokeData()
    }, [])

    return pokemons
}