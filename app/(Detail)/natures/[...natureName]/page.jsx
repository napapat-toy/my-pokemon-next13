'use client'

import { useEffect, useState } from 'react'

const Nature = ({ params: { natureName } }) => {
    const [nature, setNature] = useState([])

    useEffect(() => {
        fetchMove()
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

    const fetchMove = async () => {
        fetch(`https://pokeapi.co/api/v2/nature/${natureName}`).then((data) =>
            data.json()
        ).then((nature) =>
            setNature(nature)
        )
    }

    console.log(nature);

    return (
        <div>Nature</div>
    )
}

export default Nature