const mockReviews = [
  {
    id: 7453,
    type: "host-to-guest",
    status: "pending",
    rating: 5,
    publicReview: "Shane and family are wonderful! Would definitely host again :)",
    reviewCategory: [
      { category: "cleanliness", rating: 10 },
      { category: "communication", rating: 10 },
      { category: "respect_house_rules", rating: 10 }
    ],
    submittedAt: "2020-08-21 22:45:14",
    guestName: "Shane Finkelstein",
    listingName: "2B N1 A - 29 Shoreditch Heights",
    channel: "airbnb",
    propertyId: "prop_001"
  },
  {
    id: 7454,
    type: "guest-to-host",
    status: "approved",
    rating: 4,
    publicReview: "Great location and clean apartment. The host was very responsive to our needs. Would recommend!",
    reviewCategory: [
      { category: "cleanliness", rating: 8 },
      { category: "communication", rating: 9 },
      { category: "value", rating: 7 },
      { category: "location", rating: 9 }
    ],
    submittedAt: "2020-08-20 15:30:22",
    guestName: "Emma Thompson",
    listingName: "2B N1 A - 29 Shoreditch Heights",
    channel: "airbnb",
    propertyId: "prop_001"
  },
  {
    id: 7455,
    type: "guest-to-host",
    status: "approved",
    rating: 5,
    publicReview: "Absolutely perfect stay! The apartment was spotless and the amenities were top-notch. Host was incredibly helpful.",
    reviewCategory: [
      { category: "cleanliness", rating: 10 },
      { category: "communication", rating: 10 },
      { category: "value", rating: 9 },
      { category: "location", rating: 10 },
      { category: "check_in", rating: 10 }
    ],
    submittedAt: "2020-08-19 10:15:45",
    guestName: "Michael Chen",
    listingName: "2B N1 A - 29 Shoreditch Heights",
    channel: "airbnb",
    propertyId: "prop_001"
  },
  {
    id: 7456,
    type: "guest-to-host",
    status: "pending",
    rating: 3,
    publicReview: "The location was good but the apartment could have been cleaner. Some maintenance issues that need attention.",
    reviewCategory: [
      { category: "cleanliness", rating: 5 },
      { category: "communication", rating: 7 },
      { category: "value", rating: 6 },
      { category: "location", rating: 8 }
    ],
    submittedAt: "2020-08-18 18:45:30",
    guestName: "Sarah Johnson",
    listingName: "2B N1 A - 29 Shoreditch Heights",
    channel: "airbnb",
    propertyId: "prop_001"
  },
  {
    id: 7457,
    type: "guest-to-host",
    status: "approved",
    rating: 5,
    publicReview: "Fantastic experience! The apartment exceeded our expectations. Great value for money and excellent location.",
    reviewCategory: [
      { category: "cleanliness", rating: 10 },
      { category: "communication", rating: 10 },
      { category: "value", rating: 10 },
      { category: "location", rating: 10 },
      { category: "check_in", rating: 9 }
    ],
    submittedAt: "2020-08-17 14:20:15",
    guestName: "David Rodriguez",
    listingName: "2B N1 A - 29 Shoreditch Heights",
    channel: "airbnb",
    propertyId: "prop_001"
  },
  {
    id: 7458,
    type: "guest-to-host",
    status: "rejected",
    rating: 2,
    publicReview: "Very disappointed with the stay. The apartment was not as described and there were several issues.",
    reviewCategory: [
      { category: "cleanliness", rating: 3 },
      { category: "communication", rating: 4 },
      { category: "value", rating: 2 },
      { category: "location", rating: 6 }
    ],
    submittedAt: "2020-08-16 09:30:00",
    guestName: "Lisa Wang",
    listingName: "2B N1 A - 29 Shoreditch Heights",
    channel: "airbnb",
    propertyId: "prop_001"
  },
  {
    id: 7459,
    type: "guest-to-host",
    status: "approved",
    rating: 4,
    publicReview: "Good stay overall. The apartment was clean and well-equipped. Minor issues with noise from neighbors.",
    reviewCategory: [
      { category: "cleanliness", rating: 8 },
      { category: "communication", rating: 8 },
      { category: "value", rating: 7 },
      { category: "location", rating: 8 },
      { category: "noise_level", rating: 5 }
    ],
    submittedAt: "2020-08-15 16:45:12",
    guestName: "James Wilson",
    listingName: "2B N1 A - 29 Shoreditch Heights",
    channel: "airbnb",
    propertyId: "prop_001"
  },
  {
    id: 7460,
    type: "guest-to-host",
    status: "pending",
    rating: 5,
    publicReview: "Exceptional stay! Everything was perfect from check-in to check-out. Highly recommend this property.",
    reviewCategory: [
      { category: "cleanliness", rating: 10 },
      { category: "communication", rating: 10 },
      { category: "value", rating: 10 },
      { category: "location", rating: 10 },
      { category: "check_in", rating: 10 },
      { category: "amenities", rating: 10 }
    ],
    submittedAt: "2020-08-14 11:20:33",
    guestName: "Anna Kowalski",
    listingName: "2B N1 A - 29 Shoreditch Heights",
    channel: "airbnb",
    propertyId: "prop_001"
  },
  {
    id: 7461,
    type: "guest-to-host",
    status: "approved",
    rating: 4,
    publicReview: "Great apartment in a fantastic location. The host was very accommodating and the place was spotless.",
    reviewCategory: [
      { category: "cleanliness", rating: 9 },
      { category: "communication", rating: 9 },
      { category: "value", rating: 8 },
      { category: "location", rating: 10 }
    ],
    submittedAt: "2020-08-13 13:15:45",
    guestName: "Robert Brown",
    listingName: "2B N1 A - 29 Shoreditch Heights",
    channel: "airbnb",
    propertyId: "prop_001"
  },
  {
    id: 7462,
    type: "guest-to-host",
    status: "approved",
    rating: 5,
    publicReview: "Perfect location for exploring the city! The apartment was immaculate and the host was incredibly helpful.",
    reviewCategory: [
      { category: "cleanliness", rating: 10 },
      { category: "communication", rating: 10 },
      { category: "value", rating: 9 },
      { category: "location", rating: 10 },
      { category: "check_in", rating: 10 }
    ],
    submittedAt: "2020-08-12 17:30:20",
    guestName: "Maria Garcia",
    listingName: "2B N1 A - 29 Shoreditch Heights",
    channel: "airbnb",
    propertyId: "prop_001"
  },
  {
    id: 7463,
    type: "guest-to-host",
    status: "pending",
    rating: 3,
    publicReview: "The apartment was okay but there were some cleanliness issues. The location was convenient though.",
    reviewCategory: [
      { category: "cleanliness", rating: 6 },
      { category: "communication", rating: 7 },
      { category: "value", rating: 6 },
      { category: "location", rating: 8 }
    ],
    submittedAt: "2020-08-11 20:45:10",
    guestName: "Thomas Lee",
    listingName: "2B N1 A - 29 Shoreditch Heights",
    channel: "airbnb",
    propertyId: "prop_001"
  },
  {
    id: 7464,
    type: "guest-to-host",
    status: "approved",
    rating: 5,
    publicReview: "Amazing stay! The apartment was beautiful and the host went above and beyond to make us comfortable.",
    reviewCategory: [
      { category: "cleanliness", rating: 10 },
      { category: "communication", rating: 10 },
      { category: "value", rating: 10 },
      { category: "location", rating: 10 },
      { category: "amenities", rating: 10 }
    ],
    submittedAt: "2020-08-10 12:00:00",
    guestName: "Jennifer Davis",
    listingName: "2B N1 A - 29 Shoreditch Heights",
    channel: "airbnb",
    propertyId: "prop_001"
  }
];

module.exports = mockReviews; 