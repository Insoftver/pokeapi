import React from 'react'
import useFetch from '../../hooks/useFetch'

export default function PokemonDetails({url}) {
    const {data, loading, error} = useFetch(url)

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }


  return (
    <div>
        <h1>{data.name}</h1>
        
    </div>
  )
}
