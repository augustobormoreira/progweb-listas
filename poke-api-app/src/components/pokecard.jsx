import styles from "./pokecard.module.css"

export default function PokeCard(props) {

    const {pokemon, setPokemon} = props

    const {name, sprites, types} = pokemon

    return <div className={`${styles.card} ${styles[types.type1]}`} onClick={() => setPokemon(pokemon)}>
        <h1 className={styles.title_styling}>{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
        <img className={styles.small_sprite} src={sprites.small_sprite} alt="pikachu_img" />
        <span className={`${styles.span_styling} ${styles[types.type1]}`}>{types.type1}</span>
        {types.type2!="empty" && <span className={`${styles.span_styling} ${styles[types.type2]}`}>{types.type2}</span>}
    </div>
}