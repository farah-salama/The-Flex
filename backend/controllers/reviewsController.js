const mockReviews = require('../data/mockReviews');

// Mock Hostaway API response structure
const mockHostawayResponse = {
  status: "success",
  result: mockReviews.map(review => ({
    id: review.id,
    type: review.type,
    status: review.status,
    rating: review.rating,
    publicReview: review.publicReview,
    reviewCategory: review.reviewCategory,
    submittedAt: review.submittedAt,
    guestName: review.guestName,
    listingName: review.listingName
  }))
};

// Get reviews from Hostaway API (mocked)
const getHostawayReviews = async (req, res) => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    res.json({
      status: 'success',
      message: 'Reviews fetched successfully from Hostaway API',
      data: mockHostawayResponse.result,
      total: mockHostawayResponse.result.length
    });
  } catch (error) {
    console.error('Error fetching Hostaway reviews:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch reviews from Hostaway API'
    });
  }
};

// Get all reviews with filtering
const getAllReviews = async (req, res) => {
  try {
    const { 
      rating, 
      category, 
      channel, 
      listing, 
      status,
      startDate,
      endDate,
      sortBy = 'submittedAt',
      sortOrder = 'desc',
      page = 1,
      limit = 20
    } = req.query;

    let filteredReviews = [...mockReviews];

    // Filter by rating
    if (rating) {
      filteredReviews = filteredReviews.filter(review => 
        review.rating >= parseInt(rating)
      );
    }

    // Filter by category
    if (category) {
      filteredReviews = filteredReviews.filter(review =>
        review.reviewCategory.some(cat => 
          cat.category === category
        )
      );
    }

    // Filter by listing
    if (listing) {
      filteredReviews = filteredReviews.filter(review =>
        review.listingName.toLowerCase().includes(listing.toLowerCase())
      );
    }

    // Filter by status
    if (status) {
      filteredReviews = filteredReviews.filter(review =>
        review.status === status
      );
    }

    // Filter by date range
    if (startDate || endDate) {
      filteredReviews = filteredReviews.filter(review => {
        const reviewDate = new Date(review.submittedAt);
        if (startDate && endDate) {
          return reviewDate >= new Date(startDate) && reviewDate <= new Date(endDate);
        } else if (startDate) {
          return reviewDate >= new Date(startDate);
        } else if (endDate) {
          return reviewDate <= new Date(endDate);
        }
        return true;
      });
    }

    // Sort reviews
    filteredReviews.sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];
      
      if (sortBy === 'submittedAt') {
        aValue = new Date(aValue);
        bValue = new Date(bValue);
      }
      
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

    // Pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + parseInt(limit);
    const paginatedReviews = filteredReviews.slice(startIndex, endIndex);

    res.json({
      status: 'success',
      data: paginatedReviews,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(filteredReviews.length / limit),
        totalItems: filteredReviews.length,
        itemsPerPage: parseInt(limit)
      },
      filters: {
        rating,
        category,
        channel,
        listing,
        status,
        startDate,
        endDate,
        sortBy,
        sortOrder
      }
    });
  } catch (error) {
    console.error('Error getting reviews:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to get reviews'
    });
  }
};

// Approve a review
const approveReview = async (req, res) => {
  try {
    const { id } = req.params;
    const review = mockReviews.find(r => r.id === parseInt(id));
    
    if (!review) {
      return res.status(404).json({
        status: 'error',
        message: 'Review not found'
      });
    }

    review.status = 'approved';
    review.approvedAt = new Date().toISOString();
    review.rejectedAt = null; // Clear rejection timestamp if it exists

    res.json({
      status: 'success',
      message: 'Review approved successfully',
      data: review
    });
  } catch (error) {
    console.error('Error approving review:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to approve review'
    });
  }
};

// Reject a review
const rejectReview = async (req, res) => {
  try {
    const { id } = req.params;
    const review = mockReviews.find(r => r.id === parseInt(id));
    
    if (!review) {
      return res.status(404).json({
        status: 'error',
        message: 'Review not found'
      });
    }

    review.status = 'rejected';
    review.rejectedAt = new Date().toISOString();
    review.approvedAt = null; // Clear approval timestamp if it exists

    res.json({
      status: 'success',
      message: 'Review rejected successfully',
      data: review
    });
  } catch (error) {
    console.error('Error rejecting review:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to reject review'
    });
  }
};

// Reset a review back to pending
const resetReview = async (req, res) => {
  try {
    const { id } = req.params;
    const review = mockReviews.find(r => r.id === parseInt(id));
    
    if (!review) {
      return res.status(404).json({
        status: 'error',
        message: 'Review not found'
      });
    }

    review.status = 'pending';
    review.approvedAt = null;
    review.rejectedAt = null;

    res.json({
      status: 'success',
      message: 'Review reset to pending successfully',
      data: review
    });
  } catch (error) {
    console.error('Error resetting review:', error);
    res.status(500).json({
      status: 'error',
      message: 'Failed to reset review'
    });
  }
};

module.exports = {
  getHostawayReviews,
  getAllReviews,
  approveReview,
  rejectReview,
  resetReview
}; 