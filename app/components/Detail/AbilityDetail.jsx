import Link from "next/link";
import FlavorTextEntry from "../FlavorTextEntry";
import HeaderText from "../HeaderText";
import EffectChange from "../EffectChange";
import EffectEntry from "../EffectEntry";

const AbilityDetail = ({ ability }) => {

    const PokemonNameCard = ({ pokemons = [] }) => (
        <div className="flex flex-col gap-2 border-2 rounded-lg p-4">
            <h2 className='text-xl font-semibold'>Pokemons</h2>
            <div className="flex flex-wrap gap-2">
                {pokemons?.map(({ pokemon }, index) => (
                    <Link key={`pokemon-${pokemon.name}-${index}`} href={`/pokemons/${pokemon.name}`} className='text-lg capitalize hover:underline hover:underline-offset-4'>
                        {pokemon.name}{index !== pokemons.length - 1 && <span>,</span>}
                    </Link>
                ))}
            </div>
        </div>
    )

    return (
        <>
            {Object.keys(ability).length > 0 && (
                <div className="w-full flex flex-col justify-between">
                    <HeaderText title='Ability' value={ability.name} />
                    <div className="flex flex-col gap-4">
                        <EffectChange effectChanges={ability.effect_changes} shadowInEntry />
                        <EffectEntry effectEntry={ability.effect_entries} />
                        <FlavorTextEntry flavorText={ability.flavor_text_entries} />
                        <PokemonNameCard pokemons={ability.pokemon} />
                    </div>
                </div>
            )}
        </>
    )
}

export default AbilityDetail