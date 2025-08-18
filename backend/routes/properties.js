const express = require('express');
const router = express.Router();
const mockProperties = require('../data/mockProperties');
const GooglePlacesReviewsFetcher = require('../services/GooglePlacesReviewsFetcher');

// Get all properties
router.get('/', (req, res) => {
  try {
    res.json({
      status: 'success',
      data: mockProperties
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch properties'
    });
  }
});

// Get property by ID with Google Places reviews
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const property = mockProperties.find(prop => prop.id === id);
    
    if (!property) {
      return res.status(404).json({
        status: 'error',
        message: 'Property not found'
      });
    }

    // Check if property has a Google Places location ID
    if (property.location && property.location.id) {
      try {
        // Get Google Maps API key from environment
        const googleMapsApiKey = process.env.GOOGLE_MAPS_API_KEY;
        
        if (googleMapsApiKey) {
          const reviewsFetcher = new GooglePlacesReviewsFetcher(googleMapsApiKey);
          const placeId = property.location.id;
          
          // Fetch Google Places reviews
          const googleReviewsData = await reviewsFetcher.fetchReviews(placeId);
          // Add Google Places reviews to the property
          const propertyWithReviews = {
            ...property,
            googlePlacesReviews: {
              reviews: googleReviewsData.reviews,
              totalReviews: googleReviewsData.totalReviews,
              averageRating: googleReviewsData.averageRating,
              lastFetched: new Date().toISOString()
            }
          };
          
          res.json({
            status: 'success',
            data: propertyWithReviews
          });
        } else {
          // No API key available, return property without reviews
          console.warn('Google Maps API key not found in environment variables');
          res.json({
            status: 'success',
            data: property
          });
        }
      } catch (googleError) {
        console.error('Error fetching Google Places reviews:', googleError);
        // Return property without reviews if Google Places fails
        res.json({
          status: 'success',
          data: property,
          warning: 'Google Places reviews could not be fetched'
        });
      }
    } else {
      // No location ID, return property as is
      res.json({
        status: 'success',
        data: property
      });
    }
    
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to fetch property'
    });
  }
});

module.exports = router; 