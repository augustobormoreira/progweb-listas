import './App.css'
import InfoBar from "./components/infobar"
import PokeList from './components/pokelist'
import usePokeApi from './hooks/usePokeApi'

function App() {

  const url = "https://pokeapi.co/api/v2/pokemon?limit=20"
  const pokemons = usePokeApi(url)

  return <div className='view'>
    <InfoBar/>
    <PokeList pokemons={pokemons}/>
  </div>
}

export default App
