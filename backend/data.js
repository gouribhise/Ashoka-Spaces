const data = [
    // 1
    {
      id: 1,
      title: "2BHK Spacious Apartment in Baner",
      type: "apartment",
      purpose: "rent",
      city: "Pune",
      area: "Baner",
      address: "Near Balewadi High Street",
      bedrooms: 2,
      bathrooms: 2,
      size: 950,
      furnished: "semi-furnished",
      amenities: ["Parking", "Lift", "Security"],
      price: 25000,
      currency: "INR",
      image: "https://via.placeholder.com/400",
      ownerName: "Rohit Sharma",
      ownerPhone: "9876543210"
    },
  
    // 2
    {
      id: 2,
      title: "1BHK Budget Flat in Wakad",
      type: "flat",
      purpose: "rent",
      city: "Pune",
      area: "Wakad",
      address: "Opp. Phoenix Mall",
      bedrooms: 1,
      bathrooms: 1,
      size: 550,
      furnished: "unfurnished",
      amenities: ["Lift", "Security"],
      price: 15000,
      currency: "INR",
      image: "https://via.placeholder.com/400",
      ownerName: "Sneha Patil",
      ownerPhone: "9822334455"
    },
  
    // 3
    {
      id: 3,
      title: "Luxury 3BHK Apartment in Kothrud",
      type: "apartment",
      purpose: "sale",
      city: "Pune",
      area: "Kothrud",
      address: "Near Karve Nagar",
      bedrooms: 3,
      bathrooms: 3,
      size: 1600,
      furnished: "furnished",
      amenities: ["Gym", "Parking", "Swimming Pool"],
      price: 15500000,
      currency: "INR",
      image: "https://via.placeholder.com/400",
      ownerName: "Amit Deshmukh",
      ownerPhone: "9811122233"
    },
  
    // 4
    {
      id: 4,
      title: "Commercial Office Space in Hinjewadi",
      type: "commercial",
      purpose: "rent",
      city: "Pune",
      area: "Hinjewadi Phase 1",
      address: "Near Infosys Campus",
      size: 1200,
      furnished: "furnished",
      amenities: ["Security", "Parking"],
      price: 45000,
      currency: "INR",
      image: "https://via.placeholder.com/400",
      ownerName: "Tech Realty",
      ownerPhone: "9988776655"
    },
  
    // 5
    {
      id: 5,
      title: "Studio Apartment in Andheri West",
      type: "studio",
      purpose: "rent",
      city: "Mumbai",
      area: "Andheri West",
      address: "Near Lokhandwala Circle",
      bedrooms: 1,
      bathrooms: 1,
      size: 400,
      furnished: "furnished",
      amenities: ["Lift", "Security"],
      price: 28000,
      currency: "INR",
      image: "https://via.placeholder.com/400",
      ownerName: "Ravi Kapoor",
      ownerPhone: "9090909090"
    },
  
    // 6
    {
      id: 6,
      title: "4BHK Luxury Villa in Kandivali",
      type: "villa",
      purpose: "sale",
      city: "Mumbai",
      area: "Kandivali East",
      address: "Thakur Village",
      bedrooms: 4,
      bathrooms: 4,
      size: 2600,
      furnished: "furnished",
      amenities: ["Garden", "Parking", "Security"],
      price: 35000000,
      currency: "INR",
      image: "https://via.placeholder.com/400",
      ownerName: "Elite Realtors",
      ownerPhone: "9870001234"
    },
  
    // 7
    {
      id: 7,
      title: "2BHK Flat in Powai Lake View",
      type: "flat",
      purpose: "rent",
      city: "Mumbai",
      area: "Powai",
      address: "Hiranandani Gardens",
      bedrooms: 2,
      bathrooms: 2,
      size: 1100,
      furnished: "semi-furnished",
      amenities: ["Gym", "Pool", "Parking"],
      price: 55000,
      currency: "INR",
      image: "https://via.placeholder.com/400",
      ownerName: "Sunshine Realty",
      ownerPhone: "9819981998"
    },
  
    // 8
    {
      id: 8,
      title: "3BHK Semi-Furnished Apartment in Whitefield",
      type: "apartment",
      purpose: "rent",
      city: "Bangalore",
      area: "Whitefield",
      address: "Near ITPL",
      bedrooms: 3,
      bathrooms: 3,
      size: 1450,
      furnished: "semi-furnished",
      amenities: ["Clubhouse", "Security", "Parking"],
      price: 42000,
      currency: "INR",
      image: "https://via.placeholder.com/400",
      ownerName: "Manish Real Estate",
      ownerPhone: "9876541111"
    },
  
    // 9
    {
      id: 9,
      title: "1BHK Affordable Flat in Koramangala",
      type: "flat",
      purpose: "rent",
      city: "Bangalore",
      area: "Koramangala",
      address: "Near Forum Mall",
      bedrooms: 1,
      bathrooms: 1,
      size: 600,
      furnished: "furnished",
      amenities: ["Parking"],
      price: 18000,
      currency: "INR",
      image: "https://via.placeholder.com/400",
      ownerName: "Harsha Realty",
      ownerPhone: "9988771122"
    },
  
    // 10
    {
      id: 10,
      title: "3BHK Premium Apartment in Indiranagar",
      type: "apartment",
      purpose: "sale",
      city: "Bangalore",
      area: "Indiranagar",
      address: "100 Ft Road",
      bedrooms: 3,
      bathrooms: 3,
      size: 1700,
      furnished: "unfurnished",
      amenities: ["Parking", "Lift"],
      price: 24000000,
      currency: "INR",
      image: "https://via.placeholder.com/400",
      ownerName: "Dream Home Realtors",
      ownerPhone: "9611223300"
    },
  
    // 11–40 MORE LISTINGS BELOW
    ...Array.from({ length: 30 }).map((_, index) => ({
      id: 11 + index,
      title: `Sample Property ${11 + index}`,
      type: ["apartment", "flat", "villa", "studio", "commercial"][Math.floor(Math.random() * 5)],
      purpose: Math.random() > 0.5 ? "rent" : "sale",
      city: ["Pune", "Mumbai", "Bangalore", "Delhi", "Hyderabad"][Math.floor(Math.random() * 5)],
      area: ["Area A", "Area B", "Area C", "Area D"][Math.floor(Math.random() * 4)],
      address: "Some address",
      bedrooms: Math.floor(Math.random() * 4) + 1,
      bathrooms: Math.floor(Math.random() * 3) + 1,
      size: Math.floor(Math.random() * 2000) + 400,
      furnished: ["furnished", "semi-furnished", "unfurnished"][Math.floor(Math.random() * 3)],
      amenities: ["Parking", "Lift", "Security"],
      price: Math.floor(Math.random() * 20000000) + 8000,
      currency: "INR",
      image: "https://via.placeholder.com/400",
      ownerName: "Owner " + (11 + index),
      ownerPhone: "90000000" + (11 + index)
    }))
  ];
  
  export default data