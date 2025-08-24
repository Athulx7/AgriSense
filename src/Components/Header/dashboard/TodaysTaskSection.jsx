import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

function TodaysTaskSection() {
  const tasks = [
    { title: "Water tomato field", desc: "Check soil moisture and water if needed", time: "6:00 AM", farm: "Farm A", status: "high", done: false },
    { title: "Apply fertilizer to wheat crop", desc: "NPK fertilizer application - 2nd dose", time: "8:30 AM", farm: "Farm B", status: "medium", done: true },
    { title: "Pest inspection", desc: "Check for aphids and caterpillars", time: "10:00 AM", farm: "Farm C", status: "high", done: false },
  ];

  return (
    <>
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-2xl p-6 flex flex-col h-[550px]">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">Today's Tasks</h2>
          <div className='flex'>
            <span className="text-sm text-gray-500 dark:text-gray-400 mr-2 mt-2">4 pending</span>
            <div className="bg-green-100 dark:bg-green-950 p-2 rounded-lg">
              <FontAwesomeIcon icon={faSquareCheck} className="text-green-500" />
            </div>
          </div>

        </div>

        <div className="space-y-3 flex-1 overflow-y-auto max-h-96">
          {tasks.map((task, i) => (
            <div
              key={i}
              className="flex items-start p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
            >
              <input type="checkbox" defaultChecked={task.done} className="mt-1 mr-3" />
              <div className="flex-1">
                <p
                  className={`font-medium ${task.done ? "line-through text-gray-400" : "text-gray-900 dark:text-white"
                    }`}
                >
                  {task.title}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-300">{task.desc}</p>
                <p className="text-xs text-gray-500 mt-1">
                  {task.time} · {task.farm}
                </p>
              </div>
              <span
                className={`ml-3 px-2 py-1 rounded text-xs ${task.status === "high"
                    ? "bg-red-100 text-red-600 dark:bg-red-950 dark:text-red-300"
                    : "bg-yellow-100 text-yellow-600 dark:bg-yellow-950 dark:text-yellow-300"
                  }`}
              >
                {task.status}
              </span>
            </div>
          ))}
        </div>


        <button className="mt-4 w-full py-2 text-green-600 bg-green-50 rounded-lg font-semibold hover:bg-green-100 dark:bg-gray-900 dark:hover:bg-green-950 cursor-pointer">
          + Add New Task
        </button>
      </div>

    </>
  )
}

export default TodaysTaskSection
