import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCloudSun, faCloudRain, faSun, faCloud } from "@fortawesome/free-solid-svg-icons"

function WeatherForecast() {
    const forecast = [
        { day: "Today", rain: "10%", min: "22°", max: "32°", icon: faCloudSun },
        { day: "Tomorrow", rain: "80%", min: "20°", max: "29°", icon: faCloudRain },
        { day: "Thursday", rain: "5%", min: "21°", max: "31°", icon: faSun },
        { day: "Friday", rain: "0%", min: "23°", max: "33°", icon: faSun },
    ];

    return (
        <div className="bg-white dark:bg-gray-900 shadow-md rounded-2xl p-6">
            <div className="flex items-center justify-between">
                <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-1">Weather Forecast</h2>
                <div className="bg-blue-100 dark:bg-blue-950 p-2 rounded-lg">
                    <FontAwesomeIcon icon={faCloud} className="text-blue-500" />
                </div>
            </div>

            <div className="flex items-center justify-between mt-5">
                <div>
                    <p className="text-gray-500 dark:text-gray-400">Nashik, Maharashtra</p>
                    <div className="mb-4">
                        <p className="text-3xl font-bold text-gray-900 dark:text-white">28°C</p>
                        <p className="text-md text-gray-600 dark:text-gray-300">Partly Cloudy</p>
                    </div>
                </div>
                <div className="w-15 h-15 bg-yellow-100 dark:bg-yellow-950 p-5 rounded-full">
                    <FontAwesomeIcon icon={faCloudSun} className="text-yellow-400" />
                </div>
            </div>


            <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300 mb-4">
                <div><p className="font-semibold">Humidity</p><p>65%</p></div>
                <div><p className="font-semibold">Wind</p><p>12 km/h</p></div>
                <div><p className="font-semibold">Rainfall</p><p>0 mm</p></div>
            </div>

            <h3 className="text-md font-semibold text-gray-800 dark:text-white my-5">4-Day Forecast</h3>
            <div className="space-y-2">
                {forecast.map((day, i) => (
                    <div key={i} className="my-5 flex items-center justify-between text-sm p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800">
                        <div className="flex items-center space-x-2">
                            <FontAwesomeIcon icon={day.icon} className="text-lg text-gray-600 dark:text-gray-300" />
                            <p className="font-medium">{day.day}</p>
                        </div>
                        <div className="flex items-center space-x-4">
                             <p className="text-blue-500">{day.rain}</p>
                        <p className="text-gray-600 dark:text-gray-300">{day.min}</p>
                        <p className="font-semibold">{day.max}</p>
                        </div>
                       
                    </div>
                ))}
            </div>
        </div>
    )
}

export default WeatherForecast
