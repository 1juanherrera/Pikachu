import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios' 
import Pokemon from './Pokemon/Pokemon'

function App() {

  const [ pokemonData, setPokemonData ] = useState({})

  useEffect(() => {
    axios
    .get('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then( resp => setPokemonData(resp.data))
    .catch(error => console.log(error))
  }, [])


  return (
    <div className="App">
          <Pokemon 
          data={ pokemonData }
          />
    </div>
  )
}

export default App
