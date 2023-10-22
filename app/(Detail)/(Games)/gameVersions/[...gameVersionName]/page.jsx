'use client'

import GameVersionDetail from '@/app/components/Detail/GameVersionDetail'
import { useEffect, useState } from 'react'

const Version = ({ params: { gameVersionName } }) => {
    const [gameVersion, setGameVersion] = useState([])

    useEffect(() => {
        fetchGameVersion()
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

    const fetchGameVersion = async () => {
        fetch(`https://pokeapi.co/api/v2/version/${gameVersionName}`).then((data) =>
            data.json()
        ).then((gameVersion) =>
            setGameVersion(gameVersion)
        )
    }

    // console.log(gameVersion);

    return (
        <GameVersionDetail gameVersion={gameVersion} />
    )
}

export default Version