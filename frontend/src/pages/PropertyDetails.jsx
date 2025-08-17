import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useInView } from 'react-intersection-observer'
import DatePicker from 'react-datepicker'
import { fetchReviews, fetchPropertyById } from '../services/api'
import 'react-datepicker/dist/react-datepicker.css'

// Simple SVG Icons
const Icons = {
  users: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  bed: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M2 4v16"/>
      <path d="M2 8h18a2 2 0 0 1 2 2v10"/>
      <path d="M2 17h20"/>
      <path d="M6 8v9"/>
    </svg>
  ),
  bathroom: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M4 12h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2z"/>
      <path d="M6 12V6a2 2 0 0 1 2-2h3v2"/>
      <line x1="4" y1="20" x2="20" y2="20"/>
    </svg>
  ),
  home: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
      <polyline points="9,22 9,12 15,12 15,22"/>
    </svg>
  ),
  tv: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="7" width="20" height="15" rx="2" ry="2"/>
      <polyline points="17,2 12,7 7,2"/>
    </svg>
  ),
  wifi: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12.55a11 11 0 0 1 14.08 0"/>
      <path d="M1.42 9a16 16 0 0 1 21.16 0"/>
      <path d="M8.53 16.11a6 6 0 0 1 6.95 0"/>
      <line x1="12" y1="20" x2="12.01" y2="20"/>
    </svg>
  ),
  signal: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M1 1l22 22"/>
      <path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/>
      <path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/>
      <path d="M10.71 5.05A16 16 0 0 1 22.58 9"/>
      <path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/>
      <path d="M8.53 16.11a12 12 0 0 1 6.89 0"/>
      <line x1="12" y1="20" x2="12.01" y2="20"/>
    </svg>
  ),
  kitchen: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
      <line x1="6" y1="1" x2="6" y2="4"/>
      <line x1="10" y1="1" x2="10" y2="4"/>
      <line x1="14" y1="1" x2="14" y2="4"/>
    </svg>
  ),
  washing: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
      <path d="M16 21V11a6 6 0 0 0-12 0v10"/>
    </svg>
  ),
  elevator: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="4" y="4" width="16" height="16" rx="2"/>
      <path d="M8 8l4 4 4-4"/>
      <path d="M8 16l4-4 4 4"/>
    </svg>
  ),
  parking: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
      <path d="M7 7h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7z"/>
    </svg>
  ),
  pool: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M22 20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"/>
      <path d="M2 12h20"/>
      <path d="M7 12v3a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-3"/>
    </svg>
  ),
  gym: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M6 4h12a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/>
      <path d="M6 8h4"/>
      <path d="M6 12h4"/>
      <path d="M6 16h4"/>
      <path d="M14 8h4"/>
      <path d="M14 12h4"/>
      <path d="M14 16h4"/>
    </svg>
  ),
  restaurant: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M18 8h1a4 4 0 0 1 0 8h-1"/>
      <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/>
      <line x1="6" y1="1" x2="6" y2="4"/>
      <line x1="10" y1="1" x2="10" y2="4"/>
      <line x1="14" y1="1" x2="14" y2="4"/>
    </svg>
  ),
  calendar: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
      <line x1="16" y1="2" x2="16" y2="6"/>
      <line x1="8" y1="2" x2="8" y2="6"/>
      <line x1="3" y1="10" x2="21" y2="10"/>
    </svg>
  ),
  user: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
      <circle cx="12" cy="7" r="4"/>
    </svg>
  ),
  message: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
    </svg>
  ),
  info: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <line x1="12" y1="16" x2="12" y2="12"/>
      <line x1="12" y1="8" x2="12.01" y2="8"/>
    </svg>
  ),
  whatsapp: () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
    </svg>
  ),
  star: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
    </svg>
  ),
  clock: () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10"/>
      <polyline points="12,6 12,12 16,14"/>
    </svg>
  )
}

