import TypeCard from '../Cards/TypeCard';
import Link from 'next/link';
import FlavorTextEntry from '../FlavorTextEntry';
import InfoText from '../InfoText';
import HeaderText from '../HeaderText';
import EffectChange from '../EffectChange';
import EffectEntry from '../EffectEntry';

const MoveDetail = ({ move }) => {

    const TypeSection = ({ type }) => (
        <div className="flex items-center gap-2">
            <h2 className='text-xl font-semibold capitalize'>
                Type:
            </h2>
            <TypeCard typeName={type} />
        </div>
    )

    const PokemonNameCard = ({ pokemons = [] }) => (
        <div className="flex flex-col gap-2 border-2 rounded-lg p-4">
            <h2 className='text-xl font-semibold'>Learned by Pokemon</h2>
            <div className="flex flex-wrap gap-2">
                {pokemons?.map((pokemon, index) => (
                    <Link key={`pokemon-${pokemon.name}`} href={`/pokemons/${pokemon.name}`} className='text-lg capitalize hover:underline hover:underline-offset-4'>
                        {pokemon.name}{index !== pokemons.length - 1 && <span>,</span>}
                    </Link>
                ))}
            </div>
        </div>
    )

    const ContestSection = ({ combo, type }) => (
        <div className="border-2 rounded-lg p-4">
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

    const EffectSection = ({ changes, entries, flavor_text }) => (
        <div className="w-full flex flex-col gap-4 border-2 rounded-lg p-4">
            <h2 className='text-3xl font-semibold capitalize'>
                Effect
            </h2>
            <EffectChange effectChanges={changes} shadow />
            <EffectEntry effectEntry={entries} shadow />
            <FlavorTextEntry flavorText={flavor_text} />
        </div>
    )

    const StatChanges = ({ statChanges }) => (
        <div className="w-full flex flex-col gap-4 border-2 rounded-lg p-4">
            <h2 className='text-3xl font-semibold capitalize'>
                Stat Changes
            </h2>
            {statChanges.map((stat) => (
                <div key={stat} className="">
                    <InfoText title='Stat' value={`${stat.stat.name}`} />
                    <InfoText title='Changes' value={`${stat.change}`} />
                </div>
            ))}
        </div>
    )

    return (
        <>
            <HeaderText title='Move' value={move.name} />
            {Object.keys(move).length > 0 && (
                <div className="w-full flex flex-col gap-4">
                    <div className="w-full flex flex-wrap flex-col md:flex-row justify-evenly items-start md:items-center gap-2 md:gap-4 md:divide-x-4 divide-x-0 divide-sky-400 border-2 rounded-lg p-4 mt-4">
                        <TypeSection type={move.type.name} />
                        <InfoText title='Power' value={`${move.power}`} />
                        <InfoText title='Accuracy' value={`${move.accuracy}`} />
                        <InfoText title='PP' value={`${move.pp}`} />
                        <InfoText title='Damage Class' value={`${move.damage_class.name}`} />
                        <InfoText title='Target' value={`${move.target.name}`} />
                        <InfoText title='Effect Chance' value={`${move.effect_chance}%`} />
                        <InfoText title='Generation' value={`${move.generation.name}`} />
                    </div>
                    <StatChanges statChanges={move.stat_changes} />
                    <ContestSection
                        combo={move.contest_combos}
                        type={move.contest_type}
                    />
                    <EffectSection
                        changes={move.effect_changes}
                        entries={move.effect_entries}
                        flavor_text={move.flavor_text_entries}
                    />
                    <PokemonNameCard pokemons={move.learned_by_pokemon} />
                </div>
            )}
        </>
    )
}

export default MoveDetail