import React from "react"
import { faBug, faDroplet, faGear, faHourglassStart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function TaskBoard() {
    return (
        <div className="p-6 rounded-lg min-h-screen">

            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-semibold">Task Board</h1>
                <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600">
                    + Add Task
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm p-4">
                    <h2 className="text-lg font-semibold mb-4 flex justify-between">
                        To Do <span className="bg-gray-200 dark:bg-gray-900 w-6 h-6 text-sm ps-2 rounded-full">2</span>
                    </h2>

                    <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-4 mb-4">
                        <div className="flex justify-between items-start">
                            <h3 className="font-semibold">Soil Testing - Field A</h3>
                            <span className="bg-red-100 dark:bg-red-800 dark:text-red-400 text-red-600 text-xs px-2 py-1 rounded-full">
                                high
                            </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                            Conduct pH and nutrient analysis for corn field
                        </p>
                        <div className="flex flex-wrap gap-2 mb-2">
                            <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 dark:text-blue-400 text-blue-600 rounded-full">soil</span>
                            <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 dark:text-blue-400 text-blue-600 rounded-full">testing</span>
                            <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 dark:text-blue-400 text-blue-600 rounded-full">field-a</span>
                        </div>
                        <p className="text-xs text-gray-500">Due: 2024-06-15</p>
                        <p className="text-xs text-gray-500 mb-2">John Mitchell</p>

                        <div className="flex gap-2">
                            <button className="flex-1 py-1 bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg hover:bg-gray-200">
                                Edit
                            </button>
                            <button className="flex-1 py-1 bg-green-100 dark:bg-green-900 dark:hover:bg-green-800 dark:text-green-400 text-green-600 rounded-lg hover:bg-green-200">
                                Start
                            </button>
                        </div>
                    </div>

                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm p-4">
                    <h2 className="text-lg font-semibold mb-4 flex justify-between">
                        In Progress{" "}
                        <span className="bg-gray-200 dark:bg-gray-900 w-6 h-6 text-sm ps-2 rounded-full">2</span>
                    </h2>

                    <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-4 mb-4">
                        <div className="flex justify-between items-start">
                            <h3 className="font-semibold">Fertilizer Application</h3>
                            <span className="bg-red-100 dark:bg-red-800 dark:text-red-400 text-red-600 text-xs px-2 py-1 rounded-full">
                                high
                            </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                            Apply NPK fertilizer to soybean fields
                        </p>
                        <div className="flex flex-wrap gap-2 mb-2">
                            <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 dark:text-blue-400 text-blue-600 rounded-full">fertilizer</span>
                            <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 dark:text-blue-400 text-blue-600 rounded-full">soybeans</span>
                        </div>
                        <p className="text-xs text-gray-500">Due: 2024-06-14</p>
                        <p className="text-xs text-gray-500 mb-2">Sarah Wilson</p>

                        <div className="flex gap-2">
                            <button className="flex-1 py-1 bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg hover:bg-gray-200">
                                Edit
                            </button>
                            <button className="flex-1 py-1 bg-green-100 dark:bg-green-900 dark:hover:bg-green-800 dark:text-green-400 text-green-600 rounded-lg hover:bg-green-200">
                                Complete
                            </button>
                        </div>
                    </div>

                </div>

                <div className="bg-gray-50 dark:bg-gray-800 rounded-xl shadow-sm p-4">
                    <h2 className="text-lg font-semibold mb-4 flex justify-between">
                        Completed{" "}
                        <span className="bg-gray-200 dark:bg-gray-900 w-6 h-6 text-sm ps-2 rounded-full">2</span>
                    </h2>

                    <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-4 mb-4">
                        <div className="flex justify-between items-start">
                            <h3 className="font-semibold">Seed Planting - Wheat</h3>
                            <span className="bg-red-100 dark:bg-red-800 dark:text-red-400 text-red-600 text-xs px-2 py-1 rounded-full">
                                high
                            </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                            Complete wheat seeding in Field C
                        </p>
                        <div className="flex flex-wrap gap-2 mb-2">
                            <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 dark:text-blue-400 text-blue-600 rounded-full">planting</span>
                            <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 dark:text-blue-400 text-blue-600 rounded-full">wheat</span>
                        </div>
                        <p className="text-xs text-gray-500">Due: 2024-06-10</p>
                        <p className="text-xs text-gray-500 mb-2">John Mitchell</p>

                        <div className="flex gap-2">
                            <button className="flex-1 py-1 bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg hover:bg-gray-200">
                                Edit
                            </button>
                        </div>
                    </div>

                    <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-4 mb-4">
                        <div className="flex justify-between items-start">
                            <h3 className="font-semibold">Seed Planting - Wheat</h3>
                            <span className="bg-red-100 dark:bg-red-900 dark:text-red-400 text-red-600 text-xs px-2 py-1 rounded-full">
                                high
                            </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-2">
                            Complete wheat seeding in Field C
                        </p>
                        <div className="flex flex-wrap gap-2 mb-2">
                            <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 dark:text-blue-400 text-blue-600 rounded-full">planting</span>
                            <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900 dark:text-blue-400 text-blue-600 rounded-full">wheat</span>
                        </div>
                        <p className="text-xs text-gray-500">Due: 2024-06-10</p>
                        <p className="text-xs text-gray-500 mb-2">John Mitchell</p>

                        <div className="flex gap-2">
                            <button className="flex-1 py-1 bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-lg hover:bg-gray-200">
                                Edit
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>


            <div className=' bg-white dark:bg-gray-800 rounded-2xl p-5 mt-5'>
                <div className='flex items-center justify-between'>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">Quick Stats</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    <div className="flex flex-col items-center justify-center bg-blue-50  dark:bg-blue-950 dark:border-blue-700 shadow-sm rounded-lg p-5 hover:shadow-md transition-all">
                        <div className="font-bold text-2xl text-blue-500">7</div>
                        <div className="text-blue-400">Total Active Tasks</div>
                    </div>

                    <div className="flex flex-col items-center justify-center bg-red-50  dark:bg-red-950 dark:border-red-700 shadow-sm rounded-lg p-5 hover:shadow-md transition-all">
                        <div className="font-bold text-2xl text-red-500">2</div>
                        <div className="text-red-400">High Priority</div>
                    </div>

                    <div className="flex flex-col items-center justify-center bg-yellow-50  dark:bg-yellow-950 dark:border-yellow-700 shadow-sm rounded-lg p-5 hover:shadow-md transition-all">
                        <div className="font-bold text-2xl text-yellow-500">1</div>
                        <div className="text-yellow-400">Due Today</div>
                    </div>

                    <div className="flex flex-col items-center justify-center bg-green-50  dark:bg-green-950 dark:border-green-700 shadow-sm rounded-lg p-5 hover:shadow-md transition-all">
                        <div className="font-bold text-2xl text-green-500">86%</div>
                        <div className="text-green-400">Completion Rate</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default TaskBoard
