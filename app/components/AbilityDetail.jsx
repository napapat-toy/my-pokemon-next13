import Link from "next/link";

const AbilityDetail = ({ ability }) => {
    // console.log(ability);

    const InfoText = ({ title, value }) => (
        <div className="flex gap-2">
            <p className={`flex-2 text-xl font-semibold capitalize`}>{title}:</p>
            <p className='flex-1 text-lg'>{value}</p>
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
        <div className='flex flex-col h-fit items-center bg-white rounded-md p-4 mx-4 max-w-[1440px] shadow-lg'>
            {Object.keys(ability).length > 0 && (
                <div className="w-full flex flex-col gap-4 justify-between">
                    <div className="w-full flex justify-center items-center gap-2">
                        <h2 className='text-4xl font-semibold capitalize'>
                            Ability:
                        </h2>
                        <p className="font-light text-4xl capitalize">{ability.name}</p>
                    </div>
                    <div className="flex flex-col border-2 rounded-lg p-4">
                        <InfoText title='Effect Changes' value={ability.effect_changes[0]?.effect_entries[1].effect} />
                        <InfoText title='Effect Entries' value={ability.effect_entries[1]?.effect} />
                        <InfoText title='Flavor Text Entries' value={ability.flavor_text_entries[0].flavor_text} />
                    </div>
                    <PokemonInfoCard pokemons={ability.pokemon} />
                </div>
            )}
        </div>
    )
}

export default AbilityDetail