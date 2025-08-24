import React from 'react'
import MainCardSection from '../../Components/Header/dashboard/MainCardSection'
import WeatherForeCastSection from '../../Components/Header/dashboard/WeatherForeCastSection'
import TodaysTaskSection from '../../Components/Header/dashboard/TodaysTaskSection'
import CropStatusSection from '../../Components/Header/dashboard/CropStatusSection'
import AIRecomendSection from '../../Components/Header/dashboard/AIRecomendSection'

function MainDashboard() {
    return (
        <div className='bg-primary dark:bg-gray-800 dark:text-white'>
            <div className='pt-10 px-8'>
                <div className='text-3xl font-bold'>
                    Farm Dashboard
                </div>
                <div className='py-3 text-gray-700 dark:text-gray-300'>Monitor your crops, tasks, and farm performance in real-time</div>
            </div>

            <MainCardSection />

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                <WeatherForeCastSection />
                <TodaysTaskSection />
                <CropStatusSection />
            </div>

            <div className='pb-1 h-[300px] max-h-[500px]'>
                <AIRecomendSection />
            </div>
        </div>
    )
}

export default MainDashboard
