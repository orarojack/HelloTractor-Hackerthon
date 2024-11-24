'use client'

import { useState } from 'react'
import { MapPin, Tag, Tractor } from 'lucide-react'
import { BRANDS, PRICE_RANGES } from '@/utils/constants'

export function FilterBar() {
  const [showImplements, setShowImplements] = useState(false)
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <div className="flex items-center gap-6 flex-1">
        <div className="relative group">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-gray-50">
            <Tractor className="w-4 h-4" />
            <span>Brand</span>
          </button>
          <div className="absolute top-full left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg hidden group-hover:block">
            {BRANDS.map(brand => (
              <label key={brand} className="flex items-center px-4 py-2 hover:bg-gray-50">
                <input
                  type="checkbox"
                  checked={selectedBrands.includes(brand)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setSelectedBrands([...selectedBrands, brand])
                    } else {
                      setSelectedBrands(selectedBrands.filter(b => b !== brand))
                    }
                  }}
                  className="mr-2"
                />
                {brand}
              </label>
            ))}
          </div>
        </div>

        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-gray-50">
          <MapPin className="w-4 h-4" />
          <span>Location</span>
        </button>

        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border hover:bg-gray-50">
          <Tag className="w-4 h-4" />
          <span>Price</span>
        </button>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm text-gray-600">Show implements</span>
        <button
          onClick={() => setShowImplements(!showImplements)}
          className={`w-12 h-6 rounded-full p-1 transition-colors ${
            showImplements ? 'bg-red-500' : 'bg-gray-200'
          }`}
        >
          <div
            className={`w-4 h-4 bg-white rounded-full transition-transform ${
              showImplements ? 'translate-x-6' : ''
            }`}
          />
        </button>
      </div>
    </div>
  )
}