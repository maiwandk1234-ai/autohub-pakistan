// AutoHub Pakistan - Realistic Pakistani Cars Dataset

export const INITIAL_CARS = [
  {
    id: 'car-1',
    title: 'Toyota Corolla Altis Grande 1.8 CVT-i',
    make: 'Toyota',
    model: 'Corolla',
    variant: 'Altis Grande 1.8 CVT-i Black Interior',
    year: 2022,
    price: 6850000, // 68.5 Lacs
    mileage: 28500,
    city: 'Lahore',
    locationArea: 'DHA Phase 5',
    registeredCity: 'Lahore',
    fuelType: 'Petrol',
    transmission: 'Automatic',
    engineCapacity: '1800 cc',
    bodyType: 'Sedan',
    exteriorColor: 'Super White',
    assembly: 'Local',
    condition: '9.4/10',
    featured: true,
    certified: true,
    inspectionScore: 9.4,
    inspectionSummary: {
      overall: 9.4,
      engine: 9.6,
      suspension: 9.3,
      body: 9.2,
      interior: 9.5
    },
    images: [
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=900&auto=format&fit=crop&q=80'
    ],
    features: [
      'Sunroof',
      'Push Button Start',
      'Paddle Shifters',
      'Cruise Control',
      'Dual Airbags',
      'ABS with EBD',
      '9-inch Infotainment Screen',
      'Leather Seats',
      'Climate Control AC',
      'Reverse Camera with Guidelines',
      'Retractable Side Mirrors',
      'Alloy Rims 16-inch'
    ],
    description: 'Bumper-to-bumper original paint, single-hand driven by a corporate executive. All periodic maintenance services done on schedule exclusively from Toyota Walton Motors 3S Dealership. Complete service history book available. Brand new Yokohama Advan dB tyres installed 4,000 km ago. Token tax paid up to June 2026. Biometric verification on spot for serious buyers.',
    seller: {
      name: 'Muhammad Usman Khan',
      type: 'Individual',
      memberSince: 'March 2021',
      city: 'Lahore',
      phone: '0300-8452199',
      whatsapp: '923008452199',
      verified: true
    },
    specs: {
      horsepower: '138 hp @ 6400 RPM',
      torque: '173 Nm @ 4000 RPM',
      fuelEconomy: '12 - 15 km/l',
      fuelTank: '55 L',
      seating: '5 Persons',
      doors: '4 Doors',
      bootSpace: '470 Liters'
    },
    createdAt: '2026-09-28T10:30:00Z'
  },
  {
    id: 'car-2',
    title: 'Honda Civic RS 1.5 VTEC Turbo LL-CVT',
    make: 'Honda',
    model: 'Civic',
    variant: 'RS 1.5 Turbo',
    year: 2023,
    price: 9450000, // 94.5 Lacs
    mileage: 19200,
    city: 'Islamabad',
    locationArea: 'F-7/2',
    registeredCity: 'Islamabad',
    fuelType: 'Petrol',
    transmission: 'Automatic',
    engineCapacity: '1500 cc Turbo',
    bodyType: 'Sedan',
    exteriorColor: 'Meteoroid Gray Metallic',
    assembly: 'Local',
    condition: '9.8/10',
    featured: true,
    certified: true,
    inspectionScore: 9.7,
    inspectionSummary: {
      overall: 9.7,
      engine: 9.8,
      suspension: 9.7,
      body: 9.6,
      interior: 9.8
    },
    images: [
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&auto=format&fit=crop&q=80'
    ],
    features: [
      'Honda SENSING ADAS Suite',
      'Adaptive Cruise Control',
      'Collision Mitigation Braking',
      'Lane Keep Assist System',
      'Panoramic Sunroof',
      'Bose Premium Audio System',
      'Wireless Apple CarPlay & Android Auto',
      'Wireless Mobile Charger',
      'Dual Zone Automatic Climate Control',
      'Full LED Headlights with DRLs',
      'Remote Engine Starter',
      '17-inch Matte Shark Gray Alloys'
    ],
    description: 'Honda Civic 11th Generation RS Turbo in showroom fresh condition. Maintained with utmost care under Honda Avenue Islamabad. Zero touchups or scratches. PPF (Paint Protection Film) installed on full front clip, bumper, and mirrors since day one. Islamabad VIP 2-digit registered. Guaranteed authentic mileage. Price slightly negotiable for direct buyers.',
    seller: {
      name: 'Taimoor Shah',
      type: 'Individual',
      memberSince: 'January 2020',
      city: 'Islamabad',
      phone: '0333-5128790',
      whatsapp: '923335128790',
      verified: true
    },
    specs: {
      horsepower: '176 hp @ 6000 RPM',
      torque: '220 Nm @ 1700-4500 RPM',
      fuelEconomy: '11 - 14 km/l',
      fuelTank: '47 L',
      seating: '5 Persons',
      doors: '4 Doors',
      bootSpace: '495 Liters'
    },
    createdAt: '2026-09-30T14:15:00Z'
  },
  {
    id: 'car-3',
    title: 'Suzuki Alto VXR',
    make: 'Suzuki',
    model: 'Alto',
    variant: 'VXR Manual 660cc',
    year: 2023,
    price: 2850000, // 28.5 Lacs
    mileage: 22000,
    city: 'Karachi',
    locationArea: 'Gulshan-e-Iqbal Block 6',
    registeredCity: 'Karachi',
    fuelType: 'Petrol',
    transmission: 'Manual',
    engineCapacity: '660 cc',
    bodyType: 'Hatchback',
    exteriorColor: 'Silky Silver',
    assembly: 'Local',
    condition: '9.1/10',
    featured: false,
    certified: true,
    inspectionScore: 9.1,
    inspectionSummary: {
      overall: 9.1,
      engine: 9.3,
      suspension: 9.0,
      body: 8.9,
      interior: 9.2
    },
    images: [
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1563720223185-11003d516935?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=900&auto=format&fit=crop&q=80'
    ],
    features: [
      'Dual SRS Airbags',
      'ABS Brakes',
      'Air Conditioning',
      'Power Steering',
      'Keyless Entry',
      'Infotainment Bluetooth Audio',
      'Front Seat Belts with Pretensioners',
      'Immobilizer'
    ],
    description: 'First owner Suzuki Alto VXR driven solely within Karachi city. Extremely economical daily runner delivering an impressive 19-21 km/l with AC. Chilled AC, crisp suspension, and non-accidental guarantee. All taxes paid up to date, original book and duplicate smart card in hand. Transfer of ownership mandatory.',
    seller: {
      name: 'Syed Farhan Ali',
      type: 'Individual',
      memberSince: 'August 2022',
      city: 'Karachi',
      phone: '0321-2299814',
      whatsapp: '923212299814',
      verified: true
    },
    specs: {
      horsepower: '39 hp @ 6500 RPM',
      torque: '56 Nm @ 4000 RPM',
      fuelEconomy: '18 - 22 km/l',
      fuelTank: '27 L',
      seating: '4 Persons',
      doors: '4 Doors',
      bootSpace: '177 Liters'
    },
    createdAt: '2026-10-01T08:20:00Z'
  },
  {
    id: 'car-4',
    title: 'KIA Sportage FWD',
    make: 'KIA',
    model: 'Sportage',
    variant: '2.0 FWD Automatic',
    year: 2022,
    price: 6600000, // 66.0 Lacs
    mileage: 36000,
    city: 'Lahore',
    locationArea: 'Johar Town',
    registeredCity: 'Lahore',
    fuelType: 'Petrol',
    transmission: 'Automatic',
    engineCapacity: '2000 cc',
    bodyType: 'SUV',
    exteriorColor: 'Panthera Metal',
    assembly: 'Local',
    condition: '9.3/10',
    featured: true,
    certified: true,
    inspectionScore: 9.3,
    inspectionSummary: {
      overall: 9.3,
      engine: 9.4,
      suspension: 9.2,
      body: 9.1,
      interior: 9.4
    },
    images: [
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=900&auto=format&fit=crop&q=80'
    ],
    features: [
      'Panoramic Sunroof',
      'Electric Parking Brake with Auto Hold',
      '6 SRS Airbags',
      'Cruise Control',
      'Dual-Zone Automatic Climate Control',
      'Leather Upholstery',
      'Projector Bi-Function LED Headlamps',
      'Shark Fin Antenna',
      '18-inch Machine Finish Alloy Wheels',
      'Vehicle Stability Management'
    ],
    description: 'KIA Sportage FWD 2022 in mint condition. Maintained timely with synthetic Mobil 1 oil at KIA Motors Gulberg. Driven strictly on Ring Road and DHA. Immaculate scratchless body, zero squeaks or mechanical faults. Tyres in excellent 85% condition. Original smart card and complete return file available.',
    seller: {
      name: 'Sheikh Bilal Ahmed',
      type: 'Individual',
      memberSince: 'November 2020',
      city: 'Lahore',
      phone: '0302-4589901',
      whatsapp: '923024589901',
      verified: true
    },
    specs: {
      horsepower: '155 hp @ 6200 RPM',
      torque: '196 Nm @ 4000 RPM',
      fuelEconomy: '10 - 13 km/l',
      fuelTank: '62 L',
      seating: '5 Persons',
      doors: '5 Doors',
      bootSpace: '503 Liters'
    },
    createdAt: '2026-09-29T16:00:00Z'
  },
  {
    id: 'car-5',
    title: 'Hyundai Tucson GLS AWD',
    make: 'Hyundai',
    model: 'Tucson',
    variant: '2.0 AWD Ultimate Flagship',
    year: 2022,
    price: 7400000, // 74.0 Lacs
    mileage: 31000,
    city: 'Islamabad',
    locationArea: 'G-11/3',
    registeredCity: 'Islamabad',
    fuelType: 'Petrol',
    transmission: 'Automatic',
    engineCapacity: '2000 cc',
    bodyType: 'SUV',
    exteriorColor: 'Polar White',
    assembly: 'Local',
    condition: '9.5/10',
    featured: true,
    certified: true,
    inspectionScore: 9.5,
    inspectionSummary: {
      overall: 9.5,
      engine: 9.6,
      suspension: 9.4,
      body: 9.4,
      interior: 9.6
    },
    images: [
      'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&auto=format&fit=crop&q=80'
    ],
    features: [
      'HTRAC All-Wheel Drive with Lock',
      'Panoramic Glass Sunroof',
      'Smart Powered Tailgate',
      'Wireless Phone Charger',
      'Full Leather Powered Driver Seat with Lumbar',
      'Downhill Brake Control (DBC)',
      'Hill-Start Assist (HAC)',
      '18-inch Sport Alloy Wheels',
      'Cornering Lamps'
    ],
    description: 'Tucson AWD top of the line variant. Highly capable in northern areas and highway touring. Registered in Islamabad on own name. Scratchless interior with plastic covers still intact on door sills. No work required whatsoever, just buy and drive. Viewing possible after 5 PM in G-11.',
    seller: {
      name: 'Dr. Zeeshan Haider',
      type: 'Individual',
      memberSince: 'May 2021',
      city: 'Islamabad',
      phone: '0314-5544321',
      whatsapp: '923145544321',
      verified: true
    },
    specs: {
      horsepower: '155 hp @ 6200 RPM',
      torque: '196 Nm @ 4000 RPM',
      fuelEconomy: '9.5 - 13 km/l',
      fuelTank: '62 L',
      seating: '5 Persons',
      doors: '5 Doors',
      bootSpace: '513 Liters'
    },
    createdAt: '2026-10-01T12:00:00Z'
  },
  {
    id: 'car-6',
    title: 'Suzuki Swift GLX CVT',
    make: 'Suzuki',
    model: 'Swift',
    variant: '1.2 GLX CVT Top Variant',
    year: 2023,
    price: 4950000, // 49.5 Lacs
    mileage: 18000,
    city: 'Rawalpindi',
    locationArea: 'Bahria Town Phase 7',
    registeredCity: 'Rawalpindi',
    fuelType: 'Petrol',
    transmission: 'Automatic',
    engineCapacity: '1200 cc DualJet',
    bodyType: 'Hatchback',
    exteriorColor: 'Phoenix Red',
    assembly: 'Local',
    condition: '9.6/10',
    featured: true,
    certified: true,
    inspectionScore: 9.6,
    inspectionSummary: {
      overall: 9.6,
      engine: 9.8,
      suspension: 9.5,
      body: 9.4,
      interior: 9.7
    },
    images: [
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=900&auto=format&fit=crop&q=80'
    ],
    features: [
      '6 SRS Airbags',
      'Cruise Control',
      'LED Projector Headlamps with DRLs',
      '9-inch Floating Touchscreen Infotainment',
      'Push Button Start & Smart Key',
      'Automatic Climate Control',
      '16-inch Two-Tone Alloy Rims',
      'Rear Camera & Parking Sensors',
      'Electronic Stability Program (ESP)'
    ],
    description: 'New shape Suzuki Swift GLX CVT with complete luxury features. Red color gives it an extraordinary sporty road presence. Single owner, Rawalpindi registered. Driven carefully on Islamabad Expressway. Outstanding fuel mileage of 16-17 km/l in city. Zero paint touchups. Serious buyers can inspect in Bahria Town.',
    seller: {
      name: 'Major (R) Haris Munir',
      type: 'Individual',
      memberSince: 'April 2023',
      city: 'Rawalpindi',
      phone: '0345-5678901',
      whatsapp: '923455678901',
      verified: true
    },
    specs: {
      horsepower: '82 hp @ 6000 RPM',
      torque: '113 Nm @ 4200 RPM',
      fuelEconomy: '15 - 18 km/l',
      fuelTank: '37 L',
      seating: '5 Persons',
      doors: '4 Doors',
      bootSpace: '268 Liters'
    },
    createdAt: '2026-10-02T11:45:00Z'
  },
  {
    id: 'car-7',
    title: 'Toyota Yaris ATIV X 1.5 CVT',
    make: 'Toyota',
    model: 'Yaris',
    variant: 'ATIV X 1.5 CVT',
    year: 2022,
    price: 5200000, // 52.0 Lacs
    mileage: 34500,
    city: 'Faisalabad',
    locationArea: 'Madina Town',
    registeredCity: 'Lahore',
    fuelType: 'Petrol',
    transmission: 'Automatic',
    engineCapacity: '1500 cc Dual VVT-i',
    bodyType: 'Sedan',
    exteriorColor: 'Attitude Black',
    assembly: 'Local',
    condition: '9.2/10',
    featured: false,
    certified: true,
    inspectionScore: 9.2,
    inspectionSummary: {
      overall: 9.2,
      engine: 9.3,
      suspension: 9.1,
      body: 9.0,
      interior: 9.3
    },
    images: [
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?w=900&auto=format&fit=crop&q=80'
    ],
    features: [
      'Push Button Start',
      'Smart Key Entry',
      'TFT Multi-Info Instrument Cluster',
      'Dual Airbags',
      'Vehicle Stability Control (VSC)',
      'Traction Control & Hill Start Assist',
      'Automatic Climate Control',
      '15-inch Alloy Wheels'
    ],
    description: 'Yaris ATIV X top of the line model in elegant Attitude Black. Very well maintained with regular synthetic lube changes. High ground clearance and ultra comfortable suspension suited for Pakistani road conditions. Punjab registered with all taxes cleared.',
    seller: {
      name: 'Chaudhry Waqas Gujjar',
      type: 'Individual',
      memberSince: 'September 2021',
      city: 'Faisalabad',
      phone: '0301-7896543',
      whatsapp: '923017896543',
      verified: true
    },
    specs: {
      horsepower: '106 hp @ 6000 RPM',
      torque: '140 Nm @ 4200 RPM',
      fuelEconomy: '14 - 17 km/l',
      fuelTank: '42 L',
      seating: '5 Persons',
      doors: '4 Doors',
      bootSpace: '476 Liters'
    },
    createdAt: '2026-09-27T09:10:00Z'
  },
  {
    id: 'car-8',
    title: 'Haval H6 HEV 1.5T Hybrid',
    make: 'Haval',
    model: 'H6',
    variant: '1.5T Dedicated Hybrid DHT',
    year: 2023,
    price: 11800000, // 1.18 Crore
    mileage: 14000,
    city: 'Lahore',
    locationArea: 'Model Town',
    registeredCity: 'Islamabad',
    fuelType: 'Hybrid',
    transmission: 'Automatic',
    engineCapacity: '1500 cc Turbo Hybrid',
    bodyType: 'SUV',
    exteriorColor: 'Hamilton White',
    assembly: 'Local',
    condition: '9.9/10',
    featured: true,
    certified: true,
    inspectionScore: 9.8,
    inspectionSummary: {
      overall: 9.8,
      engine: 9.9,
      suspension: 9.8,
      body: 9.8,
      interior: 9.8
    },
    images: [
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=900&auto=format&fit=crop&q=80'
    ],
    features: [
      'L2 Autonomous Driving ADAS',
      'Full Speed Adaptive Cruise Control',
      '360-Degree Panoramic 3D Camera',
      'Heated & Ventilated Front Seats',
      'Head-Up Display (HUD)',
      '12.3-inch Full Digital Screen',
      'Wireless Apple CarPlay / Android Auto',
      'Panoramic Sunroof',
      'Electric Tailgate with Foot Sensor',
      '19-inch Gloss Black Alloy Wheels'
    ],
    description: 'Pakistan’s most popular hybrid SUV! Outstanding power of 240 horsepower paired with exceptional fuel efficiency of 17-19 km/l. Fully loaded with Level 2 automated safety tech. Ceramic coating done by Detailers Lahore with warranty. As good as a brand new car off the showroom floor.',
    seller: {
      name: 'Apex Motors Lahore',
      type: 'Dealer',
      memberSince: 'June 2019',
      city: 'Lahore',
      phone: '0322-8419000',
      whatsapp: '923228419000',
      verified: true
    },
    specs: {
      horsepower: '240 hp (Combined)',
      torque: '530 Nm (Combined)',
      fuelEconomy: '17 - 20 km/l',
      fuelTank: '60 L',
      seating: '5 Persons',
      doors: '5 Doors',
      bootSpace: '600 Liters'
    },
    createdAt: '2026-10-02T15:20:00Z'
  },
  {
    id: 'car-9',
    title: 'Toyota Fortuner 2.8 Legender 4x4',
    make: 'Toyota',
    model: 'Fortuner',
    variant: 'Legender 2.8 Sigma 4 Diesel',
    year: 2023,
    price: 18900000, // 1.89 Crore
    mileage: 21000,
    city: 'Islamabad',
    locationArea: 'E-7',
    registeredCity: 'Islamabad',
    fuelType: 'Diesel',
    transmission: 'Automatic',
    engineCapacity: '2800 cc 1GD-FTV Turbo Diesel',
    bodyType: '4x4',
    exteriorColor: 'Super White with Black Roof',
    assembly: 'Local',
    condition: '9.7/10',
    featured: true,
    certified: true,
    inspectionScore: 9.7,
    inspectionSummary: {
      overall: 9.7,
      engine: 9.8,
      suspension: 9.7,
      body: 9.6,
      interior: 9.7
    },
    images: [
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=900&auto=format&fit=crop&q=80'
    ],
    features: [
      'Legender Quad-LED Headlamps with Sequential Indicators',
      'Two-Tone Maroon & Black Leather Interior',
      'JBL Premium 11-Speaker Audio System',
      'Power Boot with Kick Sensor',
      'Drive Modes: Eco, Normal, Sport',
      'Rear Differential Lock (AWD/4WD High & Low)',
      '7 Airbags',
      'Ambient Cabin Lighting',
      '18-inch Two-Tone Legender Alloy Wheels'
    ],
    description: 'Toyota Fortuner Legender in absolute top condition. Single diplomat owner, driven exclusively in Islamabad. Powerful 201 hp 500 Nm torque diesel motor with remarkable pulling power. Total genuine paint, spare tyre untouched. Complete documentation with original biometric and number plates.',
    seller: {
      name: 'Malik Jahangir Awan',
      type: 'Individual',
      memberSince: 'February 2019',
      city: 'Islamabad',
      phone: '0300-5599112',
      whatsapp: '923005599112',
      verified: true
    },
    specs: {
      horsepower: '201 hp @ 3400 RPM',
      torque: '500 Nm @ 1600-2800 RPM',
      fuelEconomy: '9.5 - 12 km/l',
      fuelTank: '80 L',
      seating: '7 Persons',
      doors: '5 Doors',
      bootSpace: '716 Liters (seats folded)'
    },
    createdAt: '2026-10-01T17:30:00Z'
  },
  {
    id: 'car-10',
    title: 'Suzuki Cultus VXL',
    make: 'Suzuki',
    model: 'Cultus',
    variant: '1.0 VXL Manual',
    year: 2021,
    price: 3650000, // 36.5 Lacs
    mileage: 42000,
    city: 'Multan',
    locationArea: 'Cantt',
    registeredCity: 'Multan',
    fuelType: 'Petrol',
    transmission: 'Manual',
    engineCapacity: '1000 cc K10B',
    bodyType: 'Hatchback',
    exteriorColor: 'Cerulean Blue',
    assembly: 'Local',
    condition: '9.0/10',
    featured: false,
    certified: true,
    inspectionScore: 9.0,
    inspectionSummary: {
      overall: 9.0,
      engine: 9.2,
      suspension: 8.9,
      body: 8.8,
      interior: 9.1
    },
    images: [
      'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1563720223185-11003d516935?w=900&auto=format&fit=crop&q=80'
    ],
    features: [
      'Dual Airbags',
      'ABS Brakes',
      'Power Windows & Power Steering',
      'Alloy Rims',
      'Keyless Entry',
      'Front Fog Lamps',
      'Bluetooth Audio System'
    ],
    description: 'Cultus VXL 2021 model in eye-catching Cerulean Blue. Family used car, maintained with high attention to detail. Engine and transmission 100%, suspension smooth. AC chilling even in peak Multan summer. Clear title with smart card.',
    seller: {
      name: 'Rao Nadeem',
      type: 'Individual',
      memberSince: 'July 2022',
      city: 'Multan',
      phone: '0305-6712345',
      whatsapp: '923056712345',
      verified: true
    },
    specs: {
      horsepower: '67 hp @ 6000 RPM',
      torque: '90 Nm @ 3500 RPM',
      fuelEconomy: '16 - 19 km/l',
      fuelTank: '35 L',
      seating: '5 Persons',
      doors: '4 Doors',
      bootSpace: '239 Liters'
    },
    createdAt: '2026-09-26T13:40:00Z'
  },
  {
    id: 'car-11',
    title: 'Honda City 1.5 Aspire CVT',
    make: 'Honda',
    model: 'City',
    variant: '1.5 Aspire CVT',
    year: 2022,
    price: 5650000, // 56.5 Lacs
    mileage: 26000,
    city: 'Karachi',
    locationArea: 'Clifton Block 4',
    registeredCity: 'Karachi',
    fuelType: 'Petrol',
    transmission: 'Automatic',
    engineCapacity: '1500 cc i-VTEC',
    bodyType: 'Sedan',
    exteriorColor: 'Urban Titanium',
    assembly: 'Local',
    condition: '9.3/10',
    featured: false,
    certified: true,
    inspectionScore: 9.3,
    inspectionSummary: {
      overall: 9.3,
      engine: 9.5,
      suspension: 9.2,
      body: 9.1,
      interior: 9.4
    },
    images: [
      'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=900&auto=format&fit=crop&q=80'
    ],
    features: [
      'Push Button Start',
      'Smart Key Entry',
      '9-inch Android Navigation Unit',
      'Alloy Wheels',
      'Automatic Climate Control',
      'Dual Airbags & ABS',
      'Rear AC Vents',
      'Shark Fin Antenna'
    ],
    description: 'Honda City Aspire 1.5 CVT top-end package. Used strictly as a second vehicle. Smooth transmission with brisk acceleration. Pristine interior, non-smoker car. Tax paid up to June 2026, complete original documents.',
    seller: {
      name: 'Adnan Siddiqui',
      type: 'Individual',
      memberSince: 'December 2021',
      city: 'Karachi',
      phone: '0334-2198765',
      whatsapp: '923342198765',
      verified: true
    },
    specs: {
      horsepower: '118 hp @ 6600 RPM',
      torque: '145 Nm @ 4600 RPM',
      fuelEconomy: '13 - 16 km/l',
      fuelTank: '40 L',
      seating: '5 Persons',
      doors: '4 Doors',
      bootSpace: '510 Liters'
    },
    createdAt: '2026-09-29T11:00:00Z'
  },
  {
    id: 'car-12',
    title: 'MG HS 1.5T Exclusive Trophy Edition',
    make: 'MG',
    model: 'HS',
    variant: '1.5 Turbo Trophy Edition',
    year: 2021,
    price: 5900000, // 59.0 Lacs
    mileage: 38000,
    city: 'Peshawar',
    locationArea: 'University Town',
    registeredCity: 'Islamabad',
    fuelType: 'Petrol',
    transmission: 'Automatic',
    engineCapacity: '1500 cc Turbo',
    bodyType: 'SUV',
    exteriorColor: 'Diamond Red',
    assembly: 'Imported',
    condition: '9.2/10',
    featured: false,
    certified: true,
    inspectionScore: 9.1,
    inspectionSummary: {
      overall: 9.1,
      engine: 9.2,
      suspension: 9.0,
      body: 9.0,
      interior: 9.2
    },
    images: [
      'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=900&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&auto=format&fit=crop&q=80'
    ],
    features: [
      'MG Pilot Driver Assist Suite',
      'Trophy Sports Bucket Seats with Heating',
      'Panoramic Stargazer Sunroof',
      '10.1-inch Floating Infotainment Display',
      '64-Color Ambient Interior Lighting',
      'Paddle Shifters',
      'Electric Tailgate'
    ],
    description: 'CBU Imported Trophy edition MG HS in the signature Diamond Red color. Stunning red leather interior with electric sports seats. Smooth 7-speed dual-clutch transmission. Fully serviced at authorized MG dealership.',
    seller: {
      name: 'Kashif Afridi',
      type: 'Individual',
      memberSince: 'March 2022',
      city: 'Peshawar',
      phone: '0313-9876543',
      whatsapp: '923139876543',
      verified: true
    },
    specs: {
      horsepower: '160 hp @ 5600 RPM',
      torque: '250 Nm @ 1700-4300 RPM',
      fuelEconomy: '10 - 13 km/l',
      fuelTank: '55 L',
      seating: '5 Persons',
      doors: '5 Doors',
      bootSpace: '463 Liters'
    },
    createdAt: '2026-09-25T15:10:00Z'
  }
];

