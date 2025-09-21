import { faCalendar, faChartLine, faIndianRupeeSign, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function ExpensePverView() {
    const summary = [
        { label: "Total Expenses", value: "$8,450", color: "bg-blue-600 dark:bg-blue-900", icon: faIndianRupeeSign },
        { label: "Budget Used", value: "67%", color: "bg-green-600 dark:bg-green-900", icon: faChartLine },
        { label: "This Month", value: "$2,481", color: "bg-purple-600 dark:bg-purple-900", icon: faCalendar },
        { label: "Pending", value: "$320", color: "bg-orange-600 dark:bg-orange-900", icon: faTriangleExclamation },
    ];

    const breakdown = [
        { name: "Fertilizers & Nutrients", amount: 3250, percent: 38, color: "bg-green-500" },
        { name: "Fuel & Energy", amount: 1850, percent: 22, color: "bg-blue-500" },
        { name: "Equipment & Maintenance", amount: 1420, percent: 17, color: "bg-yellow-500" },
        { name: "Seeds & Plants", amount: 980, percent: 12, color: "bg-red-500" },
        { name: "Other", amount: 950, percent: 11, color: "bg-purple-500" },
    ];

    const recentExpenses = [
        { title: "NPK Fertilizer - 50 bags", date: "2024-06-14", category: "Fertilizers", amount: 1250.0, status: "paid" },
        { title: "Fuel for tractors", date: "2024-06-13", category: "Fuel", amount: 485.75, status: "paid" },
        { title: "Irrigation pipe repairs", date: "2024-06-12", category: "Equipment Maintenance", amount: 320.5, status: "pending" },
        { title: "Organic pesticide spray", date: "2024-06-11", category: "Pest Control", amount: 275.25, status: "paid" },
        { title: "Soil testing kit", date: "2024-06-10", category: "Testing & Analysis", amount: 150.0, status: "paid" },
    ];

    return (
        <div className="p-6 space-y-6 bg-gray-50 dark:bg-gray-900 min-h-screen">

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {summary.map((item, idx) => (
                    <div
                        key={idx}
                        className={`${item.color} text-white rounded-md shadow-md p-6 flex flex-col justify-center`}
                    >
                        <FontAwesomeIcon icon={item.icon} className="text-2xl" />
                        <h2 className="text-2xl font-bold mt-2">{item.value}</h2>
                        <p className="text-sm">{item.label}</p>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    
                <div className="bg-white dark:bg-gray-800 rounded-md shadow-md p-6">
                    <h3 className="text-lg font-semibold mb-4">Expense Breakdown</h3>
                    <div className="space-y-4">
                        {breakdown.map((item, idx) => (
                            <div key={idx}>
                                <div className="flex justify-between text-sm mb-1">
                                    <span className="flex items-center gap-2">
                                        <span
                                            className={`inline-block w-3 h-3 rounded-full ${item.color}`}
                                        ></span>
                                        {item.name}
                                    </span>
                                    <span className="font-medium">
                                        ${item.amount.toLocaleString()} ({item.percent}%)
                                    </span>
                                </div>
                                <div className="w-full bg-gray-200 rounded-full h-2">
                                    <div
                                        className={`${item.color} h-2 rounded-full`}
                                        style={{ width: `${item.percent}%` }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-md shadow-md p-6">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold">Recent Expenses</h3>
                        <button className="text-blue-500 text-sm font-medium">View All</button>
                    </div>
                    <ul className="space-y-3">
                        {recentExpenses.map((exp, idx) => (
                            <li
                                key={idx}
                                className="flex justify-between items-center bg-gray-50 dark:bg-gray-900 rounded-lg p-3"
                            >
                                <div>
                                    <p className="font-medium">{exp.title}</p>
                                    <p className="text-sm text-gray-500">
                                        {exp.date} • {exp.category}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="font-semibold">${exp.amount.toFixed(2)}</p>
                                    <span
                                        className={`text-xs px-2 py-1 rounded ${exp.status === "paid"
                                                ? "bg-green-100 dark:bg-green-900 dark:text-green-400 text-green-600"
                                                : "bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-400 text-yellow-600"
                                            }`}
                                    >
                                        {exp.status}
                                    </span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

        </div>
    );
}

export default ExpensePverView;
