'use client'

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";

import PokemonCard from "./components/Cards/PokemonCard";
import SearchPokemon from "./components/SearchPokemon";
import DropdownMenu from "./components/DropdownMenu";
import Pagination from "./components/Pagination";

export default function Home() {
  const [pokemons, setPokemons] = useState([])
  const [limit, setLimit] = useState(20)
  const [currentPage, setCurrentPage] = useState(1)
  const [paginate, setPaginate] = useState([])
  const [allPokemonsName, setAllPokemonsName] = useState([])
  const router = useRouter()

  const apiURL = useMemo(() => {
    return `https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${(currentPage - 1) * limit}`
  }, [currentPage, limit])

  useEffect(() => {
    fetch(apiURL)
      .then((data) =>
        data.json())
      .then((pokemons) => {
        setPokemons(pokemons)
        const totalPages = genPageIndex(Math.ceil(pokemons.count / limit))
        setPaginate(totalPages)
      })
    fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
      .then((data) =>
        data.json())
      .then((pokemons) => {
        setAllPokemonsName(pokemons.results)
      })
  }, [currentPage, limit, apiURL])

  const handlePagination = (numOfPage) => {
    setCurrentPage(numOfPage)
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }

  const genPageIndex = (num) => {
    const arrIndex = []
    for (let index = 1; index <= num; index++) {
      arrIndex.push(index)
    }
    return arrIndex
  }

  const handleClickDropdown = (value) => {
    setLimit(value)
    setCurrentPage(1)
  }

  return (
    <div className="flex flex-col items-center mx-4 md:mx-2 max-w-[1440px]">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-4">
        <SearchPokemon pokemons={allPokemonsName} />
        <DropdownMenu
          dataMenu={[20, 50, 100]}
          title='Show Limit'
          current={limit}
          handleClick={handleClickDropdown}
        />
      </div>

      <Pagination
        handlePagination={handlePagination}
        paginate={paginate}
        currentPage={currentPage}
        next={pokemons.next}
        previous={pokemons.previous}
      />

      <div className="h-full mt-6 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {pokemons.results?.length > 0 && pokemons.results?.map((pokemon) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} handleClick={() => router.push(`/pokemons/${pokemon.name}`)} />
        ))}
      </div>

      <Pagination
        handlePagination={handlePagination}
        paginate={paginate}
        currentPage={currentPage}
        next={pokemons.next}
        previous={pokemons.previous}
      />
    </div>
  )
}