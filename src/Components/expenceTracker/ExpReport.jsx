import React from "react";

function ExpReport() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-xl font-bold">Expense Reports</h2>
      <p className="text-gray-500 text-sm">
        Analyze spending patterns and generate financial reports
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
          <h3 className="font-semibold mb-4">Monthly Expense Trend</h3>
          <div className="space-y-3">
            {[
              { month: "Jan", spent: 7200, budget: 8500, change: -15 },
              { month: "Feb", spent: 6800, budget: 8500, change: -20 },
              { month: "Mar", spent: 9200, budget: 8500, change: 8 },
              { month: "Apr", spent: 8750, budget: 8500, change: 3 },
              { month: "May", spent: 7950, budget: 8500, change: -6 },
              { month: "Jun", spent: 8450, budget: 8500, change: 0 },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex justify-between text-sm">
                  <span>{item.month}</span>
                  <span>
                    ${item.spent.toLocaleString()} / $
                    {item.budget.toLocaleString()}
                  </span>
                </div>
                <div className="w-full h-2 bg-gray-200 rounded">
                  <div
                    className={`h-2 rounded ${
                      item.spent > item.budget ? "bg-red-500" : "bg-green-500"
                    }`}
                    style={{
                      width: `${Math.min(
                        (item.spent / item.budget) * 100,
                        100
                      )}%`,
                    }}
                  ></div>
                </div>
                <div
                  className={`text-xs ${
                    item.change >= 0 ? "text-red-500" : "text-green-500"
                  }`}
                >
                  {item.change >= 0 ? `+${item.change}%` : `${item.change}%`}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow space-y-3">
          <h3 className="font-semibold mb-4">Cost Analysis</h3>
          <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded-lg flex justify-between">
            <span className="text-blue-700 dark:text-blue-400">Cost per Acre</span>
            <span className="font-bold text-blue-700 dark:text-blue-400">$338</span>
          </div>
          <div className="p-4 bg-green-50 dark:bg-green-900 rounded-lg flex justify-between">
            <span className="text-green-700 dark:text-green-400">ROI Projection</span>
            <span className="font-bold text-green-700 dark:text-green-400">185%</span>
          </div>
          <div className="p-4 bg-yellow-50 dark:bg-yellow-900 rounded-lg flex justify-between">
            <span className="text-yellow-700 dark:text-yellow-400">Budget Variance</span>
            <span className="font-bold text-yellow-700 dark:text-yellow-400">-$1,050</span>
          </div>
          <div className="p-4 bg-purple-50 dark:bg-purple-900 rounded-lg flex justify-between">
            <span className="text-purple-700 dark:text-purple-400">Efficiency Score</span>
            <span className="font-bold text-purple-700 dark:text-purple-400">92/100</span>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
        <h3 className="font-semibold mb-4">Detailed Expense Report</h3>
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="text-left border-b">
              <th className="p-2">Category</th>
              <th className="p-2">Budget</th>
              <th className="p-2">Actual</th>
              <th className="p-2">Variance</th>
              <th className="p-2">% of Total</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["Fertilizers & Nutrients", 5000, 3250, -1750, "38.5%"],
              ["Fuel & Energy", 3000, 1850, -1150, "21.9%"],
              ["Equipment & Maintenance", 2500, 1420, -1080, "16.8%"],
              ["Seeds & Plants", 1500, 980, -520, "11.6%"],
              ["Labor & Services", 4000, 2100, -1900, "24.8%"],
            ].map(([cat, bud, act, varc, pct], i) => (
              <tr key={i} className="border-b">
                <td className="p-2">{cat}</td>
                <td className="p-2">${bud.toLocaleString()}</td>
                <td className="p-2">${act.toLocaleString()}</td>
                <td className="p-2 text-green-600">{varc.toLocaleString()}</td>
                <td className="p-2">{pct}</td>
              </tr>
            ))}
            <tr className="font-bold">
              <td className="p-2">Total</td>
              <td className="p-2">$16,000</td>
              <td className="p-2">$8,450</td>
              <td className="p-2 text-green-600">-7,550</td>
              <td className="p-2">100%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 bg-green-50 dark:bg-green-900 rounded">
          <h4 className="font-semibold text-green-700 dark:text-green-400">Fertilizer Costs Reduced</h4>
          <p className="text-sm text-gray-600 dark:text-gray-200">
            35% reduction in fertilizer expenses through bulk purchasing and
            organic alternatives
          </p>
        </div>
        <div className="p-4 bg-blue-50 dark:bg-blue-900 rounded">
          <h4 className="font-semibold text-blue-700 dark:text-blue-400">Fuel Efficiency Improved</h4>
          <p className="text-sm text-gray-600 dark:text-gray-200">
            Optimized equipment usage reduced fuel costs by $400 this month
          </p>
        </div>
        <div className="p-4 bg-yellow-50 dark:bg-yellow-900 rounded">
          <h4 className="font-semibold text-yellow-700 dark:text-yellow-400">Maintenance Schedule</h4>
          <p className="text-sm text-gray-600 dark:text-gray-200">
            Consider preventive maintenance to avoid unexpected repair costs
          </p>
        </div>
        <div className="p-4 bg-purple-50 dark:bg-purple-900 rounded">
          <h4 className="font-semibold text-purple-700 dark:text-purple-400">Budget Performance</h4>
          <p className="text-sm text-gray-600 dark:text-gray-200">
            Currently 47% under budget with strong ROI projections
          </p>
        </div>
      </div>
    </div>
  );
}

export default ExpReport
