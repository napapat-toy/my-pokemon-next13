let sameFlavorText = [];

const FlavorTextEntry = ({ flavorText }) => (
    <div className="flex flex-col mdd:flex-row gap-2 border-2 rounded-lg p-4">
        <p className={`flex-2 text-xl font-semibold capitalize`}>Flavor Text</p>
        {flavorText
            .filter((value) => value.language.name === 'en')
            .map(({ flavor_text, version_group }, index, arr) => {
                sameFlavorText.push(version_group.name)
                if (flavor_text !== arr[index + 1]?.flavor_text) {
                    let sameVersions = [...sameFlavorText]
                    sameFlavorText = []
                    let versions = [...sameVersions].toString().split(',').join(' | ')
                    return (
                        <div key={`Flavor Text-${versions}`} className="border-2 rounded-lg p-4 mt-2">
                            <p className={`flex-2 text-xl font-semibold capitalize`}>{versions}:</p>
                            <p className='flex-1 text-lg mt-2'>{flavor_text}</p>
                        </div>
                    )
                }
            }
            )
        }
    </div>
)

export default FlavorTextEntry