const PropertyDetails = () => {
  const { id } = useParams()
  const [property, setProperty] = useState(null)
  const [approvedReviews, setApprovedReviews] = useState([])
  const [loading, setLoading] = useState(true)
  const [propertyLoading, setPropertyLoading] = useState(true)
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [guestCount, setGuestCount] = useState(1)
  const [showAmenities, setShowAmenities] = useState(false)
  const [readMore, setReadMore] = useState(false)
  const [showImageModal, setShowImageModal] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Intersection observer hooks for animations
  const [headerRef, headerInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [amenitiesRef, amenitiesInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [reviewsRef, reviewsInView] = useInView({ threshold: 0.1, triggerOnce: true })
  const [bookingRef, bookingInView] = useInView({ threshold: 0.1, triggerOnce: true })

  useEffect(() => {
    loadProperty()
  }, [id])

  useEffect(() => {
    if (property) {
      loadApprovedReviews()
    }
  }, [property])

  const loadProperty = async () => {
    try {
      setPropertyLoading(true)
      const response = await fetchPropertyById(id)
      setProperty(response.data)
    } catch (error) {
      console.error('Error loading property:', error)
    } finally {
      setPropertyLoading(false)
    }
  }

  const loadApprovedReviews = async () => {
    try {
      setLoading(true)
      const response = await fetchReviews({ status: 'approved', listing: property?.listingName || '2B N1 A - 29 Shoreditch Heights' })
      setApprovedReviews(response.data)
    } catch (error) {
      console.error('Error loading approved reviews:', error)
    } finally {
      setLoading(false)
    }
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`star ${i < rating ? 'filled' : 'empty'} animate-fade-in`}
        style={{ animationDelay: `${i * 0.1}s` }}
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

  const calculateAverageRating = () => {
    if (approvedReviews.length === 0) return 0
    const total = approvedReviews.reduce((sum, review) => sum + review.rating, 0)
    return Math.round((total / approvedReviews.length) * 10) / 10
  }

  const averageRating = calculateAverageRating()

  const handleCheckAvailability = () => {
    if (!startDate || !endDate) {
      alert('Please select both start and end dates')
      return
    }
    // Here you would typically make an API call to check availability
    console.log('Checking availability for:', { startDate, endDate, guestCount })
  }

  const handleSendInquiry = () => {
    // Here you would typically open a contact form or modal
    console.log('Sending inquiry for:', { startDate, endDate, guestCount })
  }

  const toggleAmenities = () => {
    setShowAmenities(!showAmenities)
  }

  const toggleReadMore = () => {
    setReadMore(!readMore)
  }

  const openImageModal = () => {
    setShowImageModal(true)
    setCurrentImageIndex(0)
  }

  const closeImageModal = () => {
    setShowImageModal(false)
  }

  const nextImage = () => {
    if (property?.images && currentImageIndex < property.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1)
    }
  }

  const previousImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1)
    }
  }

  const selectImage = (index) => {
    setCurrentImageIndex(index)
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!showImageModal) return
      
      switch (e.key) {
        case 'Escape':
          closeImageModal()
          break
        case 'ArrowRight':
          nextImage()
          break
        case 'ArrowLeft':
          previousImage()
          break
        default:
          break
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [showImageModal, currentImageIndex, property?.images])

  // Map property amenities to icon components
  const getAmenityIcon = (amenityName) => {
    const iconMap = {
      'Internet': Icons.wifi,
      'Smart TV': Icons.tv,
      'Kitchen': Icons.kitchen,
      'Washing Machine': Icons.washing,
      'Heating': Icons.signal,
      'Gym': Icons.gym,
      'Hair Dryer': Icons.user
    }
    return iconMap[amenityName] || Icons.home
  }

  const amenities = property?.amenities?.map(amenity => ({
    icon: getAmenityIcon(amenity),
    text: amenity
  })) || []

  // Show loading state while property is being fetched
  if (propertyLoading) {
    return (
      <div className="property-details">
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading property details...</p>
        </div>
      </div>
    )
  }

  // Show error state if property not found
  if (!property) {
    return (
      <div className="property-details">
        <div className="error-container">
          <h1>Property Not Found</h1>
          <p>The property you're looking for doesn't exist or has been removed.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="property-details">
      {/* Property Images Section */}
      <div className="property-images-section">
        <div className="images-grid">
          <div className="main-image">
            <img 
              src={property.images?.[0] || '/logo.png'} 
              alt="Main property view"
              className="main-image-img"
              onError={(e) => {
                e.target.src = '/logo.png'
              }}
            />
          </div>
          <div className="secondary-images">
            <div className="secondary-image">
              <img 
                src={property.images?.[1] || '/logo.png'} 
                alt="Property view 1"
                className="secondary-image-img"
                onError={(e) => {
                  e.target.src = '/logo.png'
                }}
              />
            </div>
            <div className="secondary-image">
              <img 
                src={property.images?.[2] || '/logo.png'} 
                alt="Property view 2"
                className="secondary-image-img"
                onError={(e) => {
                  e.target.src = '/logo.png'
                }}
              />
            </div>
            <div className="secondary-image">
              <img 
                src={property.images?.[3] || '/logo.png'} 
                alt="Property view 3"
                className="secondary-image-img"
                onError={(e) => {
                  e.target.src = '/logo.png'
                }}
              />
            </div>
            <div className="secondary-image">
              <img 
                src={property.images?.[4] || '/logo.png'} 
                alt="Property view 4"
                className="secondary-image-img"
                onError={(e) => {
                  e.target.src = '/logo.png'
                }}
              />
            </div>
          </div>
        </div>
        <button className="view-all-photos-btn" onClick={openImageModal}>
          <span>View all photos</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 3h6v6"/>
            <path d="M10 14L21 3"/>
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
          </svg>
        </button>
      </div>

      {/* Property Header */}
      <div 
        className={`property-header ${headerInView ? 'animate-fade-in' : ''}`}
        ref={headerRef}
      >
        <h1 className="property-title">{property.listingName}</h1>
        <div 
          className={`property-stats ${headerInView ? 'animate-fade-in' : ''}`}
        >
          <div className="stat-item">
            <span className="stat-icon"><Icons.users /></span>
            <span className="stat-text">5 guests</span>
          </div>
          <div className="stat-item">
            <span className="stat-icon"><Icons.bed /></span>
            <span className="stat-text">2 bedrooms</span>
          </div>
          <div className="stat-item">
            <span className="stat-icon"><Icons.bathroom /></span>
            <span className="stat-text">1 bathrooms</span>
          </div>
          <div className="stat-item">
            <span className="stat-icon"><Icons.home /></span>
            <span className="stat-text">3 beds</span>
          </div>
        </div>
      </div>

      <div className="property-content">
        <div className="property-main">
          {/* About this property */}
          <div 
            className={`info-card ${headerInView ? 'animate-fade-in' : ''}`}
          >
            <h2 className="card-title">About this property</h2>
            <p className="property-description">
              {readMore ? property.about : property.about.length > 200 ? `${property.about.substring(0, 200)}...` : property.about}
            </p>
            {property.about.length > 200 && (
              <button className="read-more-btn" onClick={toggleReadMore}>
                {readMore ? 'Show less' : 'Read more'}
              </button>
            )}
          </div>

          {/* Amenities */}
          <div 
            className={`info-card ${amenitiesInView ? 'animate-fade-in' : ''}`}
            ref={amenitiesRef}
          >
            <div className="amenities-header">
              <h2 className="card-title">Amenities</h2>
              {amenities.length > 6 && (
                <button 
                  className="view-all-btn"
                  onClick={toggleAmenities}
                >
                  {showAmenities ? 'Hide amenities <' : 'View all amenities >'}
                </button>
              )}
            </div>
            
            <div className="amenities-grid">
              {(showAmenities ? amenities : amenities.slice(0, 6)).map((amenity, index) => (
                <div 
                  key={index}
                  className={`amenity-item animate-fade-in`}
                >
                  <span className="amenity-icon">{amenity.icon()}</span>
                  <span className="amenity-text">{amenity.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews Section */}
          <div 
            className={`info-card ${reviewsInView ? 'animate-fade-in' : ''}`}
            ref={reviewsRef}
          >
            <div className="reviews-header">
              <h2 className="card-title">Guest Reviews</h2>
              <div className="rating-summary">
                <div 
                  className={`average-rating ${reviewsInView ? 'animate-fade-in' : ''}`}
                >
                  <span className="rating-number">{averageRating}</span>
                  <div className="rating-stars">
                    {renderStars(averageRating)}
                  </div>
                  <span className="review-count">({approvedReviews.length} reviews)</span>
                </div>
              </div>
            </div>

            {loading ? (
              <div className="loading-container">
                <div className="spinner"></div>
              </div>
            ) : approvedReviews.length === 0 ? (
              <div className="no-reviews">
                <p>No reviews yet. Be the first to review this property!</p>
              </div>
            ) : (
              <div className="reviews-list">
                {approvedReviews.map((review, index) => (
                  <div 
                    key={review.id} 
                    className={`review-item animate-fade-in`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="review-header">
                      <div className="reviewer-info">
                        <div className="reviewer-avatar">
                          <Icons.user />
                        </div>
                        <div className="reviewer-details">
                          <h4 className="reviewer-name">{review.guestName}</h4>
                          <div className="review-rating">
                            {renderStars(review.rating)}
                            <span className="rating-text">{review.rating}/5</span>
                          </div>
                        </div>
                      </div>
                      <div className="review-date">
                        <Icons.clock />
                        <span>{formatDate(review.submittedAt)}</span>
                      </div>
                    </div>

                    <p className="review-text">{review.publicReview}</p>

                    <div className="review-categories">
                      {review.reviewCategory.map((category, index) => (
                        <span
                          key={index}
                          className="category-tag"
                        >
                          {category.category.replace('_', ' ')}: {category.rating}/10
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Booking Section */}
        <div 
          className={`property-sidebar ${bookingInView ? 'animate-fade-in' : ''}`}
          ref={bookingRef}
        >
          <div className="booking-card hover-lift">
            <h2 className="booking-title">Book your stay</h2>
            <p className="booking-subtitle">Select dates to see the total price.</p>
            
            <div className="booking-form">
              <div className="form-group">
                <label className="form-label">Select dates</label>
                <div className="date-input">
                  <span className="input-icon"><Icons.calendar /></span>
                  <DatePicker
                    selected={startDate}
                    onChange={(date) => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    placeholderText="Check-in date"
                    className="form-input"
                    dateFormat="MMM dd, yyyy"
                    minDate={new Date()}
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Check-out date</label>
                <div className="date-input">
                  <span className="input-icon"><Icons.calendar /></span>
                  <DatePicker
                    selected={endDate}
                    onChange={(date) => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    minDate={startDate}
                    placeholderText="Check-out date"
                    className="form-input"
                    dateFormat="MMM dd, yyyy"
                  />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Guests</label>
                <div className="guest-input">
                  <span className="input-icon"><Icons.user /></span>
                  <select 
                    className="form-select"
                    value={guestCount}
                    onChange={(e) => setGuestCount(parseInt(e.target.value))}
                  >
                    <option value="1">1 guest</option>
                    <option value="2">2 guests</option>
                    <option value="3">3 guests</option>
                    <option value="4">4 guests</option>
                    <option value="5">5 guests</option>
                  </select>
                </div>
              </div>

              <button 
                className="check-availability-btn hover-scale"
                onClick={handleCheckAvailability}
              >
                <span className="btn-icon"><Icons.calendar /></span>
                Check availability
              </button>

              <button 
                className="send-inquiry-btn hover-scale"
                onClick={handleSendInquiry}
              >
                <span className="btn-icon"><Icons.message /></span>
                Send Inquiry
              </button>

              <div className="instant-confirmation">
                <span className="info-icon"><Icons.info /></span>
                <span>Instant confirmation</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="whatsapp-float animate-scale-in hover-scale">
        <Icons.whatsapp />
      </div>

      {/* Image Viewer Modal */}
      {showImageModal && (
        <div className="image-modal-overlay" onClick={closeImageModal}>
          <div className="image-modal-content" onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button className="modal-close-btn" onClick={closeImageModal}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>

            {/* Image Counter */}
            <div className="image-counter">
              {currentImageIndex + 1}/{property?.images?.length || 0}
            </div>

            {/* Main Image */}
            <div className="modal-main-image">
              <img 
                src={property?.images?.[currentImageIndex] || '/logo.png'} 
                alt={`Property image ${currentImageIndex + 1}`}
                className="modal-image"
                onError={(e) => {
                  e.target.src = '/logo.png'
                }}
              />
            </div>

            {/* Navigation Arrows */}
            {currentImageIndex > 0 && (
              <button className="nav-arrow nav-arrow-left" onClick={previousImage}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
            )}
            
            {property?.images && currentImageIndex < property.images.length - 1 && (
              <button className="nav-arrow nav-arrow-right" onClick={nextImage}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            )}

            {/* Thumbnail Gallery */}
            {property?.images && property.images.length > 1 && (
              <div className="thumbnail-gallery">
                <div className="thumbnails-container">
                  {property.images.map((image, index) => (
                    <div 
                      key={index}
                      className={`thumbnail ${index === currentImageIndex ? 'active' : ''}`}
                      onClick={() => selectImage(index)}
                    >
                      <img 
                        src={image} 
                        alt={`Thumbnail ${index + 1}`}
                        className="thumbnail-image"
                        onError={(e) => {
                          e.target.src = '/logo.png'
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default PropertyDetails 