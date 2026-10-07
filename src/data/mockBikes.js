// AutoHub Pakistan - Realistic Pakistani Bikes Dataset

export const INITIAL_BIKES = [
  {
    id: 'bike-1',
    title: 'Yamaha YBR 125G Matte Dark Gray',
    brand: 'Yamaha',
    model: 'YBR 125G',
    year: 2023,
    price: 445000, // PKR 445,000
    mileage: 6200,
    city: 'Lahore',
    registeredCity: 'Lahore',
    engineCapacity: '125 cc 4-Stroke SOHC',
    transmission: '5-Speed',
    startingType: 'Self / Kick Start',
    fuelTank: '13 Liters',
    fuelEconomy: '45 - 50 km/l',
    condition: '9.8/10',
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=900&auto=format&fit=crop&q=80'
    ],
    features: [
      'Front Disc Brake with Dual Piston Caliper',
      'Special Edition Off-Road Knobby Tyres',
      'Front Fork Rubber Boots',
      'Halogen Headlight with Day Visor',
      'Alloy Wheels 18-inch',
      'Smoked Windshield'
    ],
    description: 'Yamaha YBR 125G special matte edition in scratchless showroom condition. Single-hand used for university commute only. Timely engine oil change using Yamalube every 1,000 km. Both original keys, warranty card, and smart card available. Price slightly negotiable on spot.',
    seller: {
      name: 'Hamza Tariq',
      phone: '0321-4567890',
      whatsapp: '923214567890',
      city: 'Lahore',
      memberSince: 'July 2023',
      verified: true
    },
    createdAt: '2026-10-01T10:00:00Z'
  },
  {
    id: 'bike-2',
    title: 'Honda CG 125 Self Start Gold Edition',
    brand: 'Honda',
    model: 'CG 125',
    year: 2024,
    price: 295000,
    mileage: 3800,
    city: 'Rawalpindi',
    registeredCity: 'Islamabad',
    engineCapacity: '125 cc 4-Stroke OHV',
    transmission: '5-Speed',
    startingType: 'Self / Kick Start',
    fuelTank: '9.2 Liters',
    fuelEconomy: '38 - 42 km/l',
    condition: '9.9/10',
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=900&auto=format&fit=crop&q=80'
    ],
    features: [
      'Gold Accented Fuel Tank Decals',
      'Electric Self Starter',
      '5-Speed Transmission',
      'Front & Rear Chrome Spoke Wheels',
      'Iconic Sound & Throttle Response'
    ],
    description: 'Special Gold Edition CG 125 with Self Start. Islamabad registered with golden number. Total genuine paint, not even a single hairline scratch. Wrapped in protective lamination from day one. Buy and ride.',
    seller: {
      name: 'Raja Daniyal',
      phone: '0333-5876543',
      whatsapp: '923335876543',
      city: 'Rawalpindi',
      memberSince: 'March 2023',
      verified: true
    },
    createdAt: '2026-10-02T09:30:00Z'
  },
  {
    id: 'bike-3',
    title: 'Suzuki GS 150 Euro II',
    brand: 'Suzuki',
    model: 'GS 150',
    year: 2022,
    price: 360000,
    mileage: 14500,
    city: 'Karachi',
    registeredCity: 'Karachi',
    engineCapacity: '150 cc 4-Stroke SOHC',
    transmission: '5-Speed',
    startingType: 'Electric & Kick',
    fuelTank: '12 Liters',
    fuelEconomy: '40 - 45 km/l',
    condition: '9.2/10',
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=900&auto=format&fit=crop&q=80'
    ],
    features: [
      'Powerful 150cc Long-Stroke Engine',
      'Comfortable Long Touring Dual-Seat',
      'High Ground Clearance',
      'Electric Start with Easy Push Button',
      'Heavy Duty Carrier'
    ],
    description: 'The king of touring in Pakistan. Excellent engine compression and smooth ride. Fitted with crash guard and extra fog lights for night riding. Sindh registered, smart card available.',
    seller: {
      name: 'Kamran Baloch',
      phone: '0300-2134567',
      whatsapp: '923002134567',
      city: 'Karachi',
      memberSince: 'January 2022',
      verified: true
    },
    createdAt: '2026-09-29T14:00:00Z'
  },
  {
    id: 'bike-4',
    title: 'Honda CD 70 Dream 2024',
    brand: 'Honda',
    model: 'CD 70 Dream',
    year: 2024,
    price: 168000,
    mileage: 4100,
    city: 'Faisalabad',
    registeredCity: 'Faisalabad',
    engineCapacity: '72 cc 4-Stroke Single Cylinder',
    transmission: '4-Speed',
    startingType: 'Kick Start',
    fuelTank: '8.6 Liters',
    fuelEconomy: '55 - 65 km/l',
    condition: '9.6/10',
    featured: false,
    images: [
      'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?w=900&auto=format&fit=crop&q=80'
    ],
    features: [
      'Aerodynamic Visor Cowling',
      'Unmatched Fuel Efficiency',
      'Modern Speedometer Design',
      'Low Cost Maintenance'
    ],
    description: 'Atlas Honda CD 70 Dream in top condition. 100% genuine parts and paint. Runs super smooth and gives up to 60+ km per liter. First owner.',
    seller: {
      name: 'Mian Saqib',
      phone: '0304-7123987',
      whatsapp: '923047123987',
      city: 'Faisalabad',
      memberSince: 'August 2023',
      verified: true
    },
    createdAt: '2026-10-01T15:20:00Z'
  }
];

export const BIKE_BRANDS = [
  'All Brands',
  'Honda',
  'Yamaha',
  'Suzuki',
  'United',
  'Road Prince',
  'Benelli'
];
