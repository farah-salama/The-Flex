import { useState } from 'react'
import DatePicker from 'react-datepicker'
import { Icons } from './Icons'
import 'react-datepicker/dist/react-datepicker.css'

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
              className="clear-filters-btn"
            >
              <span className="clear-filters-icon">
                <Icons.x />
              </span>
              <span className="clear-filters-text">Clear All</span>
            </button>
          )}
          
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="advanced-toggle-btn"
          >
            <span className="advanced-toggle-icon">
              {isExpanded ? <Icons.chevronUp /> : <Icons.chevronDown />}
            </span>
            <span className="advanced-toggle-text">
              {isExpanded ? 'Hide' : 'Show'} Advanced
            </span>
          </button>
        </div>
      </div>

      {/* Basic Filters */}
      <div className="grid filters-grid-4 gap-4 mb-4">
        <div className="form-group">
          <select
            value={filters.rating}
            onChange={(e) => handleFilterChange('rating', e.target.value)}
            className="form-select"
          >
            <option className="dropdown-option" value="">All Ratings</option>
            <option value="5">5 Stars</option>
            <option value="4">4+ Stars</option>
            <option value="3">3+ Stars</option>
            <option value="2">2+ Stars</option>
            <option value="1">1+ Stars</option>
          </select>
        </div>

        <div className="form-group">
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
              <div className="relative">
                <span className="absolute left-3 top-3 icon-opacity-60">
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
              <div className="date-input">
                <span className="input-icon"><Icons.calendar /></span>
                <DatePicker
                  selected={filters.startDate ? new Date(filters.startDate) : null}
                  onChange={(date) => handleFilterChange('startDate', date ? date.toISOString().split('T')[0] : '')}
                  placeholderText="From"
                  className="form-input"
                  dateFormat="dd/MM/yyyy"
                  maxDate={filters.endDate ? new Date(filters.endDate) : null}
                />
              </div>
            </div>

            <div className="form-group">
              <div className="date-input">
                <span className="input-icon"><Icons.calendar /></span>
                <DatePicker
                  selected={filters.endDate ? new Date(filters.endDate) : null}
                  onChange={(date) => handleFilterChange('endDate', date ? date.toISOString().split('T')[0] : '')}
                  placeholderText="To"
                  className="form-input"
                  dateFormat="dd/MM/yyyy"
                  minDate={filters.startDate ? new Date(filters.startDate) : null}
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