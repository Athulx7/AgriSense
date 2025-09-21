import React from "react";

function MarketingTrends() {
    return (
        <div className="space-y-6 p-4">
            <div className="bg-white dark:bg-gray-900 p-4 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-4">Price Performance Comparison</h2>
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="text-left border-b">
                            <th className="p-2">Period</th>
                            <th className="p-2">Corn</th>
                            <th className="p-2">Soybeans</th>
                            <th className="p-2">Wheat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {[
                            { period: "1 Week", corn: "$4.85 ↑ +2.8%", soy: "$13.45 ↓ -1.2%", wheat: "$6.28 ↑ +3.5%" },
                            { period: "1 Month", corn: "$4.85 ↑ +8.5%", soy: "$13.45 ↓ -2.8%", wheat: "$6.28 ↑ +12.3%" },
                            { period: "3 Months", corn: "$4.85 ↑ +15.2%", soy: "$13.45 ↑ +5.6%", wheat: "$6.28 ↑ +18.7%" },
                            { period: "1 Year", corn: "$4.85 ↓ -3.2%", soy: "$13.45 ↑ +8.9%", wheat: "$6.28 ↑ +22.1%" },
                        ].map((row, i) => (
                            <tr key={i} className="border-b last:border-0">
                                <td className="p-2">{row.period}</td>
                                <td className="p-2">{row.corn}</td>
                                <td className="p-2">{row.soy}</td>
                                <td className="p-2">{row.wheat}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                    <h2 className="text-lg font-semibold mb-4">Market Influencing Factors</h2>
                    <ul className="space-y-4">
                        <li>
                            <p className="font-medium">Weather Conditions</p>
                            <p className="text-sm text-gray-600">
                                Drought concerns in major corn-producing regions driving prices higher
                            </p>
                            <span className="text-red-500 text-sm">High Impact</span>{" "}
                            <span className="text-green-500 text-sm">Bullish</span>
                        </li>
                        <li>
                            <p className="font-medium">Global Trade</p>
                            <p className="text-sm text-gray-600">
                                Export demand remains strong, supporting overall commodity prices
                            </p>
                            <span className="text-yellow-500 text-sm">Medium Impact</span>{" "}
                            <span className="text-green-500 text-sm">Bullish</span>
                        </li>
                        <li>
                            <p className="font-medium">Currency Fluctuations</p>
                            <p className="text-sm text-gray-600">
                                Dollar strength may pressure export competitiveness
                            </p>
                            <span className="text-yellow-500 text-sm">Medium Impact</span>{" "}
                            <span className="text-red-500 text-sm">Bearish</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                    <h2 className="text-lg font-semibold mb-4">Seasonal Price Patterns (Corn)</h2>
                    <table className="w-full border-collapse">
                        <tbody>
                            {[
                                { month: "Jan", price: "$4.25", note: "Low demand, inventory concerns" },
                                { month: "Feb", price: "$4.35", note: "Pre-planting season activity" },
                                { month: "Mar", price: "$4.45", note: "Planting preparations begin" },
                                { month: "Apr", price: "$4.65", note: "Peak planting season" },
                                { month: "May", price: "$4.75", note: "Weather premium builds" },
                                { month: "Dec", price: "$4.15", note: "Year-end positioning" },
                            ].map((row, i) => (
                                <tr key={i} className="border-b last:border-0">
                                    <td className="p-2 font-medium">{row.month}</td>
                                    <td className="p-2 text-green-600">{row.price}</td>
                                    <td className="p-2 text-sm text-gray-600">{row.note}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>



            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                <h2 className="text-lg font-semibold mb-6">Technical Analysis Summary</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                    <div>
                        <div className="w-16 h-16 bg-green-100 rounded-full mx-auto mb-3" />
                        <h3 className="font-medium">Corn Outlook</h3>
                        <p className="text-sm text-gray-600 mb-2">
                            Strong bullish momentum with weather premium support. Technical indicators suggest continued upward pressure.
                        </p>
                        <span className="text-green-600 font-medium">Bullish</span>
                    </div>
                    <div>
                        <div className="w-16 h-16 bg-yellow-100 rounded-full mx-auto mb-3 flex items-center justify-center">
                            <span className="text-yellow-600 text-xl">–</span>
                        </div>
                        <h3 className="font-medium">Soybean Outlook</h3>
                        <p className="text-sm text-gray-600 mb-2">
                            Mixed signals with supply pressure offsetting demand. Sideways consolidation expected near-term.
                        </p>
                        <span className="text-yellow-600 font-medium">Neutral</span>
                    </div>
                    <div>
                        <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-3" />
                        <h3 className="font-medium">Wheat Outlook</h3>
                        <p className="text-sm text-gray-600 mb-2">
                            Strong fundamental support from global supply concerns. Export demand providing price floor.
                        </p>
                        <span className="text-blue-600 font-medium">Bullish</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MarketingTrends
