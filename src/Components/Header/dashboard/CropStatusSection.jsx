import { faLeaf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

function CropStatusSection() {
  const crops = [
    {
      name: "Tomatoes",
      farm: "Farm A - Plot 1",
      stage: "Flowering",
      acres: "2.5",
      progress: 65,
      status: "excellent",
      sown: "2024-02-15",
      harvest: "2024-04-20",
      img: "https://readdy.ai/api/search-image?query=healthy%20tomato%20plants%20with%20red%20ripe%20tomatoes%20in%20agricultural%20field%2C%20green%20foliage%2C%20natural%20lighting%2C%20farming%20landscape%2C%20vibrant%20red%20tomatoes%20hanging%20on%20vines%2C%20lush%20green%20leaves%2C%20clear%20blue%20sky%20in%20background&width=400&height=300&seq=crop1&orientation=landscape",
    },
    {
      name: "Wheat",
      farm: "Farm B - Plot 2",
      stage: "Grain Filling",
      acres: "5.0",
      progress: 80,
      status: "good",
      sown: "2023-11-10",
      harvest: "2024-03-25",
      img: "https://readdy.ai/api/search-image?query=golden%20wheat%20field%20ready%20for%20harvest%2C%20wheat%20stalks%20swaying%20in%20breeze%2C%20agricultural%20landscape%2C%20golden%20hour%20lighting%2C%20vast%20wheat%20plantation%2C%20rural%20farming%20scene%2C%20clear%20sky%20background&width=400&height=300&seq=crop2&orientation=landscape",
    },
  ];
  return (
    <div className="bg-white dark:bg-gray-900 shadow-md rounded-2xl p-6 flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-gray-900 dark:text-white">Crop Status</h2>
        <div className="bg-green-100 dark:bg-green-950 p-2 rounded-lg">
          <FontAwesomeIcon icon={faLeaf} className="text-green-500" />
        </div>
      </div>

      <div className="space-y-3 flex-1 overflow-y-auto max-h-96">
        {crops.map((crop, i) => (
          <div
            key={i}
            className="flex items-start space-x-3 p-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800"
          >
            <img
              src={crop.img}
              alt={crop.name}
              className="h-12 w-12 rounded-md object-cover"
            />
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <p className="font-semibold text-gray-900 dark:text-white">
                  {crop.name}
                </p>
                <span
                  className={`px-2 py-1 text-xs rounded ${crop.status === "excellent"
                      ? "bg-green-100 text-green-600 dark:bg-green-950 dark:text-green-300"
                      : "bg-blue-100 text-blue-600 dark:bg-blue-950 dark:text-blue-300"
                    }`}
                >
                  {crop.status}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                {crop.farm} · {crop.stage} · {crop.acres} acres
              </p>

              <div className="relative w-full mt-2">
                <span className="absolute -top-5 right-0 text-xs font-semibold text-gray-700 dark:text-gray-300">
                  {crop.progress}%
                </span>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${crop.status === "excellent" ? "bg-blue-500" : "bg-green-500" }`}
                    style={{ width: `${crop.progress}%` }}
                  ></div>
                </div>
              </div>

              <p className="text-xs text-gray-500 mt-1">
                Sown: {crop.sown} · Harvest: {crop.harvest}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-4 w-full py-2 text-green-600 bg-green-50 rounded-lg font-semibold hover:bg-green-100 dark:bg-gray-900 dark:hover:bg-green-950 cursor-pointer">
        + Add New Crop
      </button>
    </div>
  )
}

export default CropStatusSection
