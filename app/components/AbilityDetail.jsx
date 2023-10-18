import Link from "next/link";

const AbilityDetail = ({ ability }) => {

    const TopicName = ({ topic, value }) => (
        <div className="w-full flex justify-center items-center gap-2">
            <h2 className='text-3xl md:text-4xl font-semibold capitalize'>
                {topic}:
            </h2>
            <p className="font-light text-3xl md:text-4xl capitalize">{value}</p>
        </div>
    )

    const EffectChange = ({ effectChanges }) => (
        <div className="flex flex-col mdd:flex-row gap-2 border-2 rounded-lg p-4">
            <p className={`flex-2 text-xl font-semibold capitalize`}>Effect Changes</p>
            {effectChanges.map(({ effect_entries, version_group }) => (
                <div key={`Effect Changes-${version_group.name}`} className="mt-2">
                    <p className={`flex-2 text-xl font-semibold capitalize`}>{version_group.name}:</p>
                    <EffectEntry effectEntry={effect_entries} />
                </div>
            ))
            }
        </div>
    )
    const EffectEntry = ({ effectEntry }) => (
        <div className="flex flex-col mdd:flex-row gap-2 border-2 rounded-lg p-4 mt-2">
            <p className={`flex-2 text-xl font-semibold capitalize`}>Effect Entries</p>
            {effectEntry.map((effect_entry) => effect_entry.language.name === 'en' && (
                <div key={`effect-${effect_entry.language}`}>
                    <p className='flex-1 text-lg'>{effect_entry.effect}</p>
                    {effect_entry.short_effect && <p className='flex-1 text-lg mt-4'><span className="font-light text-base">In Short: </span>{effect_entry.short_effect}</p>}
                </div>
            )
            )}
        </div>
    )

    const FlavorTextEntry = ({ flavorText }) => (
        <div className="flex flex-col mdd:flex-row gap-2 border-2 rounded-lg p-4">
            <p className={`flex-2 text-xl font-semibold capitalize`}>Flavor Text</p>
            {flavorText.map(({ flavor_text, language, version_group }) => language.name === 'en' && (
                <div key={`Flavor Text-${version_group.name}`} className="border-2 rounded-lg p-4 mt-2">
                    <p className={`flex-2 text-xl font-semibold capitalize`}>{version_group.name}:</p>
                    <p className='flex-1 text-lg mt-2'>{flavor_text}</p>
                </div>
            ))
            }
        </div>
    )

    const PokemonNameCard = ({ pokemons = [] }) => (
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
        <div className='flex flex-col h-fit items-center justify-center bg-white rounded-md p-4 mx-4 max-w-[1440px] shadow-lg'>
            {Object.keys(ability).length > 0 && (
                <div className="w-full flex flex-col gap-4 justify-between">
                    <TopicName topic='Ability' value={ability.name} />
                    <div className="flex flex-col gap-4">
                        <EffectChange effectChanges={ability.effect_changes} />
                        <EffectEntry effectEntry={ability.effect_entries} />
                        <FlavorTextEntry flavorText={ability.flavor_text_entries} />
                    </div>
                    <PokemonNameCard pokemons={ability.pokemon} />
                </div>
            )}
        </div>
    )
}

export default AbilityDetail