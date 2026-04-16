# The Flex - Reviews Dashboard

A lightweight, simple reviews management system for The Flex properties, featuring a manager dashboard and public review display.

## 🌐 Live Deployment

- App: [https://the-flex-a625c445faf3.herokuapp.com/](https://the-flex-a625c445faf3.herokuapp.com/)

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm

### Backend Setup
```bash
cd backend
npm install
# Create .env (see Configuration below)
npm run dev
# or
npm start
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## 📋 Features

### Manager Dashboard
- **Review Management**: View, filter, and sort all guest reviews
- **Flexible Approval Workflow**: Approve, reject, or reset reviews with full control
- **Status Management**: Change review statuses at any time (pending ↔ approved ↔ rejected)
- **Advanced Filtering**: Filter by rating, category, status, date range, and property
- **Statistics**: Real-time metrics and performance insights
- **Pagination**: Efficient handling of large review volumes

### Public Property Pages
- **Property Information**: Detailed property listings with amenities
- **Approved Reviews Only**: Only manager-approved reviews are displayed
- **Rating System**: Star ratings and category-specific scores
- **Guest Information**: Guest names and review dates
 - **Location Map**: Google Map on property page when a browser key is configured
 - **Google Places Reviews (optional)**: If the backend is configured with a server key, Google reviews are attached to the property response

### API Integration
- **Hostaway API**: Mocked integration for review data
- **Google Places**: Optional enrichment of property details with live Google reviews
- **RESTful Endpoints**: Clean API design for frontend consumption
- **Data Normalization**: Consistent data structure across the platform

## 🏗️ Architecture

### Backend (Node.js + Express)
- **Lightweight**: Essential dependencies only (Express, CORS, dotenv, Google Maps client)
- **Simple**: No complex build tools or unnecessary packages
- **RESTful API design**
- **Mock data for development**
- **Comprehensive filtering and sorting**
- **Flexible review approval/rejection workflow**
- **Error handling and validation**

### Frontend (React + Create React App)
- **Simple**: Uses Create React App instead of complex build tools
- **Lightweight**: Minimal dependencies, no heavy UI libraries
- **Custom CSS**: Simple, clean styling without framework overhead
- **Modern React with hooks**
- **Responsive design**
- **Component-based architecture**
- **Real-time data updates**
- **Intuitive user interface**

## 📊 API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/reviews/hostaway` | GET | Fetch reviews from Hostaway API |
| `/api/reviews` | GET | Get filtered reviews with pagination |
| `/api/reviews/:id/approve` | PUT | Approve a review |
| `/api/reviews/:id/reject` | PUT | Reject a review |
| `/api/reviews/:id/reset` | PUT | Reset a review to pending |
| `/api/properties` | GET | List properties (mock) |
| `/api/properties/:id` | GET | Get a property by id; includes Google Places reviews if backend has `GOOGLE_MAPS_API_KEY` |
| `/health` | GET | Server health check |

## 🔧 Configuration

### Environment Variables

Backend (`backend/.env`):
```env
PORT=5000
NODE_ENV=development

# Optional: enables Google Places enrichment on GET /api/properties/:id
GOOGLE_MAPS_API_KEY=your_server_side_google_maps_key

# Informational only at the moment; Hostaway is mocked in dev
HOSTAWAY_ACCOUNT_ID=your_hostaway_account_id
HOSTAWAY_API_KEY=your_hostaway_api_key
```

Frontend (`frontend/.env`):
```env
# Optional: enables the Google Map on the property page
REACT_APP_GOOGLE_MAPS_API_KEY=your_browser_google_maps_key
```

Notes:
- Backend Google key fetches Google Places details/reviews. Frontend key loads the map JavaScript on the property page.
- Hostaway variables are not required for local development; reviews are served from mock fixtures.

### Mock Data
The system currently uses realistic mock data. The mock data includes:
- Diverse reviews with various ratings
- Multiple review categories (cleanliness, communication, value, etc.)
- Different review statuses (pending, approved, rejected)
- Realistic guest names and review content
- Property fixtures including coordinates and images
- Optional Google Places Place IDs on properties (`location.id`) used by the backend to enrich responses with Google reviews when `GOOGLE_MAPS_API_KEY` is set

## 🎨 Design Decisions

### User Experience
- **Clean Interface**: Minimalist design focusing on functionality
- **Responsive Layout**: Works seamlessly on all device sizes
- **Intuitive Navigation**: Clear information hierarchy and user flow
- **Visual Feedback**: Status indicators and loading states
- **Flexible Workflow**: Managers can change review decisions at any time

### Technical Choices
- **Minimal Dependencies**: Only essential packages for faster development
- **Simple Build Tools**: Create React App instead of complex bundlers
- **Custom CSS**: Lightweight styling without framework overhead
- **Component Architecture**: Reusable, maintainable React components
- **API-First Design**: Backend designed for frontend consumption
- **Mock Data Strategy**: Realistic data for development and testing

## 🔄 Review Status Management

The system now provides complete control over review statuses:

- **Pending → Approved**: Initial approval
- **Pending → Rejected**: Initial rejection
- **Approved → Rejected**: Change approval decision
- **Approved → Pending**: Reset approved review
- **Rejected → Approved**: Change rejection decision
- **Rejected → Pending**: Reset rejected review

This flexibility ensures managers can always correct their decisions and provides a robust workflow for review management.

## 🚧 Future Enhancements


### Additional Features
- Email notifications for review status changes
- Review response management
- Advanced analytics and reporting
- Multi-property management
- User authentication and roles

## 📝 Development Notes

### Code Structure
- Backend follows MVC pattern with clear separation of concerns
- Frontend uses modern React patterns with custom hooks
- Consistent error handling and loading states

### Testing
- API endpoints are designed for easy testing
- Mock data provides consistent test scenarios
- Frontend components are modular and testable

## 📄 License

This project is part of The Flex developer assessment. 

## 📚 Related Docs

- `ENVIRONMENT_SETUP.md` — Environment variable setup and security notes
- `GOOGLE_MAPS_SETUP.md` — Additional details for Google Maps/Places setup
