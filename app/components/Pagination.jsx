import { Menu, Transition } from "@headlessui/react"

const Pagination = ({ handlePagination, paginate = [], currentPage, next, previous }) => {

    const startPage = 1
    const lastPage = paginate.length

    const genPageSet = () => {
        let startIndex = currentPage - 2
        let endIndex = currentPage + 1
        if (startIndex < 0) {
            startIndex = 0
        }
        if (currentPage < 4) {
            endIndex = currentPage + (5 - currentPage)
        }
        if (currentPage > paginate.length - 4) {
            startIndex = paginate.length - 5
        }
        if (endIndex > paginate.length) {
            endIndex = paginate.length
        }
        const pageSet = paginate.slice(startIndex, endIndex)
        return pageSet
    }

    const paginateSet = genPageSet()

    const ArrowIcon = ({ direction }) => {
        const left = 'M15.75 19.5L8.25 12l7.5-7.5'
        const right = 'M8.25 4.5l7.5 7.5-7.5 7.5'

        return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d={direction === 'right' ? right : left} />
            </svg>
        )
    }

    const ButtonPage = ({ pageNumber }) => (
        <button
            type="button"
            onClick={() => handlePagination(pageNumber)}
            className={`inline-flex items-center px-4 py-2.5 text-md font-semibold ring-1 ring-inset ring-gray-300 ${currentPage === pageNumber ? 'text-white bg-sky-600 hover:bg-sky-500' : 'text-gray-400 bg-white hover:bg-sky-500 hover:text-white'} transition-all duration-75`}
        >
            {pageNumber}
        </button>
    )

    const ButtonArrow = ({ children, onClick, disableCondition, direction = 'left' }) => (
        <button
            onClick={() => onClick()}
            disabled={disableCondition}
            className={`inline-flex items-center ${direction === 'left' ? 'rounded-l-md' : 'rounded-r-md flex-row-reverse'} gap-2 p-2 px-4 text-gray-400 ring-1 ring-inset ring-gray-300 bg-white hover:bg-sky-500 hover:text-white disabled:text-gray-300 disabled:bg-gray-50`}
        >
            <ArrowIcon direction={direction} />
            {children}
        </button >
    )

    const ButtonMenu = ({ title }) => (
        <Menu as="div" className="w-full inline-block text-left">
            <Menu.Button className={`w-full inline-flex items-center justify-center px-4 py-2.5 text-md font-semibold ring-1 ring-inset ring-gray-300 text-gray-400 bg-white hover:bg-sky-500 hover:text-white transition-all duration-75 cursor-pointer`}>
                {title}
            </Menu.Button>
            <Transition
                as='div'
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                    className="z-20 absolute overflow-auto max-h-80 right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                    {paginate.map((value) => (
                        <div key={`Value-${value}`} className="px-1 py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={() => handlePagination(value)}
                                        className={`${active ? 'bg-sky-500 text-white' : 'text-gray-900'} ${value === currentPage && 'bg-sky-600 hover:bg-sky-500 text-white'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                                    >
                                        {value}
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    ))}
                </Menu.Items>
            </Transition>
        </Menu>
    )

    const ButtonPaginate = () => (
        <div className="flex -space-x-px">
            {currentPage > startPage + 1 && <ButtonPage pageNumber={startPage} />}
            {currentPage > startPage + 2 && <ButtonMenu title='...' />}
            {paginateSet.map((count) => (
                <ButtonPage key={`pagination-${count}`} pageNumber={count} />
            ))}
            {currentPage < lastPage - 2 && <ButtonMenu title='...' />}
            {paginateSet[paginateSet.length - 1] !== lastPage && <ButtonPage pageNumber={lastPage} />}
        </div>
    )

    return (
        <div className="w-full md:w-fit flex items-center justify-between border-t border-gray-200 bg-white p-4 rounded-md my-6">
            <div className="hidden md:flex flex-1 items-center justify-between -space-x-px">
                <ButtonArrow
                    disableCondition={!previous || currentPage === 1}
                    onClick={() => handlePagination(currentPage - 1)}
                    direction='left'
                />
                <ButtonPaginate />
                <ButtonArrow
                    disableCondition={!next || currentPage === paginate.length}
                    onClick={() => handlePagination(currentPage + 1)}
                    direction='right'
                />
            </div>
            <div className="flex md:hidden items-center flex-1 w-full -space-x-px">
                <ButtonArrow
                    disableCondition={!previous || currentPage === 1}
                    onClick={() => handlePagination(currentPage - 1)}
                    direction='left'
                >
                    Back
                </ButtonArrow>
                <ButtonMenu title={`${currentPage} / ${lastPage}`} />
                <ButtonArrow
                    disableCondition={!next || currentPage === paginate.length}
                    onClick={() => handlePagination(currentPage + 1)}
                    direction='right'
                >
                    Next
                </ButtonArrow>
            </div>
        </div >
    )
}

export default Pagination