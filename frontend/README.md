# Flex Living Frontend

Simple React frontend for the Flex Living Reviews Dashboard.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

The frontend will run on `http://localhost:3000` and will proxy API calls to the backend at `http://localhost:5000`.

## Features

### Dashboard
- View all reviews with filtering and sorting
- Approve/reject/reset reviews with full control
- View review statistics and metrics
- Filter by rating, category, status, date range, and property
- Sort by various criteria
- Pagination support

### Property Details
- Property information display
- Approved reviews only (as selected by managers)
- Review ratings and categories
- Guest information and dates

## Components

- **Layout**: Main application layout with navigation
- **Dashboard**: Main reviews management interface
- **ReviewCard**: Individual review display with actions
- **ReviewFilters**: Advanced filtering and sorting controls
- **ReviewStats**: Statistics and metrics display
- **PropertyDetails**: Property page with approved reviews

## Tech Stack

- React 18 with hooks
- React Router for navigation
- Custom CSS for styling (no heavy frameworks)
- Axios for API communication
- Create React App for build tooling

## API Integration

The frontend communicates with the backend API endpoints:
- `GET /api/reviews` - Fetch filtered reviews
- `GET /api/reviews/hostaway` - Fetch Hostaway reviews
- `PUT /api/reviews/:id/approve` - Approve a review
- `PUT /api/reviews/:id/reject` - Reject a review
- `PUT /api/reviews/:id/reset` - Reset a review to pending

## Design Philosophy

- **Minimal Dependencies**: Only essential packages for faster development
- **Simple Styling**: Custom CSS without framework overhead
- **Clean Interface**: Focus on functionality over complexity
- **Responsive Design**: Works on all device sizes 