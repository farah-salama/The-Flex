import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import { Icons } from './Icons'
import 'react-datepicker/dist/react-datepicker.css'

const BookingCard = () => {
  const [startDate, setStartDate] = useState(null)
  const [endDate, setEndDate] = useState(null)
  const [guestCount, setGuestCount] = useState(1)
  const [showGuestDropdown, setShowGuestDropdown] = useState(false)

  const handleCheckAvailability = () => {
    if (!startDate || !endDate) {
      alert('Please select both start and end dates')
      return
    }
    console.log('Checking availability for:', { startDate, endDate, guestCount })
  }

  const handleSendInquiry = () => {
    console.log('Sending inquiry for:', { startDate, endDate, guestCount })
  }

  const formatDateRange = () => {
    if (startDate && endDate) {
      const start = startDate.toLocaleDateString('en-US', { month: 'short', day: '2-digit' })
      const end = endDate.toLocaleDateString('en-US', { month: 'short', day: '2-digit' })
      return `${start} - ${end}`
    }
    return 'Select dates'
  }

  const guestOptions = [1, 2, 3, 4, 5, 6, 7, 8]

  return (
    <div className="booking-card">
      {/* Dark Green Header */}
      <div className="booking-header">
        <h2 className="booking-title">Book your stay</h2>
        <p className="booking-subtitle">Select dates to see the total price</p>
      </div>

      {/* Input Fields Section */}
      <div className="booking-inputs">
        {/* Date Selection */}
        <div className="date-input-container">
          <div className="date-input">
            <span className="input-icon">
              <Icons.calendar />
            </span>
            <DatePicker
              selected={startDate}
              onChange={(dates) => {
                const [start, end] = dates
                setStartDate(start)
                setEndDate(end)
              }}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              placeholderText="Select dates"
              className="date-picker-input"
              dateFormat="MMM dd"
              minDate={new Date()}
            />
          </div>
        </div>

        {/* Guest Selection */}
        <div className="guest-input-container">
          <div 
            className="guest-input"
            onClick={() => setShowGuestDropdown(!showGuestDropdown)}
          >
            <span className="input-icon">
              <Icons.users />
            </span>
            <span className="guest-count">{guestCount}</span>
            <span className="chevron-icon">
              <Icons.chevronDown />
            </span>
          </div>
          
          {showGuestDropdown && (
            <div className="guest-dropdown">
              {guestOptions.map(guest => (
                <div 
                  key={guest}
                  className="guest-option"
                  onClick={() => {
                    setGuestCount(guest)
                    setShowGuestDropdown(false)
                  }}
                >
                  {guest}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="booking-actions">
        <button 
          className="check-availability-btn"
          onClick={handleCheckAvailability}
        >
          <span className="btn-icon">
            <Icons.calendarCheck />
          </span>
          Check availability
        </button>

        <button 
          className="send-inquiry-btn"
          onClick={handleSendInquiry}
        >
          <span className="btn-icon">
            <Icons.speechBubble />
          </span>
          Send Inquiry
        </button>
      </div>

      {/* Footer */}
      <div className="booking-footer">
        <span className="footer-icon">
          <Icons.shield />
        </span>
        <span className="footer-text">Instant confirmation</span>
      </div>
    </div>
  )
}

export default BookingCard 