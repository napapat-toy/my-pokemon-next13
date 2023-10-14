'use client'

import TypeCard from '@/app/components/Cards/TypeCard'
import { useEffect, useState } from 'react'

const Type = ({ params: { typeName } }) => {
    const [type, setType] = useState([])

    useEffect(() => {
        fetchType()
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

    const fetchType = async () => {
        fetch(`https://pokeapi.co/api/v2/type/${typeName}`).then((data) =>
            data.json()
        ).then((type) =>
            setType(type)
        )
    }

    return (
        <TypeCard type={type} />
    )
}

export default Type