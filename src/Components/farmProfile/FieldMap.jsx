import React from "react"

function FieldMap() {
  return (
    <div className="p-6 space-y-6">

      <div>
        <h2 className="text-xl font-bold">Farm Field Map</h2>
        <p className="text-sm text-gray-600">
          Interactive map showing field boundaries, soil zones, and irrigation systems
        </p>
      </div>

      <div className="relative rounded-xl overflow-hidden shadow border">
        <iframe
          title="field-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31411.91309374768!2d76.1804167040302!3d10.222076953265217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b081bea3d5a8b29%3A0x4c3b722cea99e6b0!2sKodungallur%2C%20Kerala!5e0!3m2!1sen!2sin!4v1756565326381!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>

        <div className="absolute top-4 left-4 bg-white/90 dark:bg-gray-900 rounded-lg shadow p-3 text-sm space-y-2">
          <p className="font-semibold">Legend</p>
          <p className="flex items-center gap-2"><span className="w-3 h-3 bg-green-500 inline-block"></span> Active Crops</p>
          <p className="flex items-center gap-2"><span className="w-3 h-3 bg-blue-500 inline-block"></span> Irrigation</p>
          <p className="flex items-center gap-2"><span className="w-3 h-3 bg-yellow-500 inline-block"></span> Soil Zones</p>
          <p className="flex items-center gap-2"><span className="w-3 h-3 bg-gray-500 inline-block"></span> Buildings</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Field Information</h3>

          <div className="border rounded-lg p-3">
            <p className="font-semibold">Field A - North Section</p>
            <p className="text-sm text-gray-600">Size: 85 acres</p>
            <p className="text-sm text-gray-600">Soil Type: Clay Loam</p>
            <p className="text-sm text-gray-600">Crop: Corn</p>
            <p className="text-sm text-gray-600">Irrigation: Pivot</p>
          </div>

          <div className="border rounded-lg p-3">
            <p className="font-semibold">Field B - East Section</p>
            <p className="text-sm text-gray-600">Size: 50 acres</p>
            <p className="text-sm text-gray-600">Soil Type: Sandy Loam</p>
            <p className="text-sm text-gray-600">Crop: Wheat</p>
            <p className="text-sm text-gray-600">Irrigation: Drip</p>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-lg">Soil Analysis</h3>

          <div className="flex justify-between items-center bg-green-50 dark:bg-green-900 p-3 rounded-lg">
            <p className="font-medium">pH Level</p>
            <span className="text-green-700 dark:text-green-400 font-bold">6.8</span>
          </div>

          <div className="flex justify-between items-center bg-blue-50 dark:bg-blue-900 p-3 rounded-lg">
            <p className="font-medium">Nitrogen (N)</p>
            <span className="text-blue-700 dark:text-blue-400">Good levels</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FieldMap
