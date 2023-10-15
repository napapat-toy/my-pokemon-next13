'use client'

import { useEffect, useState } from 'react'

const Ability = ({ params: { abilityName } }) => {
    const [ability, setAbility] = useState([])

    useEffect(() => {
        fetchAbility()
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

    const fetchAbility = async () => {
        fetch(`https://pokeapi.co/api/v2/ability/${abilityName}`).then((data) =>
            data.json()
        ).then((ability) =>
            setAbility(ability)
        )
    }

    console.log(ability);

    return (
        <div>Ability</div>
    )
}

export default Ability