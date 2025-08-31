import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function MainTaskPlanner() {
    const tabs = [
        { name: "Task Board", path: "taskboard" },
        { name: "Calendar", path: "calendar" },
        { name: "Analytics", path: "analytics" },
    ]
    return (
        <div className='bg-primary dark:bg-gray-800 dark:text-white pb-2'>
            <div className='pt-10 px-8'>
                <div className='text-3xl font-bold'>
                    Task Manager
                </div>
                <div className='py-3 text-gray-700 dark:text-gray-300'>Plan, track, and manage all your farming activities efficiently</div>
            </div>

            <div className='bg-white p-5 m-5 rounded-lg dark:bg-gray-900 dark:border-gray-100'>
                <div className="px-8 border-b border-gray-300 dark:border-gray-700 flex space-x-6 ">
                    {tabs.map((tab) => (
                        <NavLink
                            key={tab.path}
                            to={tab.path}
                            className={({ isActive }) =>
                                `pb-2 font-medium ${isActive
                                    ? "border-b-2 border-green-500 text-green-600"
                                    : "text-gray-600 dark:text-gray-300 hover:text-green-600"
                                }`
                            }
                        >
                            {tab.name}
                        </NavLink>
                    ))}


                </div>
                <div className="p-8">
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default MainTaskPlanner
