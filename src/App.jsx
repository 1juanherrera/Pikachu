import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios' 
import Pokemon from './Pokemon/Pokemon'

function App() {

  const [ pokemonData, setPokemonData ] = useState({})
  const [ nameData, setNameData ] = useState('pikachu')

  const getData = () => {
    axios
    .get(`https://pokeapi.co/api/v2/pokemon/${nameData}`)
    .then( resp => setPokemonData(resp.data))
    .catch(error => console.log(error))
  }

  const searchPokemon = (e) => {
    e.preventDefault()

    setNameData( e.target[0].value.toLowerCase() )
  }

  useEffect(() => {
    getData()
  }, [nameData])


  return (
    <div className="App">
      <form onSubmit={(e) => searchPokemon(e)}>
            <input className='input_text' type="text" />
            <input className='button' type="submit" />
          </form>
          <Pokemon 
          data={ pokemonData }
          />
    </div>
  )
}

export default App
