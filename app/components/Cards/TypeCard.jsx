import { colours } from "@/data"
import Link from "next/link"

const TypeCard = ({ type }) => {
    const DamageRelationsCard = ({ name, type }) => (
        <div className="w-full md:w-fit flex flex-col gap-2 border-2 rounded-lg p-4">
            <h2 className='text-xl font-semibold capitalize'>{name.split('_').join(' ')}</h2>
            <div className="flex flex-wrap gap-2">
                {type?.map((damageType) => (
                    <div
                        key={`damageType-${damageType.name}`}
                        style={{ backgroundColor: colours[damageType.name] }}
                        className={`p-2 text-white rounded-md`}>
                        <Link key={`damage-type-${damageType.name}`} href={`/types/${damageType.name}`} className='text-lg capitalize '>
                            {damageType.name}
                        </Link>
                    </div>
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
                <h2 className='flex items-center text-4xl font-semibold capitalize py-4 gap-4'>
                    Type:
                    <p style={{ backgroundColor: colours[type.name] }}
                        className={`p-2 text-white rounded-md`}>
                        {type.name}
                    </p>
                </h2>
                <div className="flex flex-wrap gap-2">
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

export default TypeCard