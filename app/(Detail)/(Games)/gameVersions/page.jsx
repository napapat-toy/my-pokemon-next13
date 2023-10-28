'use client'

import VersionGroupDetail from '@/app/components/Detail/VersionGroupsDetail'
import { useEffect, useState } from 'react'

const GameVersions = () => {
    const [gameVersions, setGameVersions] = useState([])

    useEffect(() => {
        fetchGameVersions()
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

    const fetchGameVersions = async () => {
        fetch(`https://pokeapi.co/api/v2/version-group/`).then((data) =>
            data.json()
        ).then((version) =>
            setGameVersions(version)
        )
    }

    return (
        <VersionGroupDetail gameVersions={gameVersions} />
    )
}

export default GameVersions