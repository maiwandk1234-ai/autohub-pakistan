import React, { useState, useMemo } from 'react';
import { 
  Search, 
  MapPin, 
  SlidersHorizontal, 
  LayoutGrid, 
  List, 
  X, 
  Scale, 
  Check, 
  ArrowUpDown,
  Filter
} from 'lucide-react';
import VehicleCard from '../components/VehicleCard';
import { PAKISTANI_CITIES, BODY_TYPES } from '../data/pakistaniLocations';
import { formatPKR } from '../utils/formatters';

export default function UsedCarsPage({ 
  cars, 
  navigate, 
  favorites = [], 
  onToggleFavorite,
  comparison = [],
  onToggleCompare,
  initialFilters = {} 
}) {
  const [searchTerm, setSearchTerm] = useState(initialFilters.make || '');
  const [selectedMake, setSelectedMake] = useState(initialFilters.make || '');
  const [selectedCity, setSelectedCity] = useState(initialFilters.city || '');
  const [selectedBodyType, setSelectedBodyType] = useState(initialFilters.bodyType || '');
  const [selectedFuelType, setSelectedFuelType] = useState(initialFilters.fuelType || '');
  const [selectedTransmission, setSelectedTransmission] = useState('');
  const [selectedAssembly, setSelectedAssembly] = useState('');
  const [priceMax, setPriceMax] = useState(initialFilters.priceMax || 25000000);
  const [minYear, setMinYear] = useState('');
  const [maxMileage, setMaxMileage] = useState('');
  const [sortBy, setSortBy] = useState('recent'); // 'recent' | 'price-asc' | 'price-desc' | 'year-desc' | 'mileage-asc'
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'list'
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Available Makes
  const availableMakes = useMemo(() => {
    const set = new Set(cars.map(c => c.make));
    return Array.from(set).sort();
  }, [cars]);

  // Filtering Logic
  const filteredCars = useMemo(() => {
    return cars.filter((car) => {
      // Search term
      if (searchTerm) {
        const query = searchTerm.toLowerCase();
        const fullTitle = `${car.make} ${car.model} ${car.title} ${car.variant}`.toLowerCase();
        if (!fullTitle.includes(query)) return false;
      }

      // Make
      if (selectedMake && car.make.toLowerCase() !== selectedMake.toLowerCase()) {
        return false;
      }

      // City
      if (selectedCity && car.city.toLowerCase() !== selectedCity.toLowerCase()) {
        return false;
      }

      // Body Type
      if (selectedBodyType && car.bodyType.toLowerCase() !== selectedBodyType.toLowerCase()) {
        return false;
      }

      // Fuel Type
      if (selectedFuelType && car.fuelType.toLowerCase() !== selectedFuelType.toLowerCase()) {
        return false;
      }

      // Transmission
      if (selectedTransmission && car.transmission.toLowerCase() !== selectedTransmission.toLowerCase()) {
        return false;
      }

      // Assembly
      if (selectedAssembly && car.assembly.toLowerCase() !== selectedAssembly.toLowerCase()) {
        return false;
      }

      // Price Max
      if (priceMax && car.price > priceMax) {
        return false;
      }

      // Min Year
      if (minYear && car.year < Number(minYear)) {
        return false;
      }

      // Max Mileage
      if (maxMileage && car.mileage > Number(maxMileage)) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-asc') return a.price - b.price;
      if (sortBy === 'price-desc') return b.price - a.price;
      if (sortBy === 'year-desc') return b.year - a.year;
      if (sortBy === 'mileage-asc') return a.mileage - b.mileage;
      // 'recent'
      return new Date(b.createdAt || 0) - new Date(a.createdAt || 0);
    });
  }, [
    cars,
    searchTerm,
    selectedMake,
    selectedCity,
    selectedBodyType,
    selectedFuelType,
    selectedTransmission,
    selectedAssembly,
    priceMax,
    minYear,
    maxMileage,
    sortBy
  ]);

  const clearAllFilters = () => {
    setSearchTerm('');
    setSelectedMake('');
    setSelectedCity('');
    setSelectedBodyType('');
    setSelectedFuelType('');
    setSelectedTransmission('');
    setSelectedAssembly('');
    setPriceMax(25000000);
    setMinYear('');
    setMaxMileage('');
  };

  const hasActiveFilters = Boolean(
    searchTerm || selectedMake || selectedCity || selectedBodyType || 
    selectedFuelType || selectedTransmission || selectedAssembly || 
    priceMax < 25000000 || minYear || maxMileage
  );

  return (
    <div style={{ background: 'var(--bg-main)', minHeight: '80vh' }}>
      {/* Sub-header Banner */}
      <div style={{ background: '#ffffff', borderBottom: '1px solid var(--border-color)', padding: '1.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.75rem', fontWeight: 800 }}>
                Used Cars for Sale in Pakistan
              </h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                Showing <strong>{filteredCars.length}</strong> verified used vehicles
              </p>
            </div>

            {/* Quick search input */}
            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', width: '100%', maxWidth: '420px' }}>
              <div className="search-input-wrapper" style={{ width: '100%' }}>
                <Search size={18} className="input-icon" />
                <input 
                  type="text" 
                  placeholder="Search by make, model, or keywords..."
                  className="search-input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                {searchTerm && (
                  <button 
                    onClick={() => setSearchTerm('')} 
                    style={{ position: 'absolute', right: '0.75rem', color: 'var(--text-muted)' }}
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              {/* Mobile Filter Toggle */}
              <button 
                className="btn btn-secondary" 
                style={{ display: 'none' }}
                id="mobile-filter-btn"
                onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
              >
                <Filter size={16} />
              </button>
            </div>
          </div>

          {/* Active Filter Chips */}
          {hasActiveFilters && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '1rem', flexWrap: 'wrap' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)' }}>Active Filters:</span>
              {selectedMake && (
                <span className="filter-chip active" onClick={() => setSelectedMake('')}>
                  Make: {selectedMake} <X size={12} style={{ marginLeft: '4px' }} />
                </span>
              )}
              {selectedCity && (
                <span className="filter-chip active" onClick={() => setSelectedCity('')}>
                  City: {selectedCity} <X size={12} style={{ marginLeft: '4px' }} />
                </span>
              )}
              {selectedBodyType && (
                <span className="filter-chip active" onClick={() => setSelectedBodyType('')}>
                  Body: {selectedBodyType} <X size={12} style={{ marginLeft: '4px' }} />
                </span>
              )}
              {selectedFuelType && (
                <span className="filter-chip active" onClick={() => setSelectedFuelType('')}>
                  Fuel: {selectedFuelType} <X size={12} style={{ marginLeft: '4px' }} />
                </span>
              )}
              {selectedTransmission && (
                <span className="filter-chip active" onClick={() => setSelectedTransmission('')}>
                  Transmission: {selectedTransmission} <X size={12} style={{ marginLeft: '4px' }} />
                </span>
              )}
              {priceMax < 25000000 && (
                <span className="filter-chip active" onClick={() => setPriceMax(25000000)}>
                  Price &lt; {formatPKR(priceMax)} <X size={12} style={{ marginLeft: '4px' }} />
                </span>
              )}
              <button 
                onClick={clearAllFilters}
                style={{ fontSize: '0.8rem', color: 'var(--brand-red)', fontWeight: 700, marginLeft: '0.5rem', textDecoration: 'underline' }}
              >
                Clear All
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="container">
        <div className="catalog-layout">
          {/* Sidebar Filters */}
          <aside className={`filter-sidebar ${mobileFilterOpen ? 'open' : ''}`}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 800, fontSize: '1.1rem' }}>
                <SlidersHorizontal size={18} />
                <span>Filters</span>
              </div>
              {hasActiveFilters && (
                <button 
                  onClick={clearAllFilters}
                  style={{ fontSize: '0.75rem', color: 'var(--brand-red)', fontWeight: 700 }}
                >
                  Reset
                </button>
              )}
            </div>

            {/* Make / Brand */}
            <div>
              <div className="filter-group-header">Make / Brand</div>
              <select 
                className="search-select" 
                style={{ paddingLeft: '0.85rem' }}
                value={selectedMake}
                onChange={(e) => setSelectedMake(e.target.value)}
              >
                <option value="">All Makes (Toyota, Honda...)</option>
                {availableMakes.map((m) => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>

            {/* City */}
            <div>
              <div className="filter-group-header">City</div>
              <select 
                className="search-select" 
                style={{ paddingLeft: '0.85rem' }}
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
              >
                <option value="">All Pakistani Cities</option>
                {PAKISTANI_CITIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>

            {/* Price Range Slider */}
            <div>
              <div className="filter-group-header">
                <span>Max Budget</span>
                <span style={{ color: 'var(--brand-red)', fontWeight: 800 }}>
                  {priceMax >= 25000000 ? 'Any Price' : formatPKR(priceMax)}
                </span>
              </div>
              <input 
                type="range"
                min="1500000"
                max="25000000"
                step="500000"
                value={priceMax}
                onChange={(e) => setPriceMax(Number(e.target.value))}
                style={{ width: '100%', accentColor: 'var(--brand-red)' }}
              />
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginTop: '0.5rem' }}>
                <button className={`filter-chip ${priceMax === 3000000 ? 'active' : ''}`} onClick={() => setPriceMax(3000000)}>
                  &lt; 30 Lacs
                </button>
                <button className={`filter-chip ${priceMax === 6000000 ? 'active' : ''}`} onClick={() => setPriceMax(6000000)}>
                  &lt; 60 Lacs
                </button>
                <button className={`filter-chip ${priceMax === 10000000 ? 'active' : ''}`} onClick={() => setPriceMax(10000000)}>
                  &lt; 1 Crore
                </button>
              </div>
            </div>

            {/* Body Type */}
            <div>
              <div className="filter-group-header">Body Type</div>
              <div className="filter-chip-list">
                {BODY_TYPES.map((bt) => (
                  <button
                    key={bt.id}
                    className={`filter-chip ${selectedBodyType === bt.id ? 'active' : ''}`}
                    onClick={() => setSelectedBodyType(selectedBodyType === bt.id ? '' : bt.id)}
                  >
                    {bt.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Transmission */}
            <div>
              <div className="filter-group-header">Transmission</div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button 
                  className={`btn btn-sm ${selectedTransmission === 'Automatic' ? 'btn-dark' : 'btn-secondary'}`}
                  style={{ flex: 1 }}
                  onClick={() => setSelectedTransmission(selectedTransmission === 'Automatic' ? '' : 'Automatic')}
                >
                  Automatic
                </button>
                <button 
                  className={`btn btn-sm ${selectedTransmission === 'Manual' ? 'btn-dark' : 'btn-secondary'}`}
                  style={{ flex: 1 }}
                  onClick={() => setSelectedTransmission(selectedTransmission === 'Manual' ? '' : 'Manual')}
                >
                  Manual
                </button>
              </div>
            </div>

            {/* Fuel Type */}
            <div>
              <div className="filter-group-header">Fuel Type</div>
              <div className="filter-chip-list">
                {['Petrol', 'Hybrid', 'Diesel', 'Electric'].map((ft) => (
                  <button
                    key={ft}
                    className={`filter-chip ${selectedFuelType === ft ? 'active' : ''}`}
                    onClick={() => setSelectedFuelType(selectedFuelType === ft ? '' : ft)}
                  >
                    {ft}
                  </button>
                ))}
              </div>
            </div>

            {/* Assembly */}
            <div>
              <div className="filter-group-header">Assembly</div>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button 
                  className={`btn btn-sm ${selectedAssembly === 'Local' ? 'btn-dark' : 'btn-secondary'}`}
                  style={{ flex: 1 }}
                  onClick={() => setSelectedAssembly(selectedAssembly === 'Local' ? '' : 'Local')}
                >
                  Local
                </button>
                <button 
                  className={`btn btn-sm ${selectedAssembly === 'Imported' ? 'btn-dark' : 'btn-secondary'}`}
                  style={{ flex: 1 }}
                  onClick={() => setSelectedAssembly(selectedAssembly === 'Imported' ? '' : 'Imported')}
                >
                  Imported
                </button>
              </div>
            </div>

            {/* Year Minimum */}
            <div>
              <div className="filter-group-header">Minimum Year</div>
              <select 
                className="search-select" 
                style={{ paddingLeft: '0.85rem' }}
                value={minYear}
                onChange={(e) => setMinYear(e.target.value)}
              >
                <option value="">Any Year</option>
                <option value="2024">2024 or Newer</option>
                <option value="2022">2022 or Newer</option>
                <option value="2020">2020 or Newer</option>
                <option value="2018">2018 or Newer</option>
                <option value="2015">2015 or Newer</option>
              </select>
            </div>
          </aside>

          {/* Listings Content */}
          <main>
            {/* Control Bar */}
            <div style={{
              background: '#ffffff',
              border: '1px solid var(--border-color)',
              borderRadius: 'var(--radius-md)',
              padding: '0.85rem 1.25rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '1.5rem',
              flexWrap: 'wrap',
              gap: '0.75rem'
            }}>
              <div style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                Showing <strong>{filteredCars.length}</strong> cars
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                {/* Sort selector */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem' }}>
                  <ArrowUpDown size={15} color="var(--text-muted)" />
                  <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>Sort:</span>
                  <select 
                    style={{ border: 'none', background: 'transparent', fontWeight: 700, color: 'var(--primary)', cursor: 'pointer', outline: 'none' }}
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="recent">Recently Added</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="year-desc">Year: Newest First</option>
                    <option value="mileage-asc">Mileage: Lowest First</option>
                  </select>
                </div>

                {/* View toggle */}
                <div style={{ display: 'flex', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
                  <button 
                    onClick={() => setViewMode('grid')}
                    style={{
                      padding: '0.4rem 0.6rem',
                      background: viewMode === 'grid' ? 'var(--primary)' : 'var(--bg-subtle)',
                      color: viewMode === 'grid' ? '#ffffff' : 'var(--text-secondary)'
                    }}
                    title="Grid View"
                  >
                    <LayoutGrid size={16} />
                  </button>
                  <button 
                    onClick={() => setViewMode('list')}
                    style={{
                      padding: '0.4rem 0.6rem',
                      background: viewMode === 'list' ? 'var(--primary)' : 'var(--bg-subtle)',
                      color: viewMode === 'list' ? '#ffffff' : 'var(--text-secondary)'
                    }}
                    title="List View"
                  >
                    <List size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Results Grid / List */}
            {filteredCars.length === 0 ? (
              <div style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-lg)', padding: '4rem 2rem', textAlign: 'center' }}>
                <Search size={48} color="var(--text-muted)" style={{ margin: '0 auto 1rem', opacity: 0.5 }} />
                <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                  No Vehicles Match Your Criteria
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginBottom: '1.5rem', maxWidth: '450px', margin: '0 auto 1.5rem' }}>
                  Try relaxing your price filters or removing city constraints to discover more options across Pakistan.
                </p>
                <button className="btn btn-primary" onClick={clearAllFilters}>
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className={viewMode === 'grid' ? 'cards-grid' : ''} style={viewMode === 'list' ? { display: 'flex', flexDirection: 'column', gap: '1.25rem' } : {}}>
                {filteredCars.map((car) => (
                  <VehicleCard
                    key={car.id}
                    car={car}
                    layout={viewMode}
                    onViewDetails={(id) => navigate('car-details', { id })}
                    isFavorite={favorites.some(f => f.id === car.id)}
                    onToggleFavorite={onToggleFavorite}
                    isCompared={comparison.includes(car.id)}
                    onToggleCompare={onToggleCompare}
                  />
                ))}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Floating Comparison Drawer if 1 or more cars are selected */}
      {comparison.length > 0 && (
        <div style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          background: 'rgba(15, 23, 42, 0.95)',
          backdropFilter: 'blur(8px)',
          color: '#ffffff',
          padding: '0.85rem 1.5rem',
          zIndex: 99,
          boxShadow: '0 -10px 25px rgba(0,0,0,0.2)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 700 }}>
              <Scale size={20} color="#38bdf8" />
              <span>Comparing {comparison.length} of 3 Vehicles</span>
            </div>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              {comparison.map((carId) => {
                const c = cars.find(item => item.id === carId);
                if (!c) return null;
                return (
                  <div key={carId} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', background: 'rgba(255,255,255,0.12)', padding: '0.25rem 0.6rem', borderRadius: '4px', fontSize: '0.8rem' }}>
                    <span>{c.model}</span>
                    <button onClick={() => onToggleCompare(carId)} style={{ color: '#cbd5e1' }}><X size={12} /></button>
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button 
              className="btn btn-secondary btn-sm" 
              style={{ background: 'transparent', color: '#cbd5e1', borderColor: 'rgba(255,255,255,0.3)' }}
              onClick={() => comparison.forEach(id => onToggleCompare(id))}
            >
              Clear
            </button>
            <button 
              className="btn btn-primary btn-sm"
              onClick={() => navigate('compare')}
            >
              View Comparison Table
            </button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          #mobile-filter-btn {
            display: inline-flex !important;
          }
          .filter-sidebar {
            display: none;
          }
          .filter-sidebar.open {
            display: flex !important;
            margin-bottom: 1.5rem;
          }
        }
      `}</style>
    </div>
  );
}
