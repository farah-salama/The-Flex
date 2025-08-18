# The Flex Backend

Lightweight Express server powering the The Flex Reviews Dashboard. It serves mock Hostaway reviews, allows simple review moderation, lists mock properties, and can enrich a property with live Google Places reviews when configured.

## What this backend does

- Serves a mock representation of Hostaway reviews for development/testing
- Provides a filterable/paginated reviews API backed by in-memory mock data
- Supports review moderation: approve, reject, reset to pending
- Exposes property data from mock fixtures
- Optionally fetches and attaches Google Places reviews for a property when a valid Google Maps API key is present
- Provides health and basic error/404 responses

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in `backend/` with any of the following:
```
PORT=5000
NODE_ENV=development

# Optional: enables Google Places reviews enrichment on GET /api/properties/:id
GOOGLE_MAPS_API_KEY=your_google_maps_api_key

# Informational only right now; not used by the code paths (Hostaway is mocked)
HOSTAWAY_ACCOUNT_ID=your_hostaway_account_id
HOSTAWAY_API_KEY=your_hostaway_api_key
```

3. Start the server:
```bash
npm run dev
# or
npm start
```

On start you should see URLs printed for health and the Hostaway mock endpoint.

## Dependencies

- express: Web framework
- cors: Cross-origin request support
- dotenv: Environment variables loader
- @googlemaps/google-maps-services-js: Used to fetch Google Places details/reviews when `GOOGLE_MAPS_API_KEY` is set

## API Reference

### Health
- `GET /health` → `{ status: "OK", message: "The Flex Backend is running" }`

### Reviews
- `GET /api/reviews/hostaway` — Returns mocked Hostaway reviews
- `GET /api/reviews` — Returns reviews with filtering, sorting, and pagination
- `PUT /api/reviews/:id/approve` — Mark a review as approved
- `PUT /api/reviews/:id/reject` — Mark a review as rejected
- `PUT /api/reviews/:id/reset` — Reset a review back to pending

#### Query parameters for `GET /api/reviews`
- `rating` — Minimum rating (number)
- `category` — Category name to include (e.g. cleanliness)
- `channel` — Source channel (e.g. airbnb)
- `listing` — Partial match against `listingName`
- `status` — `pending` | `approved` | `rejected`
- `startDate`, `endDate` — ISO or date-like range on `submittedAt`
- `sortBy` — Field to sort by (default: `submittedAt`)
- `sortOrder` — `asc` | `desc` (default: `desc`)
- `page` — Page number (default: 1)
- `limit` — Items per page (default: 20)

Example:
```bash
curl "http://localhost:5000/api/reviews?rating=4&status=approved&page=1&limit=10"
```

### Properties
- `GET /api/properties` — List all mock properties
- `GET /api/properties/:id` — Get a property by id
  - If the property contains a Google Places `location.id` (Place ID) and `GOOGLE_MAPS_API_KEY` is set, the response includes a `googlePlacesReviews` object with `reviews`, `totalReviews`, `averageRating`, and `lastFetched`.
  - If no key is provided or the fetch fails, the endpoint still returns the property, optionally with a `warning` field.

Example:
```bash
curl http://localhost:5000/api/properties/prop_002
```

## Data shapes (abridged)

Review item (from `GET /api/reviews`):
```json
{
  "id": 7454,
  "type": "guest-to-host",
  "status": "approved",
  "rating": 4,
  "publicReview": "Great location and clean apartment...",
  "reviewCategory": [{ "category": "cleanliness", "rating": 8 }],
  "submittedAt": "2020-08-20 15:30:22",
  "guestName": "Emma Thompson",
  "listingName": "Luxury 2BR Apartment - Shoreditch Heights",
  "channel": "airbnb",
  "propertyId": "prop_001"
}
```

Property with optional Google Places reviews (from `GET /api/properties/:id`):
```json
{
  "id": "prop_002",
  "listingName": "Modern Studio - Canary Wharf Business District",
  "location": { "id": "ChIJL5kSeroCdkgRQUpeeoUh2AQ", "latitude": 51.5054, "longitude": -0.0235 },
  "images": ["https://..."],
  "googlePlacesReviews": {
    "reviews": [
      {
        "id": "google_...",
        "author": "John Doe",
        "rating": 5,
        "content": "Great place!",
        "date": "2024-01-01T12:34:56.000Z",
        "source": "Google Places",
        "status": "approved"
      }
    ],
    "totalReviews": 123,
    "averageRating": 4.7,
    "lastFetched": "2024-01-02T08:00:00.000Z"
  }
}
```

## Notes

- Reviews and properties are served from mock fixtures in-memory; there is no database and changes are not persisted across restarts.
- Hostaway endpoints are mocked; `HOSTAWAY_*` variables are not required for local development.

## Local URLs

- Health: `http://localhost:5000/health`
- Reviews (mock Hostaway): `http://localhost:5000/api/reviews/hostaway`
- Reviews (filtered): `http://localhost:5000/api/reviews`
- Properties: `http://localhost:5000/api/properties`
- Property by id: `http://localhost:5000/api/properties/prop_001`