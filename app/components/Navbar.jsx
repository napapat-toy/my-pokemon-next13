'use client'

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

const Navbar = () => {
    const pathname = usePathname()
    const router = useRouter()

    return (
        <nav className="sticky z-50 top-0 w-full p-4 bg-sky-300 flex justify-center">
            <div className="max-w-[1440px] w-full flex justify-between items-center">
                {pathname !== '/' && (
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="outline-none p-2 bg-white rounded-md hover:bg-slate-100 transition-all duration-75">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                            <path fillRule="evenodd" d="M9.53 2.47a.75.75 0 010 1.06L4.81 8.25H15a6.75 6.75 0 010 13.5h-3a.75.75 0 010-1.5h3a5.25 5.25 0 100-10.5H4.81l4.72 4.72a.75.75 0 11-1.06 1.06l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 011.06 0z" clipRule="evenodd" />
                        </svg>
                    </button>
                )}
                <h1 className="text-4xl font-semibold text-gray-800 tracking-tight">
                    Pokemon App
                </h1>
                <Link href='/'>
                    <button type="button" className="outline-none p-2 bg-white rounded-md hover:bg-slate-100 transition-all duration-75">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                        </svg>
                    </button>
                </Link>
            </div>
        </nav>
    )
}

export default Navbar