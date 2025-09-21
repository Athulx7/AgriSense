import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFlask,
    faSeedling,
    faGasPump,
    faTools,
    faBug,
    faUser,
} from "@fortawesome/free-solid-svg-icons";

function ExpCategory() {
    const categories = [
        {
            name: "Fertilizers & Nutrients",
            transactions: 12,
            budget: 5000,
            spent: 3250,
            color: "green",
            icon: faFlask,
        },
        {
            name: "Seeds & Plants",
            transactions: 4,
            budget: 1500,
            spent: 980,
            color: "red",
            icon: faSeedling,
        },
        {
            name: "Fuel & Energy",
            transactions: 8,
            budget: 3000,
            spent: 1850,
            color: "blue",
            icon: faGasPump,
        },
        {
            name: "Equipment & Maintenance",
            transactions: 6,
            budget: 2500,
            spent: 1420,
            color: "yellow",
            icon: faTools,
        },
        {
            name: "Pest Control",
            transactions: 3,
            budget: 800,
            spent: 520,
            color: "purple",
            icon: faBug,
        },
        {
            name: "Labor & Services",
            transactions: 15,
            budget: 4000,
            spent: 2100,
            color: "gray",
            icon: faUser,
        },
    ];

    return (
        <div className="p-6">
            <h2 className="text-lg font-semibold mb-4">Expense Categories</h2>
            <p className="text-gray-500 text-sm mb-6">
                Track spending across different farm operations
            </p>

            <div className="grid md:grid-cols-3 gap-4">
                {categories.map((cat, index) => {
                    const percentage = Math.round((cat.spent / cat.budget) * 100);

                    return (
                        <div
                            key={index}
                            className={`p-4 border border-gray-400 rounded-lg shadow-sm bg-white dark:bg-gray-800`}
                        >
                            <div className="flex items-center space-x-2 mb-2">
                                <FontAwesomeIcon
                                    icon={cat.icon}
                                    className={`text-${cat.color}-500`}
                                />
                                <h3 className="font-semibold">{cat.name}</h3>
                            </div>

                            <p className="text-sm text-gray-500 mb-1">
                                {cat.transactions} transactions
                            </p>

                            <div className="flex justify-between text-sm font-medium mb-1">
                                <span>Budget</span>
                                <span>${cat.budget.toLocaleString()}</span>
                            </div>

                            <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden mb-1">
                                <div
                                    className={`h-2 bg-${cat.color}-500`}
                                    style={{ width: `${percentage}%` }}
                                ></div>
                            </div>

                            <div className="flex justify-between text-sm text-gray-600">
                                <span>${cat.spent.toLocaleString()}</span>
                                <span>{percentage}%</span>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

export default ExpCategory;
