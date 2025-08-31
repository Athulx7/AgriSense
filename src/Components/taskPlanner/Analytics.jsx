import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Analytics() {
  const stats = [
    { label: "Total Tasks", value: 127, color: "bg-blue-100 text-blue-600", icon: "✅" },
    { label: "Completed", value: 98, color: "bg-green-100 text-green-600", icon: "✔️" },
    { label: "In Progress", value: 22, color: "bg-yellow-100 text-yellow-600", icon: "⏳" },
    { label: "Overdue", value: 7, color: "bg-red-100 text-red-600", icon: "⚠️" },
  ];

  const completionRates = [
    { month: "Jan", completed: 45, total: 52 },
    { month: "Feb", completed: 38, total: 44 },
    { month: "Mar", completed: 52, total: 58 },
    { month: "Apr", completed: 48, total: 55 },
    { month: "May", completed: 56, total: 62 },
    { month: "Jun", completed: 32, total: 45 },
  ];

  const categories = [
    { name: "Irrigation", value: 24, percent: 28, color: "text-blue-500" },
    { name: "Fertilization", value: 18, percent: 21, color: "text-green-500" },
    { name: "Pest Control", value: 15, percent: 18, color: "text-red-500" },
    { name: "Soil Testing", value: 12, percent: 14, color: "text-purple-500" },
    { name: "Equipment Maintenance", value: 10, percent: 12, color: "text-gray-600" },
    { name: "Harvesting", value: 6, percent: 7, color: "text-yellow-500" },
  ];

  return (
    <div className="p-6 space-y-6 min-h-screen">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="rounded-2xl shadow-sm bg-white p-6 flex flex-col items-center justify-center"
          >
            <div className={`p-4 rounded-xl ${stat.color} text-2xl`}>
              <FontAwesomeIcon icon={stat.icon} />
            </div>
            <h2 className="text-3xl font-bold mt-2">{stat.value}</h2>
            <p className="text-gray-500">{stat.label}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Task Completion */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Task Completion Rate</h3>
          <div className="space-y-4">
            {completionRates.map((item, idx) => {
              const percent = Math.round((item.completed / item.total) * 100);
              return (
                <div key={idx}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{item.month}</span>
                    <span>
                      {item.completed}/{item.total} ({percent}%)
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-500 h-2 rounded-full"
                      style={{ width: `${percent}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Tasks by Category */}
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="text-lg font-semibold mb-4">Tasks by Category</h3>
          <ul className="space-y-2">
            {categories.map((cat, idx) => (
              <li
                key={idx}
                className="flex justify-between text-sm items-center"
              >
                <span className={`flex items-center gap-2 ${cat.color}`}>
                  ● {cat.name}
                </span>
                <span className="text-gray-600">
                  {cat.value} ({cat.percent}%)
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Analytics;
