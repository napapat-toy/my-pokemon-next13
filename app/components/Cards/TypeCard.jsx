import { colours } from "@/data"
import Link from "next/link"

const TypeCard = ({ typeName }) => {
    return (
        <div className="flex items-center justify-center">
            <div
                style={{ backgroundColor: colours[typeName] }}
                className={`p-2 text-white rounded-md`}
            >
                <Link href={`/types/${typeName}`} className='text-lg capitalize '>
                    {typeName}
                </Link>
            </div>
        </div>
    )
}

export default TypeCard