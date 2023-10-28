import { useEffect, useState } from "react";
import InfoText from "../InfoText";
import Link from "next/link";

const VersionGroupCard = ({ name, url }) => {

    const [version, setVersion] = useState({})

    useEffect(() => {
        fetchVersion()
    }, [])

    const fetchVersion = async () => {
        fetch(url).then((data) =>
            data.json()
        ).then((version) =>
            setVersion(version)
        )
    }

    const DisplayData = ({ title, data }) => (
        <div className="w-full flex flex-col gap-1 border-2 rounded-lg p-4 shadow-md bg-white">
            <h2 className='text-xl font-semibold capitalize'>{title} </h2>
            {data?.map((value) => (
                <p key={value.name} className="text-lg capitalize">{value.name}</p>
            ))}
        </div>
    )

    const VersionLink = ({ title, data }) => (
        <div className="w-full flex flex-col gap-1 border-2 rounded-lg p-4 shadow-md bg-white">
            <h2 className='text-xl font-semibold capitalize'>{title} </h2>
            {data?.map((value) => (
                <Link key={value.name} href={`/gameVersions/${value.name}`} className="text-lg capitalize hover:underline hover:underline-offset-4">
                    {value.name}
                </Link>
            ))}
        </div>

    )

    return (
        <>
            {Object.keys(version).length > 0 && (
                <div className="flex-1 flex flex-col border-2 rounded-lg p-4 hover:bg-slate-100 hover:shadow-md transition-all duration-75">
                    <div className="flex flex-col gap-4">
                        <h2 className='text-2xl font-semibold capitalize text-center mb-2'>{name}</h2>
                        <InfoText title='Generation' value={version.generation?.name} />
                        <DisplayData title='Pokedexes' data={version.pokedexes} />
                        <DisplayData title='Regions' data={version.regions} />
                        <VersionLink title='Versions' data={version.versions} />
                        <DisplayData title='Move Learn Methods' data={version.move_learn_methods} />
                    </div>
                </div>
            )}
        </>

    )
}

export default VersionGroupCard