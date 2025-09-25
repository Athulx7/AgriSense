import React, { useState } from "react";
import DropDownComponent from "../BasicComponents/DropDownComponent";

function PriceOverView() {
    const [selectedData, setSelectedData] = useState({
        selectedFinancialYear: "",
    });

    const selectionDropDown = {
        financialYear: [
            {
                key: "2023-24",
                text: "Corn (C)",
                color: "text-green-600 dark:text-green-500",
                bg: "bg-green-100 dark:bg-green-950",
                border: "border-green-600 dark:border-green-900",
            },
            {
                key: "2024-25",
                text: "Soybeans (S)",
                color: "text-blue-600 dark:text-blue-500",
                bg: "bg-blue-100 dark:bg-blue-950",
                border: "border-blue-600 dark:border-blue-900",
            },
            {
                key: "2025-26",
                text: "Wheat (W)",
                color: "text-yellow-600 dark:text-yellow-500",
                bg: "bg-yellow-100 dark:bg-yellow-950",
                border: "border-yellow-600 dark:border-yellow-900",
            },
            {
                key: "2026-27",
                text: "Cotton (CT)",
                color: "text-purple-600 dark:text-purple-500",
                bg: "bg-purple-100 dark:bg-purple-950",
                border: "border-purple-600 dark:border-purple-900",
            },
        ],
    };

    const handleSelectDropdownData = (field, value) => {
        setSelectedData((prev) => ({
            ...prev,
            [field]: value,
        }));
    };


    return (
        <div className="p-6">

            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                    <DropDownComponent
                        labelName="Financial Year"
                        important
                        Selected={selectedData.selectedFinancialYear}
                        dropdownList={selectionDropDown.financialYear}
                        getValue={(value) => handleSelectDropdownData("selectedFinancialYear", value)}
                        disabledropdown={""}
                    />
                    <p className="text-sm text-gray-500">Last updated: 15:30 CT</p>
                </div>
                <div className="flex space-x-3">
                    <button className="px-4 py-2 rounded-md border">Set Alert</button>
                    <button className="px-4 py-2 rounded-md bg-green-500 text-white">
                        Create Order
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="p-4 rounded-md border border-green-600 bg-green-50 dark:bg-green-700">
                    <h3 className="font-semibold">Corn</h3>
                    <p className="text-2xl font-bold">$4.85</p>
                    <p className="text-green-600 dark:text-green-400">+0.12 (+2.54%)</p>
                </div>
                <div className="p-4 rounded-md border border-gray-400 dark:border-gray-600">
                    <h3 className="font-semibold">Soybeans</h3>
                    <p className="text-2xl font-bold">$13.45</p>
                    <p className="text-red-500">-0.08 (-0.59%)</p>
                </div>
                <div className="p-4 rounded-md border border-gray-400 dark:border-gray-600">
                    <h3 className="font-semibold">Wheat</h3>
                    <p className="text-2xl font-bold">$6.28</p>
                    <p className="text-green-600">+0.15 (+2.45%)</p>
                </div>
                <div className="p-4 rounded-md border border-gray-400 dark:border-gray-600">
                    <h3 className="font-semibold">Cotton</h3>
                    <p className="text-2xl font-bold">$0.72</p>
                    <p className="text-green-600">+0.01 (+1.41%)</p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-6">

                <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-md">
                    <h3 className="font-semibold mb-3">Corn Details</h3>
                    <div className="grid grid-cols-2 gap-y-2 text-sm">
                        <p>Current Price</p>
                        <p className="font-semibold">$4.85</p>
                        <p>Previous Close</p>
                        <p>$4.73</p>
                        <p>Open</p>
                        <p>$4.81</p>
                        <p>Volume</p>
                        <p>145,320</p>
                        <p>Day High</p>
                        <p className="text-green-600">$4.92</p>
                        <p>Day Low</p>
                        <p className="text-red-500">$4.78</p>
                        <p>Market Cap</p>
                        <p>$2.8B</p>
                        <p>Day Change</p>
                        <p className="text-green-600">+0.12</p>
                    </div>

                    <div className="mt-4 p-6 bg-gray-100 dark:bg-gray-800 rounded-md text-gray-400 text-center">
                        📈 Interactive price chart
                    </div>
                </div>

                <div className="space-y-6">

                    <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-md">
                        <h3 className="font-semibold mb-3">Market News & Analysis</h3>
                        <ul className="space-y-3 text-sm">
                            <li className="flex justify-between">
                                <span>Corn Futures Rise on Export Demand</span>
                                <span className="text-green-500">●</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Soybean Prices Pressured by South American Supply</span>
                                <span className="text-red-500">●</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Weather Concerns Support Wheat Prices</span>
                                <span className="text-green-500">●</span>
                            </li>
                            <li className="flex justify-between">
                                <span>Cotton Export Sales Below Expectations</span>
                                <span className="text-red-500">●</span>
                            </li>
                        </ul>
                    </div>

                    <div className="p-4 border border-gray-200 dark:border-gray-800 rounded-md">
                        <h3 className="font-semibold mb-2">Your Inventory</h3>
                        <p>Corn - Field A</p>
                        <p className="text-gray-500 text-sm">2,400 bushels ready</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PriceOverView;
