import React from 'react'

const layout = ({ children }) => {
    return (
        <div className='w-full flex flex-col h-fit items-center justify-center bg-white rounded-md p-4 mx-4 max-w-[1440px] shadow-lg'>
            {children}
        </div>
    )
}

export default layout