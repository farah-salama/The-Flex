# Flex Living Backend

Lightweight backend server for the Flex Living Reviews Dashboard.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with:
```
PORT=5000
HOSTAWAY_ACCOUNT_ID=61148
HOSTAWAY_API_KEY=f94377ebbbb479490bb3ec364649168dc443dda2e4830facaf5de2e74ccc9152
NODE_ENV=development
```

3. Start the development server:
```bash
npm run dev
```

## Dependencies

This backend uses only essential packages:
- **express**: Web framework
- **cors**: Cross-origin requests
- **dotenv**: Environment variables

Total: Only 3 packages instead of 100+!

## API Endpoints

### Reviews
- `GET /api/reviews/hostaway` - Fetch reviews from Hostaway API (mocked)
- `GET /api/reviews` - Get all reviews with filtering and pagination
- `PUT /api/reviews/:id/approve` - Approve a review for public display
- `PUT /api/reviews/:id/reject` - Reject a review
- `PUT /api/reviews/:id/reset` - Reset a review back to pending status

### Query Parameters for `/api/reviews`
- `rating` - Filter by minimum rating
- `category` - Filter by review category
- `listing` - Filter by listing name
- `status` - Filter by review status (pending, approved, rejected)
- `startDate` - Filter by start date
- `endDate` - Filter by end date
- `sortBy` - Sort field (default: submittedAt)
- `sortOrder` - Sort order (asc/desc, default: desc)
- `page` - Page number (default: 1)
- `limit` - Items per page (default: 20)

## Review Status Management

The system now supports flexible review status management:

- **Pending Reviews**: Can be approved or rejected
- **Approved Reviews**: Can be changed to rejected or reset to pending
- **Rejected Reviews**: Can be changed to approved or reset to pending
- **Reset Functionality**: Any review can be reset back to pending status

This allows managers to change their mind about review decisions and provides full control over the review workflow.

## Mock Data

The API currently uses mock data since the Hostaway API is sandboxed. The mock data includes:
- 12 realistic reviews with various ratings
- Multiple review categories (cleanliness, communication, value, etc.)
- Different review statuses (pending, approved, rejected)
- Realistic guest names and review content

## Health Check

- `GET /health` - Server health status 