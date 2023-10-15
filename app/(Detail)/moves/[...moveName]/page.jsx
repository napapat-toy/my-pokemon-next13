'use client'

import { useEffect, useState } from 'react'

const Move = ({ params: { moveName } }) => {
    const [move, setMove] = useState([])

    useEffect(() => {
        fetchMove()
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

    const fetchMove = async () => {
        fetch(`https://pokeapi.co/api/v2/move/${moveName}`).then((data) =>
            data.json()
        ).then((move) =>
            setMove(move)
        )
    }

    // console.log(move);

    return (
        <div>Move</div>
    )
}

export default Move