import axios from 'axios'

const API_BASE_URL = '/api'

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Fetch all reviews with filtering
export const fetchReviews = async (filters = {}, page = 1) => {
  const params = new URLSearchParams({
    page,
    limit: 20,
    ...filters
  })
  
  const response = await api.get(`/reviews?${params}`)
  return response.data
}

// Fetch reviews from Hostaway API
export const fetchHostawayReviews = async () => {
  const response = await api.get('/reviews/hostaway')
  return response.data
}

// Approve a review
export const approveReview = async (reviewId) => {
  const response = await api.put(`/reviews/${reviewId}/approve`)
  return response.data
}

// Reject a review
export const rejectReview = async (reviewId) => {
  const response = await api.put(`/reviews/${reviewId}/reject`)
  return response.data
}

// Reset a review back to pending
export const resetReview = async (reviewId) => {
  const response = await api.put(`/reviews/${reviewId}/reset`)
  return response.data
}

// Fetch property by ID
export const fetchPropertyById = async (propertyId) => {
  const response = await api.get(`/properties/${propertyId}`)
  return response.data
}

// Fetch all properties
export const fetchProperties = async () => {
  const response = await api.get('/properties')
  return response.data
}

export default api 