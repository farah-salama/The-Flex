import { Icons } from './Icons'

const ReviewCard = ({ review, onApprove, onReject, onReset }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case 'approved':
        return 'status-badge status-approved'
      case 'rejected':
        return 'status-badge status-rejected'
      case 'pending':
        return 'status-badge status-pending'
      default:
        return 'status-badge status-pending'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'approved':
        return Icons.approved
      case 'rejected':
        return Icons.rejected
      case 'pending':
        return Icons.pending
      default:
        return Icons.pending
    }
  }

  const getStatusText = (status) => {
    switch (status) {
      case 'approved':
        return 'Approved'
      case 'rejected':
        return 'Rejected'
      case 'pending':
        return 'Pending Review'
      default:
        return 'Unknown'
    }
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`star ${i < rating ? 'filled' : 'empty'}`}
      >
        <Icons.star />
      </span>
    ))
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric'
    })
  }

  const renderActionButtons = () => {
    switch (review.status) {
      case 'pending':
        return (
          <div className="flex gap-2">
            <button
              onClick={() => onApprove(review.id)}
              className="btn btn-success"
            >
              <Icons.check />
              Approve
            </button>
            <button
              onClick={() => onReject(review.id)}
              className="btn btn-danger"
            >
              <Icons.x />
              Reject
            </button>
          </div>
        )
      
      case 'approved':
        return (
          <div className="flex gap-2">
            <button
              onClick={() => onReject(review.id)}
              className="btn btn-danger"
            >
              <Icons.x />
              Change to Rejected
            </button>
            <button
              onClick={() => onReset(review.id)}
              className="btn btn-secondary"
            >
              <Icons.reset />
              Reset to Pending
            </button>
          </div>
        )
      
      case 'rejected':
        return (
          <div className="flex gap-2">
            <button
              onClick={() => onApprove(review.id)}
              className="btn btn-success"
            >
              <Icons.check />
              Change to Approved
            </button>
            <button
              onClick={() => onReset(review.id)}
              className="btn btn-secondary"
            >
              <Icons.reset />
              Reset to Pending
            </button>
          </div>
        )
      
      default:
        return null
    }
  }

  return (
    <div className="card">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <div className="stars">
            {renderStars(review.rating)}
            <span className="text-sm font-medium text-gray-700 ml-2">
              {review.rating}/5
            </span>
          </div>
        </div>
        
        <div className={getStatusClass(review.status)}>
          {getStatusIcon(review.status)()}
          <span>{getStatusText(review.status)}</span>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-gray-800">{review.publicReview}</p>
        
        <div className="flex flex-wrap gap-2">
          {review.reviewCategory.map((category, index) => (
            <span
              key={index}
              className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-800"
            >
              {category.category.replace('_', ' ')}: {category.rating}/10
            </span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center gap-4 text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Icons.user />
            <span>{review.guestName}</span>
          </div>
          
          <div className="flex items-center gap-1">
            <Icons.location />
            <span>{review.listingName}</span>
          </div>
          
          <div className="flex items-center gap-1">
            <Icons.calendar />
            <span>{formatDate(review.submittedAt)}</span>
          </div>
        </div>

        {renderActionButtons()}
      </div>
    </div>
  )
}

export default ReviewCard 