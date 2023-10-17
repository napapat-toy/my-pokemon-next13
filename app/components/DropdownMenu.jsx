import { Menu, Transition } from '@headlessui/react'

export default function DropdownMenu({ dataMenu, title, current, handleClick }) {
    return (
        <div className="w-full md:w-56 flex items-center justify-center">
            <Menu as="div" className="inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md bg-black bg-opacity-40 px-4 py-4 md:py-2 text-md md:textsm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        {title}
                    </Menu.Button>
                </div>
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
                        {dataMenu.map((value) => (
                            <div key={`Value-${value}`} className="px-1 py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <button
                                            onClick={() => handleClick(value)}
                                            className={`${active ? 'bg-sky-500 text-white' : 'text-gray-900'} ${value === current && 'bg-sky-600 hover:bg-sky-500 text-white'} group flex w-full items-center rounded-md px-2 py-2 text-sm`}
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
        </div>
    )
}