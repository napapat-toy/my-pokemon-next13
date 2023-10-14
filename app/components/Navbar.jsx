import Link from "next/link"

const Navbar = () => {
    return (
        <div className="fixed top-0 w-full p-4 bg-sky-300 flex justify-center">
            <div className="max-w-[1440px] w-full flex justify-between">
                <Link href='/' className="text-4xl font-semibold text-gray-800 tracking-wide">
                    Pokemon App
                </Link>
                <Link href='/'>
                    <button className="outline-none p-2 bg-white rounded-md">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Navbar