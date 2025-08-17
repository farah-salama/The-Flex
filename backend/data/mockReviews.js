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
    listingName: "Luxury 2BR Apartment - Shoreditch Heights",
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
    listingName: "Luxury 2BR Apartment - Shoreditch Heights",
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
    listingName: "Luxury 2BR Apartment - Shoreditch Heights",
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
    listingName: "Luxury 2BR Apartment - Shoreditch Heights",
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
    listingName: "Luxury 2BR Apartment - Shoreditch Heights",
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
    listingName: "Luxury 2BR Apartment - Shoreditch Heights",
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
    listingName: "Luxury 2BR Apartment - Shoreditch Heights",
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
    listingName: "Luxury 2BR Apartment - Shoreditch Heights",
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
    listingName: "Luxury 2BR Apartment - Shoreditch Heights",
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
    listingName: "Luxury 2BR Apartment - Shoreditch Heights",
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
    listingName: "Luxury 2BR Apartment - Shoreditch Heights",
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
    listingName: "Luxury 2BR Apartment - Shoreditch Heights",
    channel: "airbnb",
    propertyId: "prop_001"
  },
  // Property 2: Modern Studio in Canary Wharf
  {
    id: 7465,
    type: "guest-to-host",
    status: "approved",
    rating: 5,
    publicReview: "Stunning modern studio with amazing city views! Perfect for business travelers. Everything was immaculate.",
    reviewCategory: [
      { category: "cleanliness", rating: 10 },
      { category: "communication", rating: 10 },
      { category: "value", rating: 9 },
      { category: "location", rating: 10 },
      { category: "amenities", rating: 10 }
    ],
    submittedAt: "2020-08-22 14:30:00",
    guestName: "Alexandra Kim",
    listingName: "Modern Studio - Canary Wharf Business District",
    channel: "airbnb",
    propertyId: "prop_002"
  },
  {
    id: 7466,
    type: "guest-to-host",
    status: "approved",
    rating: 4,
    publicReview: "Great studio apartment in a prime business location. Clean, modern, and well-equipped. Perfect for my work trip.",
    reviewCategory: [
      { category: "cleanliness", rating: 9 },
      { category: "communication", rating: 8 },
      { category: "value", rating: 8 },
      { category: "location", rating: 10 }
    ],
    submittedAt: "2020-08-21 16:45:22",
    guestName: "Marcus Johnson",
    listingName: "Modern Studio - Canary Wharf Business District",
    channel: "airbnb",
    propertyId: "prop_002"
  },
  {
    id: 7467,
    type: "guest-to-host",
    status: "pending",
    rating: 4,
    publicReview: "Nice studio with good amenities. The location is perfect for business meetings. Minor issue with the shower pressure.",
    reviewCategory: [
      { category: "cleanliness", rating: 8 },
      { category: "communication", rating: 8 },
      { category: "value", rating: 7 },
      { category: "location", rating: 10 },
      { category: "amenities", rating: 7 }
    ],
    submittedAt: "2020-08-20 12:15:30",
    guestName: "Sophie Chen",
    listingName: "Modern Studio - Canary Wharf Business District",
    channel: "airbnb",
    propertyId: "prop_002"
  },
  {
    id: 7468,
    type: "guest-to-host",
    status: "approved",
    rating: 5,
    publicReview: "Exceptional business accommodation! The studio was spotless, modern, and perfectly located. Host was professional.",
    reviewCategory: [
      { category: "cleanliness", rating: 10 },
      { category: "communication", rating: 10 },
      { category: "value", rating: 9 },
      { category: "location", rating: 10 },
      { category: "check_in", rating: 10 }
    ],
    submittedAt: "2020-08-19 09:30:15",
    guestName: "Daniel Park",
    listingName: "Modern Studio - Canary Wharf Business District",
    channel: "airbnb",
    propertyId: "prop_002"
  },
  {
    id: 7469,
    type: "guest-to-host",
    status: "rejected",
    rating: 2,
    publicReview: "Disappointed with the studio. The photos were misleading and there were several maintenance issues.",
    reviewCategory: [
      { category: "cleanliness", rating: 4 },
      { category: "communication", rating: 5 },
      { category: "value", rating: 3 },
      { category: "location", rating: 8 }
    ],
    submittedAt: "2020-08-18 18:20:00",
    guestName: "Rachel Green",
    listingName: "Modern Studio - Canary Wharf Business District",
    channel: "airbnb",
    propertyId: "prop_002"
  },
  // Property 3: Cozy Cottage in Richmond
  {
    id: 7470,
    type: "guest-to-host",
    status: "approved",
    rating: 5,
    publicReview: "Absolutely charming cottage! Perfect for a peaceful getaway. The garden was beautiful and the cottage was spotless.",
    reviewCategory: [
      { category: "cleanliness", rating: 10 },
      { category: "communication", rating: 10 },
      { category: "value", rating: 10 },
      { category: "location", rating: 9 },
      { category: "amenities", rating: 9 }
    ],
    submittedAt: "2020-08-22 11:00:00",
    guestName: "Emma Watson",
    listingName: "Cozy Garden Cottage - Richmond Park Area",
    channel: "airbnb",
    propertyId: "prop_003"
  },
  {
    id: 7471,
    type: "guest-to-host",
    status: "approved",
    rating: 4,
    publicReview: "Lovely cottage in a peaceful location. Perfect for families. The garden was great for the kids. Minor issue with WiFi.",
    reviewCategory: [
      { category: "cleanliness", rating: 9 },
      { category: "communication", rating: 8 },
      { category: "value", rating: 8 },
      { category: "location", rating: 9 },
      { category: "amenities", rating: 7 }
    ],
    submittedAt: "2020-08-21 15:45:12",
    guestName: "William Turner",
    listingName: "Cozy Garden Cottage - Richmond Park Area",
    channel: "airbnb",
    propertyId: "prop_003"
  },
  {
    id: 7472,
    type: "guest-to-host",
    status: "pending",
    rating: 5,
    publicReview: "Magical cottage experience! The attention to detail was incredible. Perfect romantic getaway spot.",
    reviewCategory: [
      { category: "cleanliness", rating: 10 },
      { category: "communication", rating: 10 },
      { category: "value", rating: 10 },
      { category: "location", rating: 10 },
      { category: "amenities", rating: 10 }
    ],
    submittedAt: "2020-08-20 13:30:45",
    guestName: "Isabella Martinez",
    listingName: "Cozy Garden Cottage - Richmond Park Area",
    channel: "airbnb",
    propertyId: "prop_003"
  },
  {
    id: 7473,
    type: "guest-to-host",
    status: "approved",
    rating: 4,
    publicReview: "Beautiful cottage with character. The garden was stunning and the location was perfect for exploring Richmond.",
    reviewCategory: [
      { category: "cleanliness", rating: 8 },
      { category: "communication", rating: 9 },
      { category: "value", rating: 8 },
      { category: "location", rating: 10 },
      { category: "check_in", rating: 9 }
    ],
    submittedAt: "2020-08-19 17:15:20",
    guestName: "Oliver Thompson",
    listingName: "Cozy Garden Cottage - Richmond Park Area",
    channel: "airbnb",
    propertyId: "prop_003"
  },
  {
    id: 7474,
    type: "guest-to-host",
    status: "approved",
    rating: 5,
    publicReview: "Perfect family vacation spot! The cottage was cozy and well-equipped. Kids loved the garden and nearby park.",
    reviewCategory: [
      { category: "cleanliness", rating: 10 },
      { category: "communication", rating: 10 },
      { category: "value", rating: 9 },
      { category: "location", rating: 10 },
      { category: "amenities", rating: 9 }
    ],
    submittedAt: "2020-08-18 10:00:00",
    guestName: "Sarah Mitchell",
    listingName: "Cozy Garden Cottage - Richmond Park Area",
    channel: "airbnb",
    propertyId: "prop_003"
  },
  {
    id: 7475,
    type: "guest-to-host",
    status: "pending",
    rating: 3,
    publicReview: "The cottage was nice but smaller than expected. Some amenities were missing and the WiFi was unreliable.",
    reviewCategory: [
      { category: "cleanliness", rating: 7 },
      { category: "communication", rating: 6 },
      { category: "value", rating: 5 },
      { category: "location", rating: 8 },
      { category: "amenities", rating: 4 }
    ],
    submittedAt: "2020-08-17 19:45:30",
    guestName: "Christopher Lee",
    listingName: "Cozy Garden Cottage - Richmond Park Area",
    channel: "airbnb",
    propertyId: "prop_003"
  }
];

module.exports = mockReviews; 