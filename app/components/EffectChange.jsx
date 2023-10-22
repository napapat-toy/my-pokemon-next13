import EffectEntry from './EffectEntry'

const EffectChange = ({ effectChanges, shadow, shadowInEntry }) => (
    <div className={`flex flex-col mdd:flex-row gap-2 border-2 rounded-lg p-4 ${shadow && 'shadow-md'}`}>
        <p className={`flex-2 text-xl font-semibold capitalize`}>Effect Changes</p>
        {effectChanges.map(({ effect_entries, version_group }) => (
            <div key={`Effect Changes-${version_group.name}`} className="mt-2">
                <p className={`flex-2 text-xl font-semibold capitalize`}>{version_group.name}:</p>
                <EffectEntry effectEntry={effect_entries} shadow={shadowInEntry} />
            </div>
        ))
        }
    </div>
)

export default EffectChange