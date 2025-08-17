const mockProperties = [
  {
    id: "prop_001",
    listingName: "Luxury 2BR Apartment - Shoreditch Heights",
    about: "Experience luxury living in the heart of Shoreditch, one of London's most vibrant and creative neighborhoods. This stunning 2-bedroom apartment offers contemporary design, premium finishes, and spectacular city views. Perfect for business travelers, families, or anyone seeking a sophisticated urban retreat. Located just minutes from Shoreditch High Street, Old Street Station, and the trendy bars and restaurants of the area.",
    amenities: [
      "Internet",
      "Smart TV",
      "Kitchen",
      "Washing Machine",
      "Heating",
      "Gym",
      "Hair Dryer"
    ],
    stayPolicies: {
      checkIn: "3:00 PM",
      checkOut: "11:00 AM",
    },
    houseRules: [
      "No smoking",
      "No parties or events",
      "No pets allowed",
      "Security deposit required"
    ],
    cancellationPolicy: {
      staysLessThan28Days: [
        "Full refund up to 14 days before check-in",
        "No refund for bookings less than 14 days before check-in"
      ],
      staysMoreThan28Days: [
        "Full refund up to 30 days before check-in",
        "No refund for bookings less than 30 days before check-in"
      ]
    },
    location: {
      address: "29 Shoreditch Heights, London, UK",
      city: "London",
      country: "United Kingdom",
      zipCode: "E1 6JX",
      latitude: 51.5236,
      longitude: -0.0747,
    },
    images: [
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/23248-169459-wS5vep--AagT5QZvbmRTaoV0BoLRGcVFjMH-W93eMbZk-6537dca7a0633",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/23248-169459-rG4b50nvheFjvXI-X8VF9kIWMqefv3ckE7hN5eN6o-Y-6537dca9d9640",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/23248-169459-9r5-fpdhQlzdkRrMS9vGoAXMiS1V11qoNfqoGxXpHlM-6537dcacb64b2",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/23248-169459-Y1VSzpDDZv00DFaT-GhU8NInXzE3HaYbdN9pdYSLF5M-6537dcaf7c50d",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/23248-169459-03UhdMhP8u--VN7DVrYUG4fhHvmjMroyVHyiGpqNteio-6537dcb19ce20",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/23248-169459-5Fwxnx9rvFzhq4blIxfDX7SmkKGyA7QO4Q59d9kK--2I-6537dcb3d3566"
    ]
  },
  {
    id: "prop_002",
    listingName: "Modern Studio - Canary Wharf Business District",
    about: "Perfect for business travelers and professionals, this sleek modern studio is located in the prestigious Canary Wharf business district. Features contemporary design, high-end finishes, and all the amenities needed for a productive work stay. Walking distance to major financial institutions, shopping centers, and transport links. Ideal for short-term business assignments, conferences, or solo travelers seeking a sophisticated urban experience.",
    amenities: [
      "Internet",
      "Smart TV",
      "Kitchen",
      "Washing Machine",
      "Heating",
      "Gym",
      "Hair Dryer",
      "Elevator",
      "Parking"
    ],
    stayPolicies: {
      checkIn: "2:00 PM",
      checkOut: "10:00 AM",
    },
    houseRules: [
      "No smoking or vaping",
      "No parties or gatherings",
      "No pets",
      "Maximum 2 guests",
      "No loud music or TV"
    ],
    cancellationPolicy: {
      staysLessThan28Days: [
        "Full refund up to 7 days before check-in",
        "50% refund for cancellations 1-7 days before check-in",
        "No refund for cancellations less than 24 hours before check-in"
      ],
      staysMoreThan28Days: [
        "Full refund up to 14 days before check-in",
        "50% refund for cancellations 7-14 days before check-in",
        "No refund for cancellations less than 7 days before check-in"
      ]
    },
    location: {
      address: "25 Canary Wharf, London, UK",
      city: "London",
      country: "United Kingdom",
      zipCode: "E14 5AB",
      latitude: 51.5054,
      longitude: -0.0235,
    },
    images: [
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/23248-169459-i9cuVnbKQ--R7MZS9-z6kOySdJLwGj54yqEUJvWWweKI-6537dce7a0c86",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/23248-169459-ElRfkj2KlJOzA--hJwWp9-fXApFSLwHFG2----TijGxv9A-6537dcbf8af8b",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/23248-169459--lkfAiRs5OmhnalPDqd8JLfUJEqf7ZQBWH0vsfwVlM8-6537dccd39820",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/23248-169459-PuWpUJ1Nov7tCZFRI0LSUCpvRhQSnjtgMqgzdm2wsPI-6537dcd219f5f",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/23248-169459-vtUEiq1gcIjARBc7vlwoXp--aQR5FDEkrfwEkHe-OAUw-6537dcd9d610b",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/23248-169459-VtO9TSx3UiHau5PdDrEuo0p-BpwlVarDzeH-bGx6DLY-6537dce53a039",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/23248-169459-fEs1jfxYdiaPCWs-2mnVnTI--Yj5sxbQ1LMW0yWJTfD8-6537dcc614509",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/23248-169459-5yzeattz-6CbpMwCyN27LC2Eb--MFlr97jFyiUB4kKvY-6537dcd496ea8"
    ]
  },
  {
    id: "prop_003",
    listingName: "Cozy Garden Cottage - Richmond Park Area",
    about: "Escape the hustle and bustle of the city in this charming garden cottage located in the peaceful Richmond Park area. Surrounded by beautiful gardens and just a short walk from Richmond Park, this cottage offers a perfect blend of comfort and tranquility. Ideal for families, couples, or anyone seeking a peaceful retreat. Features traditional English charm with modern comforts, perfect for both short getaways and longer stays.",
    amenities: [
      "Internet",
      "Smart TV",
      "Kitchen",
      "Washing Machine",
      "Heating"
    ],
    stayPolicies: {
      checkIn: "4:00 PM",
      checkOut: "10:00 AM",
    },
    houseRules: [
      "No smoking inside",
      "Small gatherings allowed",
      "Quiet hours: 11:00 PM - 7:00 AM",
      "Respect the garden and plants",
      "Close gates and doors properly",
      "No fireworks or loud music"
    ],
    cancellationPolicy: {
      staysLessThan28Days: [
        "Full refund up to 14 days before check-in",
        "50% refund for cancellations 7-14 days before check-in",
        "No refund for cancellations less than 7 days before check-in"
      ],
      staysMoreThan28Days: [
        "Full refund up to 21 days before check-in",
        "50% refund for cancellations 14-21 days before check-in",
        "No refund for cancellations less than 14 days before check-in"
      ]
    },
    location: {
      address: "15 Richmond Park Gardens, London, UK",
      city: "London",
      country: "United Kingdom",
      zipCode: "TW10 5HP",
      latitude: 51.4613,
      longitude: -0.3034,
    },
    images: [
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/23248-169459--lkfAiRs5OmhnalPDqd8JLfUJEqf7ZQBWH0vsfwVlM8-6537dccd39820",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/23248-169459-PuWpUJ1Nov7tCZFRI0LSUCpvRhQSnjtgMqgzdm2wsPI-6537dcd219f5f",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/23248-169459-vtUEiq1gcIjARBc7vlwoXp--aQR5FDEkrfwEkHe-OAUw-6537dcd9d610b",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/23248-169459-VtO9TSx3UiHau5PdDrEuo0p-BpwlVarDzeH-bGx6DLY-6537dce53a039",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/23248-169459-i9cuVnbKQ--R7MZS9-z6kOySdJLwGj54yqEUJvWWweKI-6537dce7a0c86",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/23248-169459-ElRfkj2KlJOzA--hJwWp9-fXApFSLwHFG2----TijGxv9A-6537dcbf8af8b",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/23248-169459-fEs1jfxYdiaPCWs-2mnVnTI--Yj5sxbQ1LMW0yWJTfD8-6537dcc614509",
      "https://hostaway-platform.s3.us-west-2.amazonaws.com/listing/23248-169459-5yzeattz-6CbpMwCyN27LC2Eb--MFlr97jFyiUB4kKvY-6537dcd496ea8"
    ]
  }
];

module.exports = mockProperties; 