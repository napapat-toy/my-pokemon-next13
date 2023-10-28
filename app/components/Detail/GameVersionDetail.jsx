import HeaderText from '../HeaderText';
import InfoText from '../InfoText';
import Link from 'next/link';

const GameVersionCard = ({ gameVersion }) => {
    return (
        <>
            <HeaderText title='Game Version' value={gameVersion.name} />
            {Object.keys(gameVersion).length > 0 && (
                <>
                    <InfoText
                        title='Version Group'
                        value={<Link href={'/gameVersions'} className='text-lg capitalize hover:underline hover:underline-offset-4'>{gameVersion.version_group?.name}</Link>}
                    />
                    <div className="flex flex-col gap-2 my-4">
                        <h3 className='text-2xl'>Other Name</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mt-2">
                            {gameVersion.names?.map(({ language, name }) => (
                                <div key={language.name} className="flex flex-col border-l-4 border-sky-500 pl-1">
                                    <InfoText title='Language' value={language.name} />
                                    <InfoText title='Name' value={name} />
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default GameVersionCard