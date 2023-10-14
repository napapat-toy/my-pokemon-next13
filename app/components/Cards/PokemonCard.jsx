'use client'

import { useEffect, useState } from "react"
import Image from "next/image"

const PokemonCard = ({ pokemon, handleClick }) => {
  const [data, setData] = useState()

  useEffect(() => {
    fetchPokemon()
  }, [])

  const fetchPokemon = async () => {
    fetch(pokemon.url).then((data) =>
      data.json()
    ).then((pokemon) =>
      setData(pokemon)
    )
  }

  return (
    <div onClick={handleClick} className="flex flex-col items-center bg-white hover:bg-slate-100 cursor-pointer rounded-md p-4 hover:shadow-md transition-all duration-75">
      {data ? (
        <>
          <div className='w-[160px]'>
            <h2 className="text-2xl text-center font-bold text-gray-800 capitalize truncate">
              {pokemon.name}
            </h2>
          </div>
          <Image
            src={data.sprites.front_default ? data.sprites.front_default : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/640px-Pok%C3%A9_Ball_icon.svg.png'}
            alt={pokemon?.name}
            width={96}
            height={96}
            className="object-cover"
          />
          <h3 className="text-center font-semibold">No. {data?.id ? data.id : '???'}</h3>
        </>
      ) : (
        <>
          <div className='w-[160px]'>
            <h2 className="text-2xl text-center font-bold text-gray-800 capitalize truncate">
              Pokemon Name
            </h2>
          </div>
          <Image
            src={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/640px-Pok%C3%A9_Ball_icon.svg.png'}
            alt='placeholder pokemon'
            width={96}
            height={96}
            className="object-cover"
          />
          <h3 className="text-center font-semibold">No. ???</h3>
        </>
      )}
    </div>
  )
}

export default PokemonCard