import React from "react"

const crops = [
    {
        id: 1,
        name: "Corn",
        variety: "Pioneer P1105AM",
        area: "85 acres",
        status: "Flowering",
        plantedDate: "2024-04-15",
        harvestDate: "2024-09-20",
        yield: "180 bu/acre",
        health: 95,
        image:
            "https://readdy.ai/api/search-image?query=healthy%20corn%20field%20with%20tall%20green%20stalks%20in%20flowering%20stage%2C%20agricultural%20landscape%2C%20clear%20blue%20sky%2C%20professional%20farming%20photography%2C%20detailed%20corn%20plants&width=400&height=300&seq=crop1&orientation=landscape",
    },
    {
        id: 2,
        name: "Soybeans",
        variety: "Asgrow AG2035",
        area: "70 acres",
        status: "Pod Development",
        plantedDate: "2024-05-10",
        harvestDate: "2024-10-15",
        yield: "52 bu/acre",
        health: 88,
        image:
            "https://readdy.ai/api/search-image?query=soybean%20field%20with%20healthy%20green%20plants%20in%20pod%20development%20stage%2C%20organized%20rows%2C%20agricultural%20setting%2C%20natural%20lighting%2C%20farming%20photography&width=400&height=300&seq=crop2&orientation=landscape",
    },
    {
        id: 3,
        name: "Wheat",
        variety: "Hard Red Winter",
        area: "120 acres",
        status: "Grain Fill",
        plantedDate: "2024-03-20",
        harvestDate: "2024-08-05",
        yield: "75 bu/acre",
        health: 92,
        image:
            "https://readdy.ai/api/search-image?query=golden%20wheat%20field%20ready%20for%20harvest%2C%20grain%20filling%20stage%2C%20agricultural%20landscape%2C%20warm%20sunlight%2C%20professional%20farm%20photography&width=400&height=300&seq=crop3&orientation=landscape",
    },
]

function CropManagement() {
    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-6">
                <div>
                    <h2 className="text-xl font-bold">Active Crops</h2>
                    <p className="text-gray-600 text-sm">
                        Manage your current crop plantings and monitor their progress
                    </p>
                </div>
                <button className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-600">
                    + Add New Crop
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {crops.map((crop) => (
                    <div
                        key={crop.id}
                        className="bg-white dark:bg-gray-800 rounded-xl shadow p-4 shadow-sm"
                    >

                        <div className="relative">
                            <img
                                src={crop.image}
                                alt={crop.name}
                                className="rounded-xl h-40 w-full object-cover"
                            />
                            <span className={`absolute top-2 right-2 px-3 py-1 rounded-full text-sm font-medium ${crop.health > 90
                                    ? "bg-green-100 text-green-600"
                                    : crop.health > 80
                                        ? "bg-yellow-100 text-yellow-600"
                                        : "bg-red-100 text-red-600"
                                }`}>
                                {crop.health}% Health
                            </span>
                        </div>

                        <div className="p-4">
                            <h3 className="text-lg font-bold">{crop.name}</h3>
                            <p className="text-gray-500 text-sm">{crop.variety}</p>

                            <div className="mt-3 space-y-2 text-sm">
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Planted Area</span>
                                    <span className="font-semibold">{crop.area}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Status</span>
                                    <span className="text-green-600 font-medium">
                                        {crop.status}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Planted Date</span>
                                    <span className="font-semibold">{crop.plantedDate}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Expected Harvest</span>
                                    <span className="font-semibold">{crop.harvestDate}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-gray-500">Expected Yield</span>
                                    <span className="font-semibold">{crop.yield}</span>
                                </div>
                            </div>

                            <div className="flex gap-3 mt-4">
                                <button className="flex-1 bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 cursor-pointer py-2 rounded-lg hover:bg-gray-200">
                                    View Details
                                </button>
                                <button className="flex-1 bg-green-100 dark:bg-green-600 dark:text-white text-green-700 py-2 rounded-lg hover:bg-green-500">
                                    Manage Tasks
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CropManagement
