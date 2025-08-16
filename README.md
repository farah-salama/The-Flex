# Flex Living - Reviews Dashboard

A lightweight, simple reviews management system for Flex Living properties, featuring a manager dashboard and public review display.

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Backend Setup
```bash
cd backend
npm install
# Create .env file with your Hostaway API credentials
npm run dev
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

### API Integration
- **Hostaway API**: Mocked integration for review data
- **RESTful Endpoints**: Clean API design for frontend consumption
- **Data Normalization**: Consistent data structure across the platform

## 🏗️ Architecture

### Backend (Node.js + Express)
- **Lightweight**: Only 3 essential dependencies (Express, CORS, dotenv)
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
| `/health` | GET | Server health check |

## 🔧 Configuration

### Environment Variables
Create a `.env` file in the backend directory:
```env
PORT=5000
HOSTAWAY_ACCOUNT_ID=61148
HOSTAWAY_API_KEY=f94377ebbbb479490bb3ec364649168dc443dda2e4830facaf5de2e74ccc9152
NODE_ENV=development
```

### Mock Data
The system currently uses realistic mock data since the Hostaway API is sandboxed. The mock data includes:
- 12 diverse reviews with various ratings
- Multiple review categories (cleanliness, communication, value, etc.)
- Different review statuses (pending, approved, rejected)
- Realistic guest names and review content

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

### Google Reviews Integration
- Research Google Places API integration
- Implement basic Google Reviews functionality
- Document findings and implementation approach

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
- Comprehensive TypeScript-ready structure

### Testing
- API endpoints are designed for easy testing
- Mock data provides consistent test scenarios
- Frontend components are modular and testable

## 🤝 Contributing

1. Follow the existing code structure and patterns
2. Ensure all API endpoints are properly documented
3. Test both frontend and backend functionality
4. Update documentation for any new features

## 📄 License

This project is part of the Flex Living developer assessment. 