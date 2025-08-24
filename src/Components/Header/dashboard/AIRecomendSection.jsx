import { faBug, faDroplet, faGear, faHourglassStart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function AIRecomendSection() {
    return (
        <>
            <div className=' bg-white dark:bg-gray-900 p-6 rounded-2xl m-6'>
                <div className='flex items-center justify-between'>
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-4">AI Recommendations</h2>
                    <div className="bg-purple-100 dark:bg-purple-950 p-2 rounded-lg">
                        <FontAwesomeIcon icon={faGear} className="text-gray-500 dark:text-gray-400" />
                    </div>
                </div>

                 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
                    <div className="flex items-center justify-between bg-blue-50  dark:bg-blue-950 dark:border-blue-700 shadow-sm rounded-lg p-5 hover:shadow-md transition-all">
                        <div className="flex flex-col flex-grow">
                            <div className='flex'>
                                <div className='p-2 w-9 h-9 text-sm rounded-full text-white bg-blue-400'><FontAwesomeIcon icon={faDroplet} className={`h-10 w-10`} /></div>
                                <div className='mt-1 ml-2 text-md font-bold text-blue-500 dark:text-blue-300'> Irrigation Alert </div>
                            </div>

                            <span className="text-sm text-blue-500 dark:text-blue-300 my-2">Tomato field shows low soil moisture. Recommend watering within 2 hours.</span>
                           <div className='text-sm text-white font-semibold cursor-pointer bg-blue-500 w-26 text-center rounded-2xl mt-2 p-1 '>
                            View Details
                           </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between bg-green-50  dark:bg-green-950 dark:border-green-100 shadow-sm rounded-lg p-5 hover:shadow-md transition-all">
                        <div className="flex flex-col flex-grow">
                            <div className='flex'>
                                <div className='p-2 w-9 h-9 text-sm rounded-full text-white bg-green-500'><FontAwesomeIcon icon={faHourglassStart} className={`h-10 w-10`} /></div>
                                <div className='mt-1 ml-2 text-md font-bold text-green-500 dark:text-green-300'> Fertilizer Timing </div>
                            </div>

                            <span className="text-sm text-geen-500 dark:text-green-300 my-2">Wheat crop is ready for second NPK application based on growth stage analysis.</span>
                           <div className='text-sm text-white font-semibold cursor-pointer bg-green-500 w-26 text-center rounded-2xl mt-2 p-1 '>
                           Schedule Task
                           </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-between bg-yellow-50 dark:bg-yellow-950 dark:border-gray-100 shadow-sm rounded-lg p-5 hover:shadow-md transition-all">
                        <div className="flex flex-col flex-grow">
                            <div className='flex'>
                                <div className='p-2 w-9 h-9 text-sm rounded-full text-white bg-yellow-400'><FontAwesomeIcon icon={faBug} className={`h-10 w-10`} /></div>
                                <div className='mt-1 ml-2 text-md font-bold text-yellow-500 dark:text-yellow-300'> Pest Risk </div>
                            </div>

                            <span className="text-sm text-yellow-500 dark:text-yellow-300 my-2">Weather conditions favor aphid growth. Consider preventive spray for cotton crop.</span>
                           <div className='text-sm text-white font-semibold cursor-pointer bg-yellow-500 w-26 text-center rounded-2xl mt-2 p-1 '>
                            Take Action
                           </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default AIRecomendSection
