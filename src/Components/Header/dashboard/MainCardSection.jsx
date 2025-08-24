import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSeedling, faUser, faChartLine, faWallet, faMap, faCalendar, faIndianRupeeSign } from "@fortawesome/free-solid-svg-icons"

function MainCardSection() {
    const cards = [
        { title: "Active Farms", number: 3, subtitle: "+1 this month", icon: faSeedling, color: "text-green-600 dark:text-green-500",bg:"bg-green-100 dark:bg-green-950",border:"border-green-600 dark:border-green-900" },
        { title: "Total Area", number: '12.5 acres', subtitle: "Across all farms", icon: faMap, color: "text-blue-600 dark:text-blue-500",bg:"bg-blue-100 dark:bg-blue-950",border:"border-blue-600 dark:border-blue-900" },
        { title: "Current Season", number: "Kharif 2024", subtitle: "Day 45 of cycle", icon: faCalendar, color: "text-purple-600 dark:text-purple-500",bg:"bg-purple-100 dark:bg-purple-900" ,border:"border-purple-600 dark:border-purple-900"},
        { title: "Expected Yield", number: "₹2,45,000", subtitle: "+15% vs last season", icon: faIndianRupeeSign, color: "text-yellow-600 dark:text-yellow-500",bg:"bg-yellow-100 dark:bg-yellow-900",border:"border-yellow-600 dark:border-yellow-900" },
    ]

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="flex items-center justify-between bg-white dark:bg-gray-900 dark:border-gray-100 shadow-sm rounded-2xl p-5 hover:shadow-md transition-all"
                >
                    <div className="flex flex-col flex-grow">
                        <span className="text-sm text-gray-500 dark:text-gray-400">{card.title}</span>
                        <span className="text-2xl font-bold text-gray-900 dark:text-white my-2">{card.number}</span>
                        <span className="text-sm text-gray-600 dark:text-gray-300">{card.subtitle}</span>
                    </div>

                    <div className={`${card.bg} ${card.border} ml-4 border-1 rounded-lg bg-amber-100 p-4`}>
                        <FontAwesomeIcon icon={card.icon} className={`h-10 w-10 ${card.color}`} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default MainCardSection
