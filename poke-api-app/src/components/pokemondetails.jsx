import styles from "./pokemondetails.module.css";

export default function PokemonDetails(props) {
  const { pokemon, setPokemon } = props;

  return (
    <div className={styles.overlay} onClick={() => setPokemon(null)}>
      <div className={`${styles.modal} ${styles[pokemon.types.type1]}`} onClick={(e) => e.stopPropagation()}>
        <div className={styles.pokemon_basic_info}>
          <div className={styles.img_styling}>
            <img
              src={pokemon.sprites.official_artwork}
              alt="pokemon_img"
              className={styles.img_styling}
            />
          </div>
          <div className={styles.pokemon_details}>
            {console.log(pokemon)}
            <h1>
              {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
            </h1>
            <span className={styles.info_styling}>
              {pokemon.id < 10 ? `#00${pokemon.id}` : `#0${pokemon.id}`}
            </span>
            <h3>Types</h3>
            <span className={`${styles[pokemon.types.type1]} ${styles.info_styling}`}>{pokemon.types.type1}</span>
            {pokemon.types.type2 != "empty" && (
              <span className={`${styles[pokemon.types.type2]} ${styles.info_styling}`}>{pokemon.types.type2}</span>
            )}
            <h3>Species</h3>
            <span className={styles.info_styling}>
              {pokemon.species.charAt(0).toUpperCase() +
                pokemon.species.slice(1)}
            </span>
            <h3>Height</h3>
            <span className={styles.info_styling}>{pokemon.height}</span>
            <h3>Weight</h3>
            <span className={styles.info_styling}>{pokemon.weight}</span>
            <h3>Abilities</h3>
            <span className={styles.info_styling}>{pokemon.abilities.ability1}</span>
            {pokemon.abilities.ability2 != "empty" && (
              <span className={styles.info_styling}>{pokemon.abilities.ability2}</span>
            )}
            {pokemon.abilities.ability3 != "empty" && (
              <span className={styles.info_styling}>{pokemon.abilities.ability3}</span>
            )}
          </div>
        </div>

        <div className={styles.pokemon_basic_stats}>
            {pokemon.stats.map((stat) => {
                return <div key={stat.stat_name} className={styles.stat}>
                    <div className={styles.stat_name}>
                        <span>{`${stat.stat_name}: ${stat.stat_value}`}</span>
                    </div>
                    <div className={styles.stat_bar}>
                        <div style={{
                            width: `${(stat.stat_value*32)/255}vw`,
                            height: "100%",
                            backgroundColor: "green",
                            borderRadius: "2vw"
                        }}></div>
                    </div>
                </div>
            })}
        </div>
        <div></div>
      </div>
    </div>
  );
}
