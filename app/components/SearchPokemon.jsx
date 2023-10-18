'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useMemo, useRef, useState } from 'react'

const SearchPokemon = ({ pokemons }) => {
    const [query, setQuery] = useState('')
    const [isShow, setIsShow] = useState(false)
    const router = useRouter()
    const inputRef = useRef(null)
    const dropdownRef = useRef(null)

    const handleSearch = () => {
        if (query !== '') {
            router.push(`/pokemons/${query}`)
        }
    }

    const handleChange = (event) => {
        const queryCurrent = event.target.value
        setQuery(queryCurrent)
        if (queryCurrent !== '' && queryCurrent.length > 0) {
            setIsShow(true)
        }
        else {
            setIsShow(false)
        }
    }

    const handleClick = (value) => {
        setQuery(value)
        setIsShow(false)
        inputRef.current.focus()
    }

    const handleClickOutsideDropdown = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsShow(false)
        }
    }

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutsideDropdown);

        return () => {
            document.removeEventListener("mousedown", handleClickOutsideDropdown);
        }
    }, [dropdownRef])

    const pokemonsNameToArray = useMemo(() => Object.values(pokemons).map(({ name }) => name), [pokemons])

    const DropDownData = ({ pokemonsName }) => (
        <div className={`absolute top-0 overflow-auto ${pokemonsName && 'max-h-60'} bg-white w-full md:w-56 rounded-lg shadow-xl`}>
            {pokemonsName.filter((pokemonName) => pokemonName.toLowerCase().includes(query.toLowerCase())).map((value) => (
                <div key={`Value-${value}`} className="px-1 py-1">
                    <button
                        type='button'
                        onClick={() => handleClick(value)}
                        className={`hover:bg-sky-500 active:bg-sky-600 hover:text-white focus:bg-sky-500 focus:text-white text-gray-900 group flex w-full items-center rounded-md px-2 py-2 text-lg outline-none capitalize`}
                    >
                        {value}
                    </button>
                </div>
            ))}
        </div>
    )

    return (
        <div className='w-full flex flex-col gap-1'>
            <div className="flex flex-row items-center bg-white rounded-lg w-full">
                <input
                    ref={inputRef}
                    type="search"
                    id="search"
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    onChange={handleChange}
                    onClick={() => (query !== '' && query.length > 0) && setIsShow(true)}
                    value={query}
                    className="w-full block flex-auto px-4 py-2.5 text-xl rounded-l-lg rounded-r-none border border-solid border-neutral-300 bg-transparent font-normal text-neutral-700 transition duration-200 ease-in-out outline-none ring-inset focus:ring-2 focus:ring-cyan-300 "
                    placeholder="Search Pokemons..."

                />
                <button
                    type='button'
                    onClick={handleSearch}
                    className="p-4 text-sm font-medium h-full text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 transition duration-100"
                >
                    <svg className="w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                </button>
            </div>
            <div ref={dropdownRef} className="relative">
                {isShow && (<DropDownData pokemonsName={pokemonsNameToArray} />)}
            </div>
        </div>
    )
}

export default SearchPokemon