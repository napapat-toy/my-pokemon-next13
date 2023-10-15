import Link from 'next/link'
import Image from 'next/image'
import TypeCard from './Cards/TypeCard'

const NotFound = () => (
  <div className="flex flex-col items-center">
    <h2 className='text-3xl font-bold p-8'>Not found</h2>
    <Link href={`/`} className='py-2 px-6 h-full bg-slate-400 hover:bg-slate-700 hover:text-white rounded-md'>Back</Link>
  </div>
)

const InfoText = ({ title, value }) => (
  <div className="flex gap-2">
    <p className={`text-xl font-semibold capitalize`}>{title}:</p>
    <p className='text-lg'>{value}</p>
  </div>
)

const StatInfoCard = ({ stats }) => (
  <div className="flex-1 flex flex-col border-2 rounded-lg p-4">
    <h2 className='text-xl font-semibold'>Stats</h2>
    <div className="flex flex-col">
      {stats.map((statInfo) => (
        <div key={`stat-${statInfo.stat.name}`} className="flex gap-2">
          <Link href={`/stats/${statInfo.stat.name}`} className='text-lg capitalize'>
            <p className={`text-xl font-semibold capitalize hover:underline hover:underline-offset-4`}>{statInfo.stat.name}:</p>
          </Link>
          <p className='text-lg'>{statInfo.base_stat}</p>
        </div>
      ))}
    </div>
  </div>
)

const AbilityInfoCard = ({ abilities }) => (
  <div className="flex-1 flex flex-col gap-2 border-2 rounded-lg p-4">
    <h2 className='text-xl font-semibold'>Ability</h2>
    <div className="flex flex-col">
      {abilities.map(({ ability }) => (
        <div key={`ability-${ability.name}`} className='text-lg capitalize'>
          <Link href={`/abilities/${ability.name}`} className='text-lg capitalize hover:underline hover:underline-offset-4'>
            {ability.name}
          </Link>
        </div>
      ))}
    </div>
  </div>
)

const MoveInfoCard = ({ moves }) => (
  <div className="flex-1 flex flex-col gap-2 border-2 rounded-lg p-4">
    <h2 className='text-xl font-semibold'>Moves</h2>
    <div className="flex flex-wrap gap-1">
      {moves.map(({ move }, index) => (
        <div key={`move-${move.name}`}>
          <Link href={`/moves/${move.name}`} className='text-lg capitalize hover:underline hover:underline-offset-4'>
            {move.name}
          </Link>
          {index !== moves.length - 1 && <span className='mr-2'>,</span>}
        </div>
      ))}
    </div>
  </div>
)

const GameVersion = ({ versions }) => (
  <div className="flex-1 flex flex-col gap-2 border-2 rounded-lg p-4">
    <h2 className='text-xl font-semibold'>Game Versions</h2>
    <div className="flex flex-wrap gap-1">
      {versions.map(({ version }, index) => (
        <div key={`version-${version.name}`}>
          <Link href={`/gameVersions/${version.name}`} className='text-lg capitalize hover:underline hover:underline-offset-4'>
            {version.name}
          </Link>
          {index !== versions.length - 1 && <span className='mr-2'>,</span>}
        </div>
      ))}
    </div>
  </div>
)

const PokemonDetail = ({ pokemon = [] }) => {
  console.log(pokemon);
  return (
    <div className='flex flex-col w-full h-fit items-center bg-white rounded-md p-4 max-w-[1440px] shadow-lg'>
      {Object.keys(pokemon).length > 0 ? (
        <div className="flex flex-col gap-2 items-center">
          <h2 className='text-2xl text-center font-bold text-gray-800 capitalize'>{pokemon.name}</h2>
          <div className="flex flex-col">
            <Image
              src={pokemon.sprites.front_default ? pokemon.sprites.front_default : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/640px-Pok%C3%A9_Ball_icon.svg.png'}
              alt={pokemon.name}
              width={192}
              height={192}
              className="object-cover"
            />
          </div>
          <div className="w-full flex flex-col md:flex-row gap-4 justify-between">
            <div className="flex-1 flex flex-col border-2 rounded-lg p-4">
              <InfoText title='ID' value={pokemon.id} />
              <InfoText title='Height' value={pokemon.height} />
              <InfoText title='Weight' value={pokemon.weight} />
              <h2 className='text-xl font-semibold'>Types:</h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {pokemon.types.map(({ type }) => (
                  <TypeCard key={`type-${type.name}`} typeName={type.name} />
                ))}
              </div>
            </div>
            <StatInfoCard stats={pokemon.stats} />
            <AbilityInfoCard abilities={pokemon.abilities} />
          </div>
          <MoveInfoCard moves={pokemon.moves} />
          <GameVersion versions={pokemon.game_indices} />
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  )
}

export default PokemonDetail