export const POPULAR_MODELS = [
  { make: 'Toyota', model: 'Corolla', count: '14,200+ listed', priceStart: 'Rs 18.5 Lacs' },
  { make: 'Honda', model: 'Civic', count: '11,400+ listed', priceStart: 'Rs 24.0 Lacs' },
  { make: 'Suzuki', model: 'Alto', count: '9,800+ listed', priceStart: 'Rs 14.5 Lacs' },
  { make: 'KIA', model: 'Sportage', count: '5,600+ listed', priceStart: 'Rs 52.0 Lacs' },
  { make: 'Suzuki', model: 'Swift', count: '6,200+ listed', priceStart: 'Rs 19.0 Lacs' },
  { make: 'Toyota', model: 'Yaris', count: '4,800+ listed', priceStart: 'Rs 36.0 Lacs' },
  { make: 'Hyundai', model: 'Tucson', count: '3,900+ listed', priceStart: 'Rs 62.0 Lacs' },
  { make: 'Honda', model: 'City', count: '8,100+ listed', priceStart: 'Rs 17.5 Lacs' }
];

export const NEW_CARS_LIST = [
  {
    id: 'new-1',
    name: 'Toyota Corolla Cross Hybrid',
    brand: 'Toyota',
    tagline: 'Pakistan’s First Locally Manufactured Hybrid Electric SUV',
    priceRange: 'PKR 9,399,000 - 9,849,000',
    bodyType: 'SUV',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=900&auto=format&fit=crop&q=80',
    rating: 4.8,
    reviewsCount: 142,
    variants: [
      { name: '1.8 HEV Mid', price: 9399000 },
      { name: '1.8 HEV Premium High', price: 9849000 }
    ],
    specs: {
      engine: '1798 cc Hybrid 2ZR-FXE',
      power: '121 hp Combined',
      fuelEconomy: '20 - 23 km/l',
      transmission: 'e-CVT Automatic',
      airbags: 7
    },
    colors: ['Super White', 'Metal Stream Metallic', 'Attitude Black', 'Celestite Gray', 'Red Mica']
  },
  {
    id: 'new-2',
    name: 'Honda Civic 11th Gen',
    brand: 'Honda',
    tagline: 'The Driver’s Choice Sedan with Turbocharged Power',
    priceRange: 'PKR 8,329,000 - 9,899,000',
    bodyType: 'Sedan',
    image: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=900&auto=format&fit=crop&q=80',
    rating: 4.7,
    reviewsCount: 210,
    variants: [
      { name: 'Standard 1.5 Turbo Oriel', price: 8329000 },
      { name: 'RS 1.5 Turbo Flagship', price: 9899000 }
    ],
    specs: {
      engine: '1498 cc VTEC Turbo',
      power: '176 hp @ 6000 RPM',
      fuelEconomy: '12 - 15 km/l',
      transmission: 'LL-CVT with Paddle Shifters',
      airbags: 4
    },
    colors: ['Taffeta White', 'Crystal Black Pearl', 'Meteoroid Gray', 'Lunar Silver', 'Carnelian Red']
  },
  {
    id: 'new-3',
    name: 'Suzuki Swift 4th Gen',
    brand: 'Suzuki',
    tagline: 'Excitement Unleashed with Advanced 1.2 DualJet',
    priceRange: 'PKR 4,336,000 - 4,719,000',
    bodyType: 'Hatchback',
    image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?w=900&auto=format&fit=crop&q=80',
    rating: 4.6,
    reviewsCount: 380,
    variants: [
      { name: 'GL Manual', price: 4336000 },
      { name: 'GL CVT', price: 4560000 },
      { name: 'GLX CVT', price: 4719000 }
    ],
    specs: {
      engine: '1197 cc K12M DualJet',
      power: '82 hp @ 6000 RPM',
      fuelEconomy: '15 - 18 km/l',
      transmission: '5-Speed MT / CVT',
      airbags: 6
    },
    colors: ['Phoenix Red', 'Mineral Gray', 'Solid White', 'Silky Silver', 'Black']
  },
  {
    id: 'new-4',
    name: 'Haval H6 HEV Hybrid',
    brand: 'Haval',
    tagline: 'High-Tech Luxury & Cutting-Edge Intelligent Driving',
    priceRange: 'PKR 11,866,000',
    bodyType: 'SUV',
    image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=900&auto=format&fit=crop&q=80',
    rating: 4.9,
    reviewsCount: 95,
    variants: [
      { name: '1.5T Dedicated Hybrid DHT', price: 11866000 }
    ],
    specs: {
      engine: '1499 cc Turbo Hybrid',
      power: '240 hp / 530 Nm Torque',
      fuelEconomy: '18 - 20 km/l',
      transmission: '2-Speed DHT Hybrid',
      airbags: 6
    },
    colors: ['Hamilton White', 'Ayers Gray', 'Sun Gold', 'Atlantis Blue']
  },
  {
    id: 'new-5',
    name: 'Changan Alsvin',
    brand: 'Changan',
    tagline: 'Smart Sedan with European Design & Dual-Clutch DCT',
    priceRange: 'PKR 3,929,000 - 4,549,000',
    bodyType: 'Sedan',
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=900&auto=format&fit=crop&q=80',
    rating: 4.4,
    reviewsCount: 165,
    variants: [
      { name: '1.37L Comfort MT', price: 3929000 },
      { name: '1.5L Comfort DCT', price: 4299000 },
      { name: '1.5L Lumiere DCT with Sunroof', price: 4549000 }
    ],
    specs: {
      engine: '1480 cc BlueCore VVT',
      power: '105 hp @ 5500 RPM',
      fuelEconomy: '13 - 16 km/l',
      transmission: '5-Speed Dual Clutch (DCT)',
      airbags: 2
    },
    colors: ['Starlight White', 'Galaxy Black', 'Cosmic Red', 'Lunar Gray']
  },
  {
    id: 'new-6',
    name: 'KIA Sportage Limited Edition',
    brand: 'KIA',
    tagline: 'The Pioneer of Modern Crossovers in Pakistan',
    priceRange: 'PKR 7,300,000 - 9,000,000',
    bodyType: 'SUV',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900&auto=format&fit=crop&q=80',
    rating: 4.7,
    reviewsCount: 290,
    variants: [
      { name: 'Alpha 2.0 FWD', price: 7300000 },
      { name: 'FWD 2.0', price: 7750000 },
      { name: 'AWD 2.0', price: 8470000 },
      { name: 'Black Limited Edition', price: 9000000 }
    ],
    specs: {
      engine: '1999 cc MPI Nu Engine',
      power: '155 hp @ 6200 RPM',
      fuelEconomy: '11 - 14 km/l',
      transmission: '6-Speed H-Matic Auto',
      airbags: 6
    },
    colors: ['Panthera Metal', 'Clear White', 'Cherry Black', 'Mercury Blue']
  }
];
