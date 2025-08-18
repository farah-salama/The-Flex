# The Flex Frontend

React app for the The Flex Reviews Dashboard. It provides a reviews management dashboard and property detail pages, talking to the backend via a development proxy. Optionally displays a Google Map on the property page when configured.

## What this frontend does

- Displays a filterable, paginated list of reviews with moderation actions (approve, reject, reset)
- Shows aggregate review stats and supports advanced filters and sorting
- Renders property detail pages with images, amenities, policies, location map, and approved reviews
- Optionally shows Google Places reviews on the property page if present in the backend response

## Quick start

1. Install dependencies:
```bash
npm install
```

2. (Optional) Create a `.env` file in `frontend/` to enable the map on property pages:
```
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_maps_browser_key
```

3. Start the app:
```bash
npm start
```

The app runs at `http://localhost:3000` and proxies API calls to `http://localhost:5000` (configured in `package.json`). Start the backend first or in parallel.

## Scripts

- `npm start` — Run the development server
- `npm run build` — Build for production

## Routes

- `/` — Reviews Dashboard
- `/property/:id` — Property details (e.g. `/property/prop_001`)

## Key features

### Dashboard
- Filter by rating, category, status, date range, and property name
- Sort by date, rating, guest name, or property
- Pagination with current/total indicators
- Review moderation: approve, reject, reset (updates and reloads the list)
- Stats summary across the visible reviews

### Property details
- Images grid with modal viewer and thumbnails
- About, amenities, stay policies, house rules, cancellation policies
- Location map (Google Maps) when `REACT_APP_GOOGLE_MAPS_API_KEY` is set
- Guest reviews section showing only approved reviews for that property
- Optional Google Places reviews panel if backend enriched the property response

## Components (selected)

- `Layout` — App shell with header/nav
- `ReviewFilters` — Basic + advanced filters with date pickers
- `ReviewCard` — Review display with moderation actions
- `ReviewStats` — Review metrics summary
- `PropertyMap` — Lazy loads Google Maps JS API using `REACT_APP_GOOGLE_MAPS_API_KEY`
- `BookingCard` — UI-only booking widget on the property page

## API integration

Configured via a proxy to `http://localhost:5000` so the app calls relative paths under `/api`.

Used endpoints:
- `GET /api/reviews` — List/filter/paginate reviews
- `GET /api/reviews/hostaway` — Mock Hostaway reviews
- `PUT /api/reviews/:id/approve` — Approve review
- `PUT /api/reviews/:id/reject` — Reject review
- `PUT /api/reviews/:id/reset` — Reset to pending
- `GET /api/properties` — List properties
- `GET /api/properties/:id` — Property details; may include `googlePlacesReviews` if backend has a valid `GOOGLE_MAPS_API_KEY`

## Environment variables

- `REACT_APP_GOOGLE_MAPS_API_KEY` — Browser API key for Google Maps. Enables the map on `PropertyDetails` via `PropertyMap.jsx`.
  - If unset or the API fails to load, a non-blocking fallback with coordinates and address is shown instead.

Note: Only variables prefixed with `REACT_APP_` are exposed to the browser build.

## Data flow notes

- The dashboard fetches reviews with the current filters and page; moderation actions trigger a reload.
- The property page loads the property by `:id`, then requests approved reviews filtered by the property’s `listingName`.
- Changes are not persisted across reloads because the backend serves in-memory mock data.

## Tech stack

- React 18, React Router v6
- Axios for HTTP
- Create React App (react-scripts)
- Lightweight custom CSS in `src/index.css`

## Known limitations

- No authentication/authorization
- All data is mock/in-memory; moderation state resets on backend restart
- Google Maps requires a valid browser key and network access; otherwise the UI falls back gracefully

## Local URLs

- App: `http://localhost:3000`
- Backend proxy target: `http://localhost:5000` (configured in `package.json`)