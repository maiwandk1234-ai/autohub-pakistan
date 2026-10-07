import React, { useState } from 'react';
import { 
  Search, 
  MapPin, 
  Car, 
  Bike, 
  Wrench, 
  ShieldCheck, 
  ChevronRight, 
  ArrowRight, 
  TrendingUp, 
  CheckCircle, 
  Star, 
  Sparkles,
  Award,
  Zap,
  Sliders
} from 'lucide-react';
import VehicleCard from '../components/VehicleCard';
import BikeCard from '../components/BikeCard';
import PartCard from '../components/PartCard';
import { PAKISTANI_CITIES, BODY_TYPES, CAR_BRANDS } from '../data/pakistaniLocations';
import { POPULAR_MODELS } from '../data/mockCars';
import { formatPKR } from '../utils/formatters';

export default function HomePage({ 
  cars, 
  bikes, 
  parts, 
  reviews, 
  news, 
  navigate, 
  favorites = [], 
  onToggleFavorite,
  comparison = [],
  onToggleCompare,
  onAddToCart,
  onOpenPartDetails 
}) {
  const [activeTab, setActiveTab] = useState('used-cars'); // 'used-cars' | 'new-cars' | 'bikes' | 'auto-parts'
  const [searchMake, setSearchMake] = useState('');
  const [searchCity, setSearchCity] = useState('');
  const [searchPrice, setSearchPrice] = useState('');

  const featuredCars = cars.filter(c => c.featured).slice(0, 4);
  const featuredBikes = bikes.slice(0, 4);
  const featuredParts = parts.slice(0, 4);

  const handleHeroSearch = (e) => {
    e.preventDefault();
    if (activeTab === 'used-cars' || activeTab === 'new-cars') {
      navigate(activeTab, {
        make: searchMake,
        city: searchCity,
        priceMax: searchPrice ? Number(searchPrice) : null
      });
    } else if (activeTab === 'bikes') {
      navigate('bikes', {
        brand: searchMake,
        city: searchCity
      });
    } else {
      navigate('auto-parts', {
        search: searchMake
      });
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="hero-wrapper">
        <div 
          className="hero-bg-overlay"
          style={{ backgroundImage: `url('/assets/hero_banner.jpg')` }}
        />
        <div className="hero-glow" />

        <div className="container hero-content">
          <div className="hero-pill-badge">
            <Sparkles size={15} color="#fb7185" />
            <span>Pakistan’s #1 Trusted Automotive Marketplace</span>
          </div>

          <h1 className="hero-title">
            Find the Right Car, at the <span className="highlight">Right Price</span>
          </h1>

          <p className="hero-subtitle">
            Browse 50,000+ verified used & new cars, certified 150-point inspection reports, genuine auto parts, and motorcycles across Karachi, Lahore, Islamabad, and nationwide.
          </p>

          {/* Search Box */}
          <div className="search-card-box">
            <div className="search-tabs">
              <button 
                type="button"
                className={`search-tab-btn ${activeTab === 'used-cars' ? 'active' : ''}`}
                onClick={() => setActiveTab('used-cars')}
              >
                <Car size={18} /> Used Cars
              </button>
              <button 
                type="button"
                className={`search-tab-btn ${activeTab === 'new-cars' ? 'active' : ''}`}
                onClick={() => setActiveTab('new-cars')}
              >
                <Sparkles size={18} /> New Cars
              </button>
              <button 
                type="button"
                className={`search-tab-btn ${activeTab === 'bikes' ? 'active' : ''}`}
                onClick={() => setActiveTab('bikes')}
              >
                <Bike size={18} /> Bikes
              </button>
              <button 
                type="button"
                className={`search-tab-btn ${activeTab === 'auto-parts' ? 'active' : ''}`}
                onClick={() => setActiveTab('auto-parts')}
              >
                <Wrench size={18} /> Auto Parts
              </button>
            </div>

            <form onSubmit={handleHeroSearch} className="search-grid">
              {/* Make / Model / Keyword */}
              <div className="search-field-group">
                <label className="search-field-label">
                  {activeTab === 'auto-parts' ? 'Search Part or Accessory' : 'Car Make or Model'}
                </label>
                <div className="search-input-wrapper">
                  <Search size={18} className="input-icon" />
                  <input 
                    type="text" 
                    placeholder={
                      activeTab === 'auto-parts' 
                        ? 'e.g. Engine Oil, LED Lights, Floor Mats...' 
                        : activeTab === 'bikes'
                        ? 'e.g. Honda CD 70, Yamaha YBR...'
                        : 'e.g. Toyota Corolla, Honda Civic, Alto...'
                    }
                    className="search-input"
                    value={searchMake}
                    onChange={(e) => setSearchMake(e.target.value)}
                  />
                </div>
              </div>

              {/* City Selection */}
              <div className="search-field-group">
                <label className="search-field-label">All Pakistan / City</label>
                <div className="search-input-wrapper">
                  <MapPin size={18} className="input-icon" />
                  <select 
                    className="search-select"
                    value={searchCity}
                    onChange={(e) => setSearchCity(e.target.value)}
                  >
                    <option value="">All Pakistani Cities</option>
                    {PAKISTANI_CITIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Price Range */}
              <div className="search-field-group">
                <label className="search-field-label">Budget / Price Up To</label>
                <div className="search-input-wrapper">
                  <Sliders size={18} className="input-icon" />
                  <select 
                    className="search-select"
                    value={searchPrice}
                    onChange={(e) => setSearchPrice(e.target.value)}
                  >
                    <option value="">Any Budget</option>
                    <option value="2000000">Up to PKR 20 Lacs</option>
                    <option value="3500000">Up to PKR 35 Lacs</option>
                    <option value="5000000">Up to PKR 50 Lacs</option>
                    <option value="7500000">Up to PKR 75 Lacs</option>
                    <option value="10000000">Up to PKR 1.0 Crore</option>
                    <option value="20000000">Up to PKR 2.0 Crore</option>
                  </select>
                </div>
              </div>

              {/* Submit CTA */}
              <div className="search-field-group" style={{ alignSelf: 'flex-end' }}>
                <button type="submit" className="btn btn-primary btn-lg" style={{ height: '48px', padding: '0 1.75rem' }}>
                  <Search size={18} />
                  <span>Search</span>
                </button>
              </div>
            </form>

            {/* Quick Filter Tags */}
            <div className="quick-tags-row">
              <span className="quick-tag-label">Popular Searches:</span>
              <span className="quick-tag-pill" onClick={() => navigate('used-cars', { make: 'Toyota' })}>
                Toyota Corolla
              </span>
              <span className="quick-tag-pill" onClick={() => navigate('used-cars', { make: 'Honda' })}>
                Honda Civic RS
              </span>
              <span className="quick-tag-pill" onClick={() => navigate('used-cars', { bodyType: 'SUV' })}>
                SUVs in Lahore
              </span>
              <span className="quick-tag-pill" onClick={() => navigate('used-cars', { priceMax: 3000000 })}>
                Cars Under 30 Lacs
              </span>
              <span className="quick-tag-pill" onClick={() => navigate('used-cars', { fuelType: 'Hybrid' })}>
                Hybrid & Electric
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions / Why Choose AutoHub */}
      <section style={{ background: '#ffffff', borderBottom: '1px solid var(--border-color)', padding: '2.5rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ background: 'var(--brand-red-light)', color: 'var(--brand-red)', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <ShieldCheck size={26} />
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                  150-Point Certified Inspection
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                  Digital comprehensive report covering engine compression, suspension, paint thickness, and road test.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ background: '#e0f2fe', color: '#0284c7', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Award size={26} />
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                  100% Verified Sellers
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                  NADRA biometric compliance assistance and verified registration smart card checks.
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <div style={{ background: '#ecfdf5', color: '#10b981', width: '48px', height: '48px', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Zap size={26} />
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.25rem' }}>
                  Instant WhatsApp Connect
                </h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.5' }}>
                  Chat directly with genuine Pakistani car & bike owners without intermediaries.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Browse by Body Type */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Browse Cars by Body Type</h2>
              <p className="section-subtitle">Select from popular vehicle categories in Pakistan</p>
            </div>
          </div>

          <div className="category-cards-grid">
            {BODY_TYPES.map((bt) => (
              <div 
                key={bt.id} 
                className="category-card"
                onClick={() => navigate('used-cars', { bodyType: bt.id })}
              >
                <div className="category-card-icon">
                  <Car size={26} />
                </div>
                <div>
                  <div className="category-card-title">{bt.name}</div>
                  <div className="category-card-count">{bt.count} cars</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Used Cars */}
      <section className="section section-subtle">
        <div className="container">
          <div className="section-header">
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--brand-red)', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                <Sparkles size={14} /> Handpicked Deals
              </div>
              <h2 className="section-title">Featured Used Cars for Sale</h2>
              <p className="section-subtitle">Verified vehicles inspected and recommended by AutoHub experts</p>
            </div>
            <button className="section-view-all" onClick={() => navigate('used-cars')}>
              <span>View All Used Cars</span>
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="cards-grid">
            {featuredCars.map((car) => (
              <VehicleCard
                key={car.id}
                car={car}
                onViewDetails={(id) => navigate('car-details', { id })}
                isFavorite={favorites.some(f => f.id === car.id)}
                onToggleFavorite={onToggleFavorite}
                isCompared={comparison.includes(car.id)}
                onToggleCompare={onToggleCompare}
              />
            ))}
          </div>
        </div>
      </section>

      {/* AutoHub Certified Inspection Feature Banner */}
      <section className="section">
        <div className="container">
          <div className="promo-banner">
            <div>
              <span className="promo-banner-badge">AutoHub Certification Service</span>
              <h2 className="promo-banner-title">
                Buy with 100% Peace of Mind. Book a 150-Point Inspection
              </h2>
              <p className="promo-banner-desc">
                Don’t risk millions on a car with hidden accidental damage or reversed odometers. Our certified automotive engineers inspect every panel, engine cylinder, suspension bush, and gearbox on-site before you pay the seller.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button 
                  className="btn btn-primary btn-lg" 
                  onClick={() => navigate('used-cars')}
                >
                  <ShieldCheck size={18} /> Explore Certified Cars
                </button>
                <button 
                  className="btn btn-secondary btn-lg" 
                  style={{ background: 'rgba(255,255,255,0.1)', color: '#ffffff', borderColor: 'rgba(255,255,255,0.2)' }}
                  onClick={() => navigate('reviews')}
                >
                  Read Inspection Guide
                </button>
              </div>
            </div>

            <div>
              <img 
                src="/assets/inspection_banner.jpg" 
                alt="AutoHub Certified Inspection" 
                className="promo-banner-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Popular Pakistani Car Brands */}
      <section className="section section-subtle">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Popular Car Brands in Pakistan</h2>
              <p className="section-subtitle">Explore vehicles from leading Japanese, Korean, and Chinese automakers</p>
            </div>
          </div>

          <div className="brands-grid">
            {CAR_BRANDS.map((brand) => (
              <div 
                key={brand.id} 
                className="brand-card"
                onClick={() => navigate('used-cars', { make: brand.name })}
              >
                <img src={brand.logo} alt={brand.name} className="brand-card-img" />
                <span className="brand-card-name">{brand.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Models in Pakistan */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2 className="section-title">Most Popular Models</h2>
              <p className="section-subtitle">The highest demanded cars in Pakistan's automotive market</p>
            </div>
            <button className="section-view-all" onClick={() => navigate('used-cars')}>
              <span>Browse All Models</span>
              <ChevronRight size={18} />
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
            {POPULAR_MODELS.map((pm, idx) => (
              <div 
                key={idx}
                style={{
                  background: '#ffffff',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--radius-md)',
                  padding: '1.25rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: 'pointer',
                  transition: 'all var(--transition-fast)'
                }}
                onClick={() => navigate('used-cars', { make: pm.make, model: pm.model })}
              >
                <div>
                  <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.1rem', fontWeight: 700 }}>
                    {pm.make} {pm.model}
                  </h4>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{pm.count}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Starting from</div>
                  <div style={{ fontWeight: 800, color: 'var(--brand-red)', fontSize: '0.95rem' }}>{pm.priceStart}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Car Comparison Teaser */}
      <section className="section section-subtle">
        <div className="container">
          <div className="section-header">
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--brand-red)', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                <TrendingUp size={14} /> Head-to-Head Showdowns
              </div>
              <h2 className="section-title">Car Comparison Spotlight</h2>
              <p className="section-subtitle">Confused between two vehicles? Compare specs, fuel average, and price side by side</p>
            </div>
            <button className="section-view-all" onClick={() => navigate('compare')}>
              <span>Open Comparison Tool</span>
              <ChevronRight size={18} />
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {/* Showdown 1 */}
            <div className="comparison-card">
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--brand-red)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  The Ultimate Sedan Rivalry
                </div>
                <div className="comparison-vs-grid">
                  <div className="comparison-side">
                    <img 
                      src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=400&auto=format&fit=crop&q=80" 
                      alt="Civic RS" 
                      className="comparison-thumb"
                    />
                    <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Honda Civic RS</div>
                    <div style={{ color: 'var(--brand-red)', fontSize: '0.85rem', fontWeight: 800 }}>PKR 98.9 Lacs</div>
                  </div>

                  <div className="comparison-badge-vs">VS</div>

                  <div className="comparison-side">
                    <img 
                      src="https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=400&auto=format&fit=crop&q=80" 
                      alt="Corolla Grande" 
                      className="comparison-thumb"
                    />
                    <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Corolla Grande</div>
                    <div style={{ color: 'var(--brand-red)', fontSize: '0.85rem', fontWeight: 800 }}>PKR 68.5 Lacs</div>
                  </div>
                </div>
              </div>

              <button 
                className="btn btn-outline-red" 
                style={{ width: '100%' }}
                onClick={() => navigate('compare', { carA: 'car-2', carB: 'car-1' })}
              >
                Compare Civic vs Corolla
              </button>
            </div>

            {/* Showdown 2 */}
            <div className="comparison-card">
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--brand-red)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>
                  Crossover SUV Clash
                </div>
                <div className="comparison-vs-grid">
                  <div className="comparison-side">
                    <img 
                      src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=400&auto=format&fit=crop&q=80" 
                      alt="KIA Sportage" 
                      className="comparison-thumb"
                    />
                    <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>KIA Sportage</div>
                    <div style={{ color: 'var(--brand-red)', fontSize: '0.85rem', fontWeight: 800 }}>PKR 66.0 Lacs</div>
                  </div>

                  <div className="comparison-badge-vs">VS</div>

                  <div className="comparison-side">
                    <img 
                      src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=400&auto=format&fit=crop&q=80" 
                      alt="Hyundai Tucson" 
                      className="comparison-thumb"
                    />
                    <div style={{ fontWeight: 700, fontSize: '0.9rem' }}>Hyundai Tucson</div>
                    <div style={{ color: 'var(--brand-red)', fontSize: '0.85rem', fontWeight: 800 }}>PKR 74.0 Lacs</div>
                  </div>
                </div>
              </div>

              <button 
                className="btn btn-outline-red" 
                style={{ width: '100%' }}
                onClick={() => navigate('compare', { carA: 'car-4', carB: 'car-5' })}
              >
                Compare Sportage vs Tucson
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Bikes */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--brand-red)', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                <Bike size={14} /> Pakistani Two-Wheelers
              </div>
              <h2 className="section-title">Popular Motorbikes for Sale</h2>
              <p className="section-subtitle">Explore Honda, Yamaha, Suzuki, and more bikes across Pakistan</p>
            </div>
            <button className="section-view-all" onClick={() => navigate('bikes')}>
              <span>View All Bikes</span>
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="cards-grid">
            {featuredBikes.map((bike) => (
              <BikeCard
                key={bike.id}
                bike={bike}
                onViewDetails={(id) => navigate('bikes', { selectedId: id })}
                isFavorite={favorites.some(f => f.id === bike.id)}
                onToggleFavorite={onToggleFavorite}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Auto Parts & Accessories */}
      <section className="section section-subtle">
        <div className="container">
          <div className="section-header">
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--brand-red)', fontWeight: 800, fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>
                <Wrench size={14} /> Genuine Parts & Upgrades
              </div>
              <h2 className="section-title">Auto Parts & Car Accessories</h2>
              <p className="section-subtitle">Top rated car care kits, Android panels, engine oils with Cash on Delivery</p>
            </div>
            <button className="section-view-all" onClick={() => navigate('auto-parts')}>
              <span>View Auto Store</span>
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="cards-grid">
            {featuredParts.map((part) => (
              <PartCard
                key={part.id}
                part={part}
                onAddToCart={onAddToCart}
                onOpenDetails={onOpenPartDetails}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Sell Your Car CTA Banner */}
      <section className="section">
        <div className="container">
          <div className="promo-banner" style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 100%)' }}>
            <div>
              <span className="promo-banner-badge" style={{ background: '#10b981' }}>Post in 2 Minutes</span>
              <h2 className="promo-banner-title">
                Want to Sell Your Car or Bike Quickly at Best Price?
              </h2>
              <p className="promo-banner-desc">
                List your vehicle for free and get contacted by over 2.5 million genuine Pakistani car buyers. Free instant ad publishing with verified seller badge.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <button 
                  className="btn btn-primary btn-lg"
                  onClick={() => navigate('sell-your-car')}
                >
                  <Car size={18} /> Post Free Ad Now
                </button>
                <button 
                  className="btn btn-secondary btn-lg"
                  style={{ background: 'rgba(255,255,255,0.1)', color: '#ffffff', borderColor: 'rgba(255,255,255,0.2)' }}
                  onClick={() => navigate('used-cars')}
                >
                  Browse Existing Listings
                </button>
              </div>
            </div>

            <div>
              <img 
                src="/assets/sell_banner.jpg" 
                alt="Happy Pakistani Car Seller" 
                className="promo-banner-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Latest Reviews & News Highlights */}
      <section className="section section-subtle">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
            {/* Reviews Column */}
            <div>
              <div className="section-header" style={{ marginBottom: '1.25rem' }}>
                <div>
                  <h3 className="section-title" style={{ fontSize: '1.4rem' }}>Recent Owner Reviews</h3>
                  <p className="section-subtitle">Real experiences by Pakistani car owners</p>
                </div>
                <button className="section-view-all" onClick={() => navigate('reviews')}>
                  <span>All Reviews</span>
                  <ChevronRight size={16} />
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {reviews.slice(0, 2).map((rev) => (
                  <div 
                    key={rev.id} 
                    style={{ background: '#ffffff', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', cursor: 'pointer' }}
                    onClick={() => navigate('reviews')}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                      <span style={{ fontWeight: 700, fontSize: '0.95rem' }}>{rev.carName}</span>
                      <div style={{ display: 'flex', alignItems: 'center', color: '#f59e0b', fontSize: '0.85rem', fontWeight: 800 }}>
                        <Star size={14} fill="#f59e0b" />
                        <span style={{ marginLeft: '3px' }}>{rev.overallRating}</span>
                      </div>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.4', marginBottom: '0.5rem', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      "{rev.reviewText}"
                    </p>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      By {rev.reviewerName} • {rev.reviewerType}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* News Column */}
            <div>
              <div className="section-header" style={{ marginBottom: '1.25rem' }}>
                <div>
                  <h3 className="section-title" style={{ fontSize: '1.4rem' }}>Automotive News & Policy</h3>
                  <p className="section-subtitle">Petrol prices, new model launches, and market trends</p>
                </div>
                <button className="section-view-all" onClick={() => navigate('news')}>
                  <span>All News</span>
                  <ChevronRight size={16} />
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {news.slice(0, 2).map((item) => (
                  <div 
                    key={item.id} 
                    style={{ background: '#ffffff', padding: '1.25rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-color)', cursor: 'pointer' }}
                    onClick={() => navigate('news')}
                  >
                    <div style={{ fontSize: '0.75rem', color: 'var(--brand-red)', fontWeight: 700, marginBottom: '0.25rem' }}>
                      {item.category} • {item.publishedDate}
                    </div>
                    <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1rem', fontWeight: 700, marginBottom: '0.4rem', lineHeight: '1.35' }}>
                      {item.headline}
                    </h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.4', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {item.summary}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
