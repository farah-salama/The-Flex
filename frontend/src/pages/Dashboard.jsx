import { useState, useEffect } from 'react'
import ReviewCard from '../components/ReviewCard'
import ReviewFilters from '../components/ReviewFilters'
import ReviewStats from '../components/ReviewStats'
import { Icons } from '../components/Icons'
import { fetchReviews, approveReview, rejectReview, resetReview } from '../services/api'

const Dashboard = () => {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState({
    rating: '',
    category: '',
    listing: '',
    status: '',
    startDate: '',
    endDate: '',
    sortBy: 'submittedAt',
    sortOrder: 'desc'
  })
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalItems: 0,
    itemsPerPage: 20
  })

  useEffect(() => {
    loadReviews()
  }, [filters, pagination.currentPage])

  const loadReviews = async () => {
    try {
      setLoading(true)
      const response = await fetchReviews(filters, pagination.currentPage)
      setReviews(response.data)
      setPagination(response.pagination)
    } catch (error) {
      console.error('Error loading reviews:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleApproveReview = async (reviewId) => {
    try {
      await approveReview(reviewId)
      await loadReviews() // Reload to get updated data
    } catch (error) {
      console.error('Error approving review:', error)
    }
  }

  const handleRejectReview = async (reviewId) => {
    try {
      await rejectReview(reviewId)
      await loadReviews() // Reload to get updated data
    } catch (error) {
      console.error('Error rejecting review:', error)
    }
  }

  const handleResetReview = async (reviewId) => {
    try {
      await resetReview(reviewId)
      await loadReviews() // Reload to get updated data
    } catch (error) {
      console.error('Error resetting review:', error)
    }
  }

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters)
    setPagination(prev => ({ ...prev, currentPage: 1 }))
  }

  const handlePageChange = (page) => {
    setPagination(prev => ({ ...prev, currentPage: page }))
  }

  return (
    <div className="container">
      <div className="space-y-8">
        {/* Page Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Reviews Dashboard</h1>
            <p className="text-gray-600 mt-2">Manage and monitor guest reviews across all properties</p>
          </div>
          <button 
            onClick={() => loadReviews()}
            className="btn btn-primary"
          >
            <Icons.refresh />
            Refresh
          </button>
        </div>

        {/* Stats Cards */}
        <ReviewStats reviews={reviews} />

        {/* Filters and Reviews */}
        <div className="space-y-6">
          <ReviewFilters 
            filters={filters} 
            onFilterChange={handleFilterChange} 
          />
          
          {loading ? (
            <div className="flex justify-center py-12">
              <div className="spinner"></div>
            </div>
          ) : (
            <div className="space-y-4">
              {reviews.map(review => (
                <ReviewCard
                  key={review.id}
                  review={review}
                  onApprove={handleApproveReview}
                  onReject={handleRejectReview}
                  onReset={handleResetReview}
                />
              ))}
            </div>
          )}

          {/* Pagination */}
          {pagination.totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2 py-6">
              <button
                onClick={() => handlePageChange(pagination.currentPage - 1)}
                disabled={pagination.currentPage === 1}
                className="btn btn-secondary disabled:opacity-50"
              >
                Previous
              </button>
              
              <span className="text-gray-600">
                Page {pagination.currentPage} of {pagination.totalPages}
              </span>
              
              <button
                onClick={() => handlePageChange(pagination.currentPage + 1)}
                disabled={pagination.currentPage === pagination.totalPages}
                className="btn btn-secondary disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Dashboard 