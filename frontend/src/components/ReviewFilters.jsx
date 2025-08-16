import { useState } from 'react'
import { Icons } from './Icons'

const ReviewFilters = ({ filters, onFilterChange }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleFilterChange = (key, value) => {
    onFilterChange({
      ...filters,
      [key]: value
    })
  }

  const clearFilters = () => {
    onFilterChange({
      rating: '',
      category: '',
      listing: '',
      status: '',
      startDate: '',
      endDate: '',
      sortBy: 'submittedAt',
      sortOrder: 'desc'
    })
  }

  const hasActiveFilters = Object.values(filters).some(value => 
    value !== '' && value !== 'submittedAt' && value !== 'desc'
  )

  return (
    <div className="card">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center gap-2">
          <Icons.filter />
          <h3 className="text-lg font-semibold text-gray-900">Filters & Sorting</h3>
        </div>
        
        <div className="flex items-center gap-3">
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-sm text-blue-600 hover:text-blue-700 font-medium"
            >
              Clear All
            </button>
          )}
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-sm text-gray-600 hover:text-gray-700 font-medium"
          >
            {isExpanded ? 'Hide' : 'Show'} Advanced
          </button>
        </div>
      </div>

      {/* Basic Filters */}
      <div className="grid filters-grid-4 gap-4 mb-4">
        <div className="form-group">
          <label className="form-label">Rating</label>
          <select
            value={filters.rating}
            onChange={(e) => handleFilterChange('rating', e.target.value)}
            className="form-select"
          >
            <option value="">All Ratings</option>
            <option value="5">5 Stars</option>
            <option value="4">4+ Stars</option>
            <option value="3">3+ Stars</option>
            <option value="2">2+ Stars</option>
            <option value="1">1+ Stars</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Category</label>
          <select
            value={filters.category}
            onChange={(e) => handleFilterChange('category', e.target.value)}
            className="form-select"
          >
            <option value="">All Categories</option>
            <option value="cleanliness">Cleanliness</option>
            <option value="communication">Communication</option>
            <option value="value">Value</option>
            <option value="location">Location</option>
            <option value="check_in">Check-in</option>
            <option value="amenities">Amenities</option>
            <option value="noise_level">Noise Level</option>
            <option value="respect_house_rules">House Rules</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Status</label>
          <select
            value={filters.status}
            onChange={(e) => handleFilterChange('status', e.target.value)}
            className="form-select"
          >
            <option value="">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Sort By</label>
          <select
            value={filters.sortBy}
            onChange={(e) => handleFilterChange('sortBy', e.target.value)}
            className="form-select"
          >
            <option value="submittedAt">Date</option>
            <option value="rating">Rating</option>
            <option value="guestName">Guest Name</option>
            <option value="listingName">Property</option>
          </select>
        </div>
      </div>

      {/* Advanced Filters */}
      {isExpanded && (
        <div className="border-t border-gray-200 pt-4 space-y-4">
          <div className="grid filters-grid-3 gap-4">
            <div className="form-group">
              <label className="form-label">Property Search</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Icons.search />
                </span>
                <input
                  type="text"
                  placeholder="Search properties..."
                  value={filters.listing}
                  onChange={(e) => handleFilterChange('listing', e.target.value)}
                  className="form-input pl-10"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Start Date</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Icons.calendar />
                </span>
                <input
                  type="date"
                  value={filters.startDate}
                  onChange={(e) => handleFilterChange('startDate', e.target.value)}
                  className="form-input pl-10"
                />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">End Date</label>
              <div className="relative">
                <span className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <Icons.calendar />
                </span>
                <input
                  type="date"
                  value={filters.endDate}
                  onChange={(e) => handleFilterChange('endDate', e.target.value)}
                  className="form-input pl-10"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="sortOrder"
                value="desc"
                checked={filters.sortOrder === 'desc'}
                onChange={(e) => handleFilterChange('sortOrder', e.target.value)}
                className="text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Newest First</span>
            </label>
            
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="sortOrder"
                value="asc"
                checked={filters.sortOrder === 'asc'}
                onChange={(e) => handleFilterChange('sortOrder', e.target.value)}
                className="text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700">Oldest First</span>
            </label>
          </div>
        </div>
      )}
    </div>
  )
}

export default ReviewFilters 