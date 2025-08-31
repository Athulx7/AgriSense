import React, { useState } from "react";

function Settings() {
    const [farm, setFarm] = useState({
        name: "Green Valley Farm",
        owner: "John Mitchell",
        location: "Iowa, USA",
        area: "250",
    })

    const [notifications, setNotifications] = useState({
        weather: true,
        tasks: true,
        crop: false,
        market: true,
    })

    const handleFarmChange = (e) => {
        const { name, value } = e.target
        setFarm({ ...farm, [name]: value })
    }

    const toggleNotification = (key) => {
        setNotifications((prev) => ({ ...prev, [key]: !prev[key] }))
    }

    const handleSave = () => {
        alert("Changes saved ✅")
        console.log("Farm Data:", farm)
        console.log("Notifications:", notifications)
    }

    return (
        <div className="p-6 min-h-screen">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
                    <h2 className="text-lg font-semibold mb-4">Farm Details</h2>
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium">Farm Name</label>
                            <input
                                type="text"
                                name="name"
                                value={farm.name}
                                onChange={handleFarmChange}
                                className="w-full border rounded-lg px-3 py-2 mt-1"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Owner Name</label>
                            <input
                                type="text"
                                name="owner"
                                value={farm.owner}
                                onChange={handleFarmChange}
                                className="w-full border rounded-lg px-3 py-2 mt-1"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">Location</label>
                            <input
                                type="text"
                                name="location"
                                value={farm.location}
                                onChange={handleFarmChange}
                                className="w-full border rounded-lg px-3 py-2 mt-1"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium">
                                Total Area (acres)
                            </label>
                            <input
                                type="number"
                                name="area"
                                value={farm.area}
                                onChange={handleFarmChange}
                                className="w-full border rounded-lg px-3 py-2 mt-1"
                            />
                        </div>
                        <button
                            onClick={handleSave}
                            className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
                        >
                            Save Changes
                        </button>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
                    <h2 className="text-lg font-semibold mb-4">Notification Settings</h2>
                    <div className="space-y-4">
                        {[
                            {
                                key: "weather",
                                title: "Weather Alerts",
                                desc: "Receive severe weather notifications",
                            },
                            {
                                key: "tasks",
                                title: "Task Reminders",
                                desc: "Get notified about upcoming tasks",
                            },
                            {
                                key: "crop",
                                title: "Crop Updates",
                                desc: "Automatic crop growth notifications",
                            },
                            {
                                key: "market",
                                title: "Market Prices",
                                desc: "Daily commodity price updates",
                            },
                        ].map((item) => (
                            <div
                                key={item.key}
                                className="flex items-center justify-between border-b pb-2"
                            >
                                <div>
                                    <p className="font-medium">{item.title}</p>
                                    <p className="text-sm text-gray-500">{item.desc}</p>
                                </div>
                                <button
                                    onClick={() => toggleNotification(item.key)}
                                    className={`w-12 h-6 flex items-center rounded-full p-1 transition ${notifications[item.key]
                                            ? "bg-green-500 justify-end"
                                            : "bg-gray-300 justify-start"
                                        }`}
                                >
                                    <div className="w-4 h-4 bg-white rounded-full shadow" />
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="mt-6 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
                <h2 className="text-lg font-semibold mb-4">Integration Settings</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                        { title: "Weather Service", status: "Connected", btn: "Configure" },
                        { title: "Soil Sensors", status: "12 Active", btn: "Manage" },
                        { title: "Market Data", status: "Real-time", btn: "Setup" },
                    ].map((item, idx) => (
                        <div
                            key={idx}
                            className="border rounded-lg p-4 flex flex-col justify-between"
                        >
                            <div>
                                <p className="font-medium">{item.title}</p>
                                <p className="text-sm text-gray-500">{item.status}</p>
                            </div>
                            <button className="mt-4 border rounded-lg px-3 py-1 text-gray-700 dark:text-gray-300 dark:hover:bg-gray-900 hover:bg-gray-100">
                                {item.btn}
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Settings
