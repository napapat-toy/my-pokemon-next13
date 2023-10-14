import DropdownMenu from "./DropdownMenu"

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

    const ButtonPage = ({ goToPage }) => (
        <button
            type="button"
            onClick={() => handlePagination(goToPage)}
            className={`w-[46px] p-4 flex items-center justify-center flex-1 text-center ${currentPage === goToPage ? 'bg-slate-900' : 'bg-slate-600 hover:bg-slate-700'} text-white font-semibold rounded-xl`}>
            {goToPage}
        </button>
    )

    const ButtonArrow = ({ children, onClick, disableCondition, svgD }) => (
        <button
            onClick={() => onClick()}
            disabled={disableCondition}
            className={`w-[46px] p-4 flex items-center justify-center flex-1 text-center bg-slate-600 hover:bg-slate-700 text-white font-semibold rounded-xl disabled:bg-slate-400`}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d={svgD} />
            </svg>
            {children}
        </button >
    )

    const paginateSet = genPageSet()

    return (
        <div className="flex justify-between items-center gap-4 my-6">
            <ButtonArrow
                disableCondition={!previous || currentPage === 1}
                onClick={() => handlePagination(currentPage - 1)}
                svgD={"M15.75 19.5L8.25 12l7.5-7.5"}
            />
            <div className="hidden md:flex items-center gap-4">
                {currentPage > startPage + 1 && <ButtonPage goToPage={startPage} />}
                {currentPage > startPage + 2 && <div className="text-4xl flex-1 hidden md:block">...</div>}

                {paginateSet.map((count) => (
                    <ButtonPage key={`pagination-${count}`} goToPage={count} />
                ))}

                {currentPage < lastPage - 2 && <div className="text-4xl flex-1 hidden md:block">...</div>}
                {paginateSet[paginateSet.length - 1] !== lastPage && <ButtonPage goToPage={lastPage} />}
            </div>
            <div className="flex w-full justify-center items-center md:hidden">
                <DropdownMenu
                    dataMenu={paginate}
                    title={currentPage}
                    current={currentPage}
                    handleClick={handlePagination}
                />
            </div>
            <ButtonArrow
                disableCondition={!next || currentPage === paginate.length}
                onClick={() => handlePagination(currentPage + 1)}
                svgD={"M8.25 4.5l7.5 7.5-7.5 7.5"}
            />
        </div>
    )
}

export default Pagination