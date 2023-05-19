import React from 'react'
import useFetch from '../../hooks/useFetch'

export default function PokemonInfo({url}) {
    const {data, loading, error} = useFetch(url)

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

  return (
    <div>
      <img src={data.sprites.front_default} alt={data.name} /><br />
      {data.id}. <a href={url}>{data.name.charAt(0).toUpperCase() + data.name.slice(1)}</a>
    </div>
  )
}
