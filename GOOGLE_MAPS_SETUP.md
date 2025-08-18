# Google Maps Integration Setup

This guide explains how to set up Google Maps integration for your property details page.

## Prerequisites

1. A Google Cloud Platform account
2. APIs enabled for your project:
   - Maps JavaScript API (frontend map rendering)
   - Places API (backend place details/reviews)
3. API keys with appropriate restrictions (one browser key, one server key recommended)

## Setup Steps

### 1. Get a Google Maps API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the following APIs:
   - Maps JavaScript API
   - Geocoding API (optional, for address lookup)
4. Go to "Credentials" and create an API key
5. Restrict the API key to your domain for security

### 2. Configure API keys via environment variables

Frontend (browser key):
```env
# frontend/.env
REACT_APP_GOOGLE_MAPS_API_KEY=your_browser_google_maps_key
```

Backend:
```env
# backend/.env
GOOGLE_MAPS_API_KEY=your_server_side_google_maps_key
```

The frontend loads the Maps JavaScript API dynamically in `PropertyMap.jsx` using `REACT_APP_GOOGLE_MAPS_API_KEY`. No manual `<script>` tag is needed in `public/index.html`.

### 3. Update Property Data

Ensure your property data includes:

- `id` — The internal property ID used by the API and frontend routing (e.g. `prop_001`)
- `location.latitude` and `location.longitude` — Coordinates for the map
- `location.id` — Google Places Place ID used by the backend to fetch Google reviews (when configured)

Example (abridged):
```json
{
  "id": "prop_002",
  "listingName": "Modern Studio - Canary Wharf Business District",
  "location": {
    "address": "25 Canary Wharf, London, UK",
    "latitude": 51.5054,
    "longitude": -0.0235,
    "id": "ChIJL5kSeroCdkgRQUpeeoUh2AQ"
  }
}
```

### 4. Test the Integration

1. Start your backend server
2. Start your frontend application
3. Navigate to a property details page
4. Scroll down to see the "Location" section with the map
5. If the backend `GOOGLE_MAPS_API_KEY` is set and the property includes a valid Places `location.id`, the property response may include a `googlePlacesReviews` section

### 5. Example: Using the property ID

Backend API call using the internal property ID:
```bash
curl http://localhost:5000/api/properties/prop_002
```

If `GOOGLE_MAPS_API_KEY` is set and the property has a valid Google Places `location.id`, the response will include:
```json
{
  "status": "success",
  "data": {
    "id": "prop_002",
    "listingName": "Modern Studio - Canary Wharf Business District",
    "location": { "id": "ChIJL5kSeroCdkgRQUpeeoUh2AQ", "latitude": 51.5054, "longitude": -0.0235 },
    "googlePlacesReviews": {
      "reviews": [
        { "id": "google_...", "author": "...", "rating": 5, "content": "...", "date": "..." }
      ],
      "totalReviews": 123,
      "averageRating": 4.7,
      "lastFetched": "2024-01-02T08:00:00.000Z"
    }
  }
}
```

Frontend route using the same property ID:
```
/property/prop_002
```

The frontend requests `GET /api/properties/:id` and renders the map with `REACT_APP_GOOGLE_MAPS_API_KEY` and any `googlePlacesReviews` returned by the backend.

## Property ID vs Google Places Place ID

- **Property ID** (`id`, e.g. `prop_001`) identifies your listing within this app and is used in URLs like `GET /api/properties/:id` and `/property/:id`.
- **Google Places Place ID** (`location.id`, e.g. `ChIJ...`) identifies the location in Google’s databases and is used by the backend to fetch Google reviews. It is not used in the URL path.

## Features

- **Interactive Map**: Shows the property location with a custom marker
- **Info Window**: Click the marker to see property details
- **Responsive Design**: Adapts to different screen sizes
- **Fallback Display**: Shows location information if the map fails to load
- **Custom Styling**: Matches your application's design theme

## Customization

### Map Styles

You can customize the map appearance by modifying the `styles` array in `PropertyMap.jsx`:

```javascript
styles: [
  {
    featureType: 'poi',
    elementType: 'labels',
    stylers: [{ visibility: 'off' }]
  }
  // Add more custom styles here
]
```

### Map Options

Modify map options like zoom level, center, and controls in the `PropertyMap` component:

```javascript
const map = new window.google.maps.Map(mapRef.current, {
  center: { lat: parseFloat(latitude), lng: parseFloat(longitude) },
  zoom: 15,
  disableDefaultUI: false,
  zoomControl: true,
  mapTypeControl: false,
  scaleControl: true,
  streetViewControl: false,
  rotateControl: false,
  fullscreenControl: false,
});
```

### Marker Customization

Customize the marker appearance and behavior:

```javascript
const marker = new window.google.maps.Marker({
  position: { lat: parseFloat(latitude), lng: parseFloat(longitude) },
  map: map,
  title: listingName,
  animation: window.google.maps.Animation.DROP,
  // Add custom icon, color, etc.
});
```

## Troubleshooting

### Map Not Loading

1. Check if your `REACT_APP_GOOGLE_MAPS_API_KEY` is correct and present in `frontend/.env`
2. Verify the Maps JavaScript API is enabled in Google Cloud Console
3. Check browser console for error messages
4. Ensure you have billing enabled (Google Maps API requires billing)
5. Remember to restart the dev server after changing `.env`

### Coordinates Issues

1. Verify latitude and longitude are valid numbers
2. Check if coordinates are in the correct format (decimal degrees)
3. Ensure coordinates are within valid ranges (-90 to 90 for latitude, -180 to 180 for longitude)

### Performance Issues

1. Consider implementing map lazy loading
2. Add map caching for frequently accessed properties
3. Optimize map rendering for mobile devices

## Security Considerations

1. **Restrict API Keys**: 
   - Restrict the browser key to your allowed referrers (domains)
   - Restrict the server key by IP and limit to required APIs
2. **Monitor Usage**: Set up billing alerts and usage quotas
3. **HTTPS Only**: Ensure your application runs over HTTPS in production
4. **Rate Limiting**: Implement rate limiting if needed

## Cost Management

Google Maps API has usage-based pricing. Monitor your usage to avoid unexpected charges

## Support

For Google Maps API issues:
- [Google Maps Platform Documentation](https://developers.google.com/maps/documentation)
- [Google Cloud Support](https://cloud.google.com/support)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/google-maps-api-3) 