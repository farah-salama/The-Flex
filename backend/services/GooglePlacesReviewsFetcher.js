const { Client } = require('@googlemaps/google-maps-services-js');

class GooglePlacesReviewsFetcher {
  constructor(apiKey) {
    this.client = new Client({});
    this.apiKey = apiKey;
  }

  async fetchReviews(placeId) {
    try {
      // First, get the place details to ensure the place exists
      const placeDetailsResponse = await this.client.placeDetails({
        params: {
          place_id: placeId,
          key: this.apiKey,
          fields: ['place_id', 'name', 'rating', 'reviews', 'user_ratings_total']
        }
      });

      if (placeDetailsResponse.data.status !== 'OK') {
        throw new Error(`Place details failed: ${placeDetailsResponse.data.status}`);
      }

      const place = placeDetailsResponse.data.result;
      
      // If no reviews available, return empty array
      if (!place.reviews || place.reviews.length === 0) {
        return {
          reviews: [],
          totalReviews: place.user_ratings_total || 0,
          averageRating: place.rating || 0
        };
      }

      // Transform Google Places reviews to match our review format
      const transformedReviews = place.reviews.map(review => ({
        id: `google_${review.time || Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
        author: review.author_name,
        rating: review.rating,
        content: review.text,
        date: new Date(review.time * 1000).toISOString(),
        source: 'Google Places',
        status: 'approved', // Google reviews are pre-approved
        helpful: review.rating >= 4 ? true : false,
        propertyId: null, // Will be set when adding to property
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }));

      return {
        reviews: transformedReviews,
        totalReviews: place.user_ratings_total || 0,
        averageRating: place.rating || 0
      };

    } catch (error) {
      console.error('Error fetching Google Places reviews:', error);
      throw new Error(`Failed to fetch Google Places reviews: ${error.message}`);
    }
  }

  async fetchPlaceDetails(placeId) {
    try {
      const response = await this.client.placeDetails({
        params: {
          place_id: placeId,
          key: this.apiKey,
          fields: ['name', 'formatted_address', 'rating', 'user_ratings_total', 'types']
        }
      });

      if (response.data.status !== 'OK') {
        throw new Error(`Place details failed: ${response.data.status}`);
      }

      return response.data.result;
    } catch (error) {
      console.error('Error fetching place details:', error);
      throw new Error(`Failed to fetch place details: ${error.message}`);
    }
  }
}

module.exports = GooglePlacesReviewsFetcher; 