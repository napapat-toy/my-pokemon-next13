import Link from 'next/link'

const StatDetail = ({ stat }) => {
    const InfoCard = ({ data, title }) => (
        <div className="flex flex-col gap-2 w-full md:w-fit border-2 rounded-lg p-4 shadow-md">
            <h2 className='text-xl font-semibold'>{title}</h2>
            <div className="flex flex-wrap gap-1">
                {data.map((d = [], index) => (
                    d.move ? (
                        <div key={`${d.move.name}`}>
                            <Link href={`/moves/${d.move.name}`} className='text-lg capitalize hover:underline hover:underline-offset-4'>
                                {d.move.name}{` (${d.change})`}
                            </Link>
                            {index !== data.length - 1 && <span className='mr-2'>,</span>}
                        </div>
                    ) : (
                        <div key={`${d.name}`}>
                            <Link href={`/natures/${d.name}`} className='text-lg capitalize hover:underline hover:underline-offset-4'>
                                {d.name}
                            </Link>
                            {index !== data.length - 1 && <span className='mr-2'>,</span>}
                        </div>
                    )
                )
                )}
            </div>
        </div>
    )

    const AffectingCard = ({ title, increase = [], decrease = [] }) => (
        <div className="w-full flex flex-col gap-2 border-2 rounded-lg p-4">
            <h2 className='text-xl font-semibold capitalize'>{title}</h2>
            <div className="flex flex-wrap gap-2">
                <InfoCard data={increase} title='Increase' />
                <InfoCard data={decrease} title='Decrease' />
            </div>
        </div>
    )

    return (
        <div className='bg-white rounded-md p-4 mx-4 max-w-[1440px] shadow-lg'>
            <div className="flex flex-col items-center gap-4">
                <h2 className='flex items-center text-4xl font-semibold capitalize py-4 gap-4'>
                    Stat: <p className='font-light'>{stat.name}</p>
                </h2>
                <AffectingCard title='Affecting Moves' {...stat.affecting_moves} />
                <AffectingCard title='Affecting Natures' {...stat.affecting_natures} />
            </div>
        </div>
    )
}

export default StatDetail