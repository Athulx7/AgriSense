import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { useState } from "react"

function Calendar() {
    const [selectedDate, setSelectedDate] = useState(null)
    const [showModal, setShowModal] = useState(false)

    const handleDateClick = (date) => {
        setSelectedDate(date)
        setShowModal(true)
    }


    const tasks = [
        {
            date: "6/14/2024",
            items: [
                { label: "Fertilizer Application", color: "bg-green-500", priority: "high", priorityColor: "bg-red-100 dark:bg-red-900 dark:text-red-400 text-red-500" },
                { label: "Soil Moisture Check", color: "bg-yellow-500", priority: "low", priorityColor: "bg-green-100 dark:bg-green-900 dark:text-green-400 text-green-600" },
            ],
        },
        {
            date: "6/15/2024",
            items: [
                { label: "Soil Testing - Field A", color: "bg-purple-500", priority: "high", priorityColor: "bg-red-100 dark:bg-red-900 dark:text-red-400  text-red-500" },
            ],
        },
        {
            date: "6/16/2024",
            items: [
                { label: "Pest Monitoring", color: "bg-red-500", priority: "medium", priorityColor: "bg-yellow-100  dark:bg-yellow-900 dark:text-yellow-400  text-yellow-600" },
                { label: "Equipment Maintenance", color: "bg-gray-500", priority: "medium", priorityColor: "bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-400 text-yellow-600" },
            ],
        },
        {
            date: "6/18/2024",
            items: [
                { label: "Irrigation System Check", color: "bg-blue-500", priority: "medium", priorityColor: "bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-400 text-yellow-600" },
            ],
        },
    ];

    const categories = [
        { label: "Fertilizer & Nutrients", color: "bg-green-100 dark:bg-green-900 dark:text-green-500 text-green-600", dot: "bg-green-500", tasks: 3 },
        { label: "Irrigation & Water", color: "bg-blue-100 dark:bg-blue-900 dark:text-blue-500 text-blue-600", dot: "bg-blue-500", tasks: 2 },
        { label: "Pest Control", color: "bg-red-100 dark:bg-red-900 dark:text-red-500 text-red-600", dot: "bg-red-500", tasks: 1 },
        { label: "Testing & Analysis", color: "bg-purple-100 dark:bg-purple-900 dark:text-purple-500 text-purple-600", dot: "bg-purple-500", tasks: 2 },
    ];

    return (
        <div className="p-4">

            <div className="flex items-center justify-between mb-4">
                <div className="flex">
                    <div><FontAwesomeIcon icon={faArrowLeft} /></div>
                    <div className="text-lg font-semibold px-5">September 2024</div>
                    <div><FontAwesomeIcon icon={faArrowRight} /></div>

                </div>

                <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow hover:bg-green-600">
                    + Schedule Task
                </button>

            </div>
            <div className="grid grid-cols-7">
                {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
                    <div
                        key={day}
                        className="h-10 bg-gray-100 dark:bg-gray-800 dark:text-gray-400 text-gray-700 font-semibold text-sm flex items-center justify-center border-b border-gray-200 dark:border-gray-900"
                    >
                        {day}
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-7">

                {[...Array(30)].map((_, i) => {
                    const day = i + 1
                    return (
                        <div
                            key={day}
                            onClick={() => handleDateClick(day)}
                            className="h-24 border dark:border-gray-800 border-gray-100 flex items-start justify-start ps-2 pt-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800"
                        >
                            {day}
                        </div>
                    )
                })}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">

                <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm ">
                    <h2 className="text-lg font-semibold mb-4">Upcoming Tasks</h2>
                    {tasks.map((taskGroup, index) => (
                        <div key={index} className="mb-4">
                            <p className="text-gray-600 font-medium mb-2">{taskGroup.date}</p>
                            {taskGroup.items.map((task, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center justify-between bg-gray-50 dark:bg-gray-900 p-3 rounded-lg mb-2"
                                >
                                    <div className="flex items-center gap-2">
                                        <span className={`w-3 h-3 rounded-full ${task.color}`}></span>
                                        <span>{task.label}</span>
                                    </div>
                                    <span className={`px-3 py-1 text-xs rounded-full ${task.priorityColor}`}>
                                        {task.priority}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm ">
                    <h2 className="text-lg font-semibold mb-4">Task Categories</h2>
                    {categories.map((cat, index) => (
                        <div
                            key={index}
                            className={`flex items-center justify-between p-3 rounded-lg mb-2 ${cat.color}`}
                        >
                            <div className="flex items-center gap-2">
                                <span className={`w-3 h-3 rounded-full ${cat.dot}`}></span>
                                <span className="font-medium">{cat.label}</span>
                            </div>
                            <span className="text-sm">{cat.tasks} {cat.tasks > 1 ? "tasks" : "task"}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Calendar
