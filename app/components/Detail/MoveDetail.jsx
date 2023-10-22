import TypeCard from '../Cards/TypeCard';
import Link from 'next/link';
import FlavorTextEntry from '../FlavorTextEntry';

const MoveDetail = ({ move }) => {

    const InfoText = ({ title, value }) => (
        <div className="flex gap-2">
            <p className={`text-xl font-semibold capitalize`}>{title}:</p>
            <p className='text-lg'>{value}</p>
        </div>
    )

    const TypeSection = ({ type }) => (
        <div className="flex items-center gap-2 my-2">
            <h2 className='text-xl font-semibold capitalize'>
                Type:
            </h2>
            <TypeCard typeName={type} />
        </div>
    )

    const EffectChange = ({ effectChanges }) => (
        <div className="flex flex-col mdd:flex-row gap-2 border-2 rounded-lg p-4 shadow-md">
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
        <div className="flex flex-col mdd:flex-row gap-2 border-2 rounded-lg p-4 shadow-md">
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

    const PokemonNameCard = ({ pokemons = [] }) => (
        <div className="flex flex-col gap-2 border-2 rounded-lg p-4 mt-2">
            <h2 className='text-xl font-semibold'>Pokemons</h2>
            <div className="flex flex-wrap gap-2">
                {pokemons?.map((pokemon, index) => (
                    <Link key={`pokemon-${pokemon.name}`} href={`/pokemons/${pokemon.name}`} className='text-lg capitalize hover:underline hover:underline-offset-4'>
                        {pokemon.name}{index !== pokemons.length - 1 && <span>,</span>}
                    </Link>
                ))}
            </div>
        </div>
    )

    const ContestSection = ({ combo, effect, type }) => (
        <div className="border-2 rounded-lg p-4 my-4">
            <h2 className='text-3xl font-semibold'>Contest</h2>
            <p className='text-xl font-semibold mt-2'>Contest type: {type?.name && <span className='text-lg font-normal'>{`${type.name}`}</span>} </p>
            <div className="mt-4">
                <p className='text-xl font-semibold'>Normal</p>

                <div className="border-2 rounded-lg p-4 my-4 shadow-md">
                    <p className='text-xl font-semibold'>Use Before</p>
                    <div className="flex items-center flex-wrap">
                        {combo?.normal?.use_before?.map((move, index) => (
                            <p key={`normal-use-before-${move.name}`}>
                                <Link href={`/moves/${move.name}`} className='text-lg capitalize hover:underline hover:underline-offset-4'>
                                    {move.name}
                                </Link>
                                {index !== combo?.normal?.use_before?.length - 1 && <span className='mr-2'>,</span>}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="border-2 rounded-lg p-4 my-4 shadow-md">
                    <p className='text-xl font-semibold'>Use After</p>
                    <div className="flex items-center flex-wrap">
                        {combo?.normal?.use_after?.map((move, index) => (
                            <p key={`normal-use-after-${move.name}`}>
                                <Link href={`/moves/${move.name}`} className='text-lg capitalize hover:underline hover:underline-offset-4'>
                                    {move.name}
                                </Link>
                                {index !== combo?.normal?.use_after?.length - 1 && <span className='mr-2'>,</span>}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-4">
                <p className='text-xl font-semibold'>Super</p>
                <div className="border-2 rounded-lg p-4 my-4 shadow-md">
                    <p className='text-xl font-semibold'>Use Before</p>
                    <div className="flex items-center flex-wrap">
                        {combo?.super?.use_before?.map((move, index) => (
                            <p key={`super-use-before-${move.name}`}>
                                <Link href={`/moves/${move.name}`} className='text-lg capitalize hover:underline hover:underline-offset-4'>
                                    {move.name}
                                </Link>
                                {index !== combo?.super?.use_before?.length - 1 && <span className='mr-2'>,</span>}
                            </p>
                        ))}
                    </div>
                </div>
                <div className="border-2 rounded-lg p-4 my-4 shadow-md">
                    <p className='text-xl font-semibold'>Use After</p>
                    <div className="flex items-center flex-wrap">
                        {combo?.super?.use_after?.map((move, index) => (
                            <p key={`super-use-after-${move.name}`}>
                                <Link href={`/moves/${move.name}`} className='text-lg capitalize hover:underline hover:underline-offset-4'>
                                    {move.name}
                                </Link>
                                {index !== combo?.super?.use_after?.length - 1 && <span className='mr-2'>,</span>}
                            </p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )

    console.log(move);

    return (
        <>
            {Object.keys(move).length > 0 && (
                <div className="w-full ">
                    <h2 className='text-3xl font-semibold capitalize text-center'>
                        Move: <span className='font-normal'>{move.name}</span>
                    </h2>
                    <div className="w-full flex-1 flex flex-col md:flex-row justify-evenly items-start md:items-center md:divide-x-4 divide-x-0 divide-sky-400 border-2 rounded-lg p-4 mt-4">
                        <TypeSection type={move.type.name} />
                        <InfoText title='Power' value={`${move.power}`} />
                        <InfoText title='Accuracy' value={`${move.accuracy}`} />
                        <InfoText title='PP' value={`${move.pp}`} />
                        <InfoText title='Damage Class' value={`${move.damage_class.name}`} />
                        <InfoText title='Target' value={`${move.target.name}`} />
                        <InfoText title='Effect Chance' value={`${move.effect_chance}%`} />
                    </div>
                    <ContestSection combo={move.contest_combos} effect={move.contest_effect} type={move.contest_type} />
                    <div className="w-full flex-1 flex flex-col gap-4 border-2 rounded-lg p-4 mt-4">
                        <h2 className='text-3xl font-semibold capitalize'>
                            Effect
                        </h2>
                        <EffectChange effectChanges={move.effect_changes} />
                        <EffectEntry effectEntry={move.effect_entries} />
                        <FlavorTextEntry flavorText={move.flavor_text_entries} />
                    </div>
                    <PokemonNameCard pokemons={move.learned_by_pokemon} />
                </div>
            )}
        </>
    )
}

export default MoveDetail