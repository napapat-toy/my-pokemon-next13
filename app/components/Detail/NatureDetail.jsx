import HeaderText from "../HeaderText";
import InfoText from "../InfoText";

const NatureDetail = ({ nature }) => {

    const MoveBattleStylePreferences = ({ moveBattles = [] }) => (
        <div className="border-2 rounded-lg p-4">
            <p className='text-xl font-semibold'>Move Battle Style Preferences</p>
            {moveBattles?.map(({ high_hp_preference, low_hp_preference, move_battle_style }, index) => (
                <div key={`perference-${index}`} className="border-2 rounded-lg p-4 my-4 shadow-md">
                    <InfoText title='Move Battle Style' value={move_battle_style.name} />
                    <InfoText title='High HP' value={high_hp_preference} />
                    <InfoText title='Low HP' value={low_hp_preference} />
                </div>
            ))}
        </div>
    )

    const PokeathlonStatChanges = ({ pokeathlonStats }) => (
        <div className="border-2 rounded-lg p-4">
            {pokeathlonStats?.map(({ max_change, pokeathlon_stat }, index) => (
                <div key={`pokeathlon-stat-${pokeathlon_stat.name}-${index}`} className="border-2 rounded-lg p-4 my-4 shadow-md">
                    <InfoText title='Max change' value={max_change} />
                    <InfoText title='Pokeathlon Stat' value={pokeathlon_stat.name} />
                </div>
            ))}
        </div>
    )

    return (
        <>
            <HeaderText title='Nature' value={nature.name} />
            {Object.keys(nature).length > 0 && (
                <div className="flex flex-col md:flex-row items-start gap-4">
                    <div className="w-full flex flex-col gap-4">
                        <div className="border-2 rounded-lg p-4">
                            <InfoText title='Increase Stat' value={nature.increased_stat?.name} />
                            <InfoText title='Decrease Stat' value={nature.decreased_stat?.name} />
                            <InfoText title='Hates Flavor' value={nature.hates_flavor?.name} />
                            <InfoText title='Likes Flavor' value={nature.likes_flavor?.name} />
                        </div>
                        <PokeathlonStatChanges pokeathlonStats={nature.pokeathlon_stat_changes} />
                    </div>

                    <MoveBattleStylePreferences moveBattles={nature.move_battle_style_preferences} />
                </div>
            )}
        </>
    )
}

export default NatureDetail