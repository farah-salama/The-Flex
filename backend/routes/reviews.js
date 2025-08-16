const express = require('express');
const router = express.Router();
const reviewsController = require('../controllers/reviewsController');

// GET /api/reviews/hostaway - Fetch reviews from Hostaway API (mocked)
router.get('/hostaway', reviewsController.getHostawayReviews);

// GET /api/reviews - Get all reviews with filtering
router.get('/', reviewsController.getAllReviews);

// PUT /api/reviews/:id/approve - Approve a review for public display
router.put('/:id/approve', reviewsController.approveReview);

// PUT /api/reviews/:id/reject - Reject a review
router.put('/:id/reject', reviewsController.rejectReview);

// PUT /api/reviews/:id/reset - Reset a review back to pending
router.put('/:id/reset', reviewsController.resetReview);

module.exports = router; 