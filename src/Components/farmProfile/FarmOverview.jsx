import { faChartLine, faDroplet, faIndianRupee, faLeaf } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function FarmOverview() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">

            <div className="flex flex-col gap-6">

                <div className="bg-green-600 text-white p-6 rounded-2xl">
                    <h2 className="text-xl font-semibold">Green Valley Farm</h2>
                    <p className="text-sm opacity-80">Established 2018</p>
                    <div className="flex justify-between mt-6">
                        <div>
                            <p className="text-sm">Total Area</p>
                            <p className="text-2xl font-bold">250 Acres</p>
                        </div>
                        <div>
                            <p className="text-sm">Active Crops</p>
                            <p className="text-2xl font-bold">8 Types</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
                    <h3 className="font-semibold mb-4">Farm Information</h3>
                    <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                        <li><span className="font-medium">Owner:</span> John Doe</li>
                        <li><span className="font-medium">Location:</span> Springfield</li>
                        <li><span className="font-medium">Soil Type:</span> Loamy</li>
                        <li><span className="font-medium">Irrigation:</span> Drip System</li>
                        <li><span className="font-medium">Organic Certified:</span> <span className='text-green-600 font-semibold'>Yes</span></li>
                    </ul>
                </div>
            </div>

            <div className="flex flex-col gap-6">

                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
                    <h3 className="font-semibold mb-4">Production Stats</h3>
                    <div className="grid grid-cols-2 gap-4 text-center">
                        <div className="p-3 rounded-lg bg-blue-50 dark:bg-blue-900  flex flex-col items-center">
                            <div className='bg-blue-500 rounded-full w-10 h-10 p-2 text-white'><FontAwesomeIcon icon={faChartLine} /></div>
                            <p className="text-lg font-bold dark:text-blue-400 text-blue-500">92%</p>
                            <p className="text-sm text-blue-500 dark:text-blue-400">Yield Efficiency</p>
                        </div>
                        <div className="p-3 rounded-lg bg-green-50 dark:bg-green-900 flex flex-col items-center">
                            <div className='bg-green-500 rounded-full w-10 h-10 p-2 text-white'><FontAwesomeIcon icon={faIndianRupee} /></div>
                            <p className="text-lg font-bold text-green-500 e">$1.2M</p>
                            <p className="text-sm text-green-500 ">Revenue</p>

                        </div>
                        <div className="p-3 rounded-lg bg-yellow-50 dark:bg-yellow-900 flex flex-col items-center">
                            <div className='bg-yellow-500 rounded-full w-10 h-10 p-2 text-white'><FontAwesomeIcon icon={faDroplet} /></div>
                            <p className="text-lg font-bold text-yellow-500">35%</p>
                            <p className="text-sm text-yellow-500">Water Savings</p>
                        </div>
                        <div className="p-3 rounded-lg bg-purple-50 dark:bg-purple-900 flex flex-col items-center">
                            <div className='bg-purple-500 rounded-full w-10 h-10 p-2 text-white'><FontAwesomeIcon icon={faLeaf} /></div>
                            <p className="text-lg font-bold text-purple-500">Excellent</p>
                            <p className="text-sm text-purple-500 dark:text-purple-300">Soil Health</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-sm">
                    <h3 className="font-semibold mb-4">Achievements</h3>
                    <ul className="list-disc list-inside space-y-2 text-sm text-gray-700 dark:text-gray-300">
                        <li>Best Organic Farm Award 2022</li>
                        <li>Certified Sustainable Agriculture 2023</li>
                        <li>High Yield Recognition 2024</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default FarmOverview
