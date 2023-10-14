'use client'

import StatCard from '@/app/components/Cards/StatCard'
import { useEffect, useState } from 'react'

const Stat = ({ params: { statName } }) => {
    const [stat, setStat] = useState([])

    useEffect(() => {
        fetchStat()
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

    const fetchStat = async () => {
        fetch(`https://pokeapi.co/api/v2/stat/${statName}`).then((data) =>
            data.json()
        ).then((stat) =>
            setStat(stat)
        )
    }

    return (
        <StatCard stat={stat} />
    )
}

export default Stat