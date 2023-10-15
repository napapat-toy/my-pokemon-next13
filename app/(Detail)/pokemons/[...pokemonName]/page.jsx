'use client'

import PokemonDetailCard from '@/app/components/PokemonDetail'
import { useEffect, useState } from 'react'

const Pokemon = ({ params: { pokemonName } }) => {
    const [pokemon, setPokemon] = useState({})

    useEffect(() => {
        fetchPokemon()
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

    const fetchPokemon = async () => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`).then((data) =>
            data.json()
        ).then((pokemon) =>
            setPokemon(pokemon)
        )
    }

    return (
        <PokemonDetailCard pokemon={pokemon} />
    )
}

export default Pokemon