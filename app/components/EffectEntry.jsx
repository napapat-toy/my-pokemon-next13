const EffectEntry = ({ effectEntry, shadow }) => (
    <div className={`flex flex-col mdd:flex-row gap-2 border-2 rounded-lg p-4 my-2 ${shadow && 'shadow-md'}`}>
        <p className={`flex-2 text-xl font-semibold capitalize`}>Effect Entries</p>
        {effectEntry.map((effect_entry) => effect_entry.language.name === 'en' && (
            <div key={`effect-${effect_entry.language}`}>
                <p className='flex-1 text-lg'>{effect_entry.effect}</p>
                {effect_entry.short_effect && <p className='flex-1 text-lg mt-4'><span className="font-light text-base">In Short: </span>{effect_entry.short_effect}</p>}
            </div>
        ))
        }
    </div>
)

export default EffectEntry