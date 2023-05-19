import React, {useState, useEffect} from 'react'
import useFetch from '../../hooks/useFetch'
import PokemonInfo from '../pokemonInfo/PokemonInfo'
import './PokemonGrid.css'

export default function PokemonGrid() {
    const [url, setUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=12&offset=0')
    const {data, loading, error} = useFetch(url)

    if (loading) {
        return <div>Loading...</div>
    }
  
    if (error) {
        return <div>Error: {error.message}</div>
    }

    const handleNext = () => {
        setUrl(data.next)
    }

    const handlePrevious = () => {
        setUrl(data.previous)
    }

  return (
    <div>    
        <div className='table'>
            {data && data.results.map((pokemon) => {
                return (
                    <div key={pokemon.name} className='item'>
                        <PokemonInfo url={pokemon.url} />
                    </div>
                )
            })}
        </div>

        <br />
        <div className='table'>
            {data.previous && <button onClick={handlePrevious}>Previous</button>}
            {data.next && <button onClick={handleNext}>Next</button>}
        </div>
    </div>
  )
}
