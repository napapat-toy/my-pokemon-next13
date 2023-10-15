'use client'

import { Combobox } from '@headlessui/react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const SearchPokemon = () => {
    const [query, setQuery] = useState('')
    const router = useRouter()

    const handleSearch = () => {
        if (query !== '') {
            router.push(`/pokemons/${query}`)
        }
    }

    return (
        <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center">
            <Combobox onChange={handleSearch}>
                <Combobox.Label className='text-xl'>Pokemon Name :</Combobox.Label>
                <Combobox.Input
                    onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                    onChange={(event) => setQuery(event.target.value)}
                    className='p-2 mx-2 text-xl rounded-lg outline-none'
                />
            </Combobox >
            <button type='button' onClick={handleSearch} className='py-2 px-6 h-full bg-slate-400 hover:bg-slate-700 hover:text-white rounded-full transition-all duration-75'>Search</button>
        </div>
    )
}

export default SearchPokemon