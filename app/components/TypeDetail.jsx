import Link from "next/link"
import TypeCard from "./Cards/TypeCard"

const TypeDetail = ({ type }) => {
    const DamageRelationsCard = ({ name, type }) => (
        <div className="w-full md:w-fit flex flex-col gap-2 border-2 rounded-lg p-4">
            <h2 className='text-xl font-semibold capitalize'>{name.split('_').join(' ')}</h2>
            <div className="flex-1 flex flex-wrap gap-2">
                {type?.map((damageType) => (
                    <TypeCard key={`damageType-${damageType.name}`} typeName={damageType.name} />
                ))}
            </div>
        </div>
    )

    const MoveInfoCard = ({ moves = [] }) => (
        <div className="flex flex-col gap-2 border-2 rounded-lg p-4">
            <h2 className='text-xl font-semibold'>Moves</h2>
            <div className="flex flex-wrap gap-2">
                {moves?.map((move, index) => (
                    <Link key={`move-${move.name}`} href={`/moves/${move.name}`} className='text-lg capitalize hover:underline hover:underline-offset-4'>
                        {move.name}{index !== moves.length - 1 && <span>,</span>}
                    </Link>
                ))}
            </div>
        </div>
    )

    const PokemonInfoCard = ({ pokemons = [] }) => (
        <div className="flex flex-col gap-2 border-2 rounded-lg p-4">
            <h2 className='text-xl font-semibold'>Pokemons</h2>
            <div className="flex flex-wrap gap-2">
                {pokemons?.map(({ pokemon }, index) => (
                    <Link key={`pokemon-${pokemon.name}`} href={`/pokemons/${pokemon.name}`} className='text-lg capitalize hover:underline hover:underline-offset-4'>
                        {pokemon.name}{index !== pokemons.length - 1 && <span>,</span>}
                    </Link>
                ))}
            </div>
        </div>
    )

    return (
        <div className='bg-white rounded-md p-4 mx-4 max-w-[1440px] shadow-lg'>
            <div className="flex flex-col items-center gap-4">
                <div className="flex items-center gap-2">
                    <h2 className='text-4xl font-semibold capitalize'>
                        Type:
                    </h2>
                    <TypeCard typeName={type.name} />
                </div>
                <div className="w-full flex flex-wrap gap-2">
                    {type.damage_relations && Object.entries(type.damage_relations).map(([key, type]) => (
                        <DamageRelationsCard key={`${key}`} name={key} type={type} />
                    ))}
                </div>
                <MoveInfoCard moves={type.moves} />
                <PokemonInfoCard pokemons={type.pokemon} />
            </div>

        </div>
    )
}

export default TypeDetail