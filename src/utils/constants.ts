export const MOCK_PRODUCTS = [
    {
      id: 1,
      title: "John Deere 5075E",
      location: "Dallas, TX",
      price: 45000,
      images: [
        "https://picsum.photos/id/1/300/300",
        "https://picsum.photos/id/2/300/300",
        "https://picsum.photos/id/3/300/300"
      ],
      description: "Excellent condition, low hours",
      year: 2020,
      hours: 1200,
      brand: "John Deere"
    },
    // Add more mock products as needed
  ]
  
  export const BRANDS = [
    'John Deere',
    'Case IH',
    'New Holland',
    'Kubota',
    'Massey Ferguson'
  ]
  
  export const PRICE_RANGES = [
    { min: 0, max: 25000, label: 'Under $25,000' },
    { min: 25000, max: 50000, label: '$25,000 - $50,000' },
    { min: 50000, max: 100000, label: '$50,000 - $100,000' },
    { min: 100000, max: Infinity, label: 'Over $100,000' }
  ]