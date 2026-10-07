import React, { useState, useMemo } from 'react';
import { Sparkles, Star, CheckCircle, ShieldCheck, ArrowRight, X, Phone, Car } from 'lucide-react';
import { NEW_CARS_LIST } from '../data/mockCars';
import { formatExactPKR } from '../utils/formatters';
import { PAKISTANI_CITIES } from '../data/pakistaniLocations';

export default function NewCarsPage({ navigate }) {
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedBodyType, setSelectedBodyType] = useState('All');
  const [quotationModalCar, setQuotationModalCar] = useState(null);
  const [quoteSuccess, setQuoteSuccess] = useState(false);
  const [quoteData, setQuoteData] = useState({
    name: 'Hamza Farooq',
    phone: '0300-8452199',
    city: 'Lahore',
    preferredVariant: ''
  });

  const brands = ['All', 'Toyota', 'Honda', 'Suzuki', 'Haval', 'KIA', 'Changan'];
  const bodyTypes = ['All', 'Sedan', 'SUV', 'Hatchback'];

  const filteredNewCars = useMemo(() => {
    return NEW_CARS_LIST.filter(car => {
      if (selectedBrand !== 'All' && car.brand !== selectedBrand) return false;
      if (selectedBodyType !== 'All' && car.bodyType !== selectedBodyType) return false;
      return true;
    });
  }, [selectedBrand, selectedBodyType]);

  const handleOpenQuote = (car) => {
    setQuotationModalCar(car);
    setQuoteData({
      ...quoteData,
      preferredVariant: car.variants[0]?.name || ''
    });
    setQuoteSuccess(false);
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    setQuoteSuccess(true);
    setTimeout(() => {
      setQuotationModalCar(null);
      setQuoteSuccess(false);
    }, 3000);
  };

  return (
    <div style={{ background: 'var(--bg-main)', padding: '2.5rem 0 5rem' }}>
      <div className="container">
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', color: 'var(--brand-red)', fontWeight: 800, fontSize: '0.825rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.35rem' }}>
            <Sparkles size={14} /> Official Dealership Showrooms
          </div>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.25rem', fontWeight: 800, color: 'var(--primary)' }}>
            New Cars in Pakistan (2026 Prices & Specs)
          </h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            Check official ex-factory prices, on-road registration estimates, technical specifications, and color options for brand new cars.
          </p>
        </div>

        {/* Filters */}
        <div style={{ background: '#ffffff', border: '1px solid var(--border-color)', borderRadius: 'var(--radius-md)', padding: '1rem 1.5rem', display: 'flex', gap: '2rem', flexWrap: 'wrap', alignItems: 'center', marginBottom: '2.5rem' }}>
          <div>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem' }}>
              FILTER BY MAKE
            </span>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {brands.map(b => (
                <button 
                  key={b} 
                  className={`filter-chip ${selectedBrand === b ? 'active' : ''}`}
                  onClick={() => setSelectedBrand(b)}
                >
                  {b}
                </button>
              ))}
            </div>
          </div>

          <div>
            <span style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--text-muted)', display: 'block', marginBottom: '0.4rem' }}>
              BODY TYPE
            </span>
            <div style={{ display: 'flex', gap: '0.4rem', flexWrap: 'wrap' }}>
              {bodyTypes.map(bt => (
                <button 
                  key={bt} 
                  className={`filter-chip ${selectedBodyType === bt ? 'active' : ''}`}
                  onClick={() => setSelectedBodyType(bt)}
                >
                  {bt}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* New Cars List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {filteredNewCars.map((car) => (
            <div 
              key={car.id}
              style={{
                background: '#ffffff',
                border: '1px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                boxShadow: 'var(--shadow-md)',
                display: 'grid',
                gridTemplateColumns: '1.2fr 1.8fr',
                alignItems: 'stretch'
              }}
              className="new-car-item"
            >
              <div style={{ position: 'relative', background: '#0f172a' }}>
                <img 
                  src={car.image} 
                  alt={car.name} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', top: '1rem', left: '1rem', background: 'rgba(15, 23, 42, 0.85)', backdropFilter: 'blur(4px)', color: '#ffffff', padding: '0.3rem 0.75rem', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: 700 }}>
                  {car.bodyType}
                </div>
              </div>

              <div style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '0.5rem' }}>
                    <div>
                      <span style={{ fontSize: '0.8rem', fontWeight: 800, color: 'var(--brand-red)', textTransform: 'uppercase' }}>
                        {car.brand} Pakistan
                      </span>
                      <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.6rem', fontWeight: 800, color: 'var(--primary)' }}>
                        {car.name}
                      </h3>
                      <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{car.tagline}</p>
                    </div>

                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', fontWeight: 700 }}>Ex-Factory Price</div>
                      <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary)' }}>
                        {car.priceRange}
                      </div>
                    </div>
                  </div>

                  {/* Rating */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem', fontSize: '0.85rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', color: '#f59e0b', fontWeight: 700 }}>
                      <Star size={14} fill="#f59e0b" />
                      <span style={{ marginLeft: '4px' }}>{car.rating}</span>
                    </div>
                    <span style={{ color: 'var(--text-muted)' }}>({car.reviewsCount} owner reviews)</span>
                  </div>

                  {/* Key Specs */}
                  <div style={{ background: 'var(--bg-subtle)', borderRadius: 'var(--radius-md)', padding: '1rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '0.75rem', marginBottom: '1.25rem', fontSize: '0.85rem' }}>
                    <div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>Engine</div>
                      <strong style={{ color: 'var(--primary)' }}>{car.specs.engine}</strong>
                    </div>
                    <div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>Power Output</div>
                      <strong style={{ color: 'var(--primary)' }}>{car.specs.power}</strong>
                    </div>
                    <div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>Fuel Mileage</div>
                      <strong style={{ color: '#10b981' }}>{car.specs.fuelEconomy}</strong>
                    </div>
                    <div>
                      <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>Airbags</div>
                      <strong style={{ color: 'var(--primary)' }}>{car.specs.airbags} SRS</strong>
                    </div>
                  </div>

                  {/* Colors */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
                    <span style={{ fontWeight: 600 }}>Available Colors:</span>
                    <span>{car.colors.join(' • ')}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                  <button 
                    className="btn btn-primary"
                    onClick={() => handleOpenQuote(car)}
                  >
                    Request Quotation / Test Drive
                  </button>
                  <button 
                    className="btn btn-secondary"
                    onClick={() => navigate('used-cars', { make: car.brand, model: car.name.split(' ')[1] })}
                  >
                    View Used {car.brand} {car.name.split(' ')[1]}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Request Quotation Modal */}
      {quotationModalCar && (
        <div className="modal-backdrop" onClick={() => setQuotationModalCar(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '520px' }}>
            <button className="modal-close-btn" onClick={() => setQuotationModalCar(null)}>
              <X size={20} />
            </button>

            {!quoteSuccess ? (
              <form onSubmit={handleQuoteSubmit}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1.25rem' }}>
                  <Car size={24} color="var(--brand-red)" />
                  <div>
                    <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.3rem', fontWeight: 800 }}>
                      Request Price Quotation & Test Drive
                    </h3>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                      {quotationModalCar.brand} {quotationModalCar.name}
                    </span>
                  </div>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label className="search-field-label">Choose Variant</label>
                  <select 
                    className="search-select" 
                    style={{ paddingLeft: '0.85rem' }}
                    value={quoteData.preferredVariant}
                    onChange={(e) => setQuoteData({ ...quoteData, preferredVariant: e.target.value })}
                  >
                    {quotationModalCar.variants.map((v, i) => (
                      <option key={i} value={v.name}>{v.name} - {formatExactPKR(v.price)}</option>
                    ))}
                  </select>
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label className="search-field-label">Full Name</label>
                  <input 
                    type="text" 
                    className="search-input" 
                    style={{ paddingLeft: '0.85rem' }}
                    value={quoteData.name}
                    onChange={(e) => setQuoteData({ ...quoteData, name: e.target.value })}
                    required
                  />
                </div>

                <div style={{ marginBottom: '1rem' }}>
                  <label className="search-field-label">Phone Number</label>
                  <input 
                    type="tel" 
                    className="search-input" 
                    style={{ paddingLeft: '0.85rem' }}
                    value={quoteData.phone}
                    onChange={(e) => setQuoteData({ ...quoteData, phone: e.target.value })}
                    required
                  />
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <label className="search-field-label">Dealership City</label>
                  <select 
                    className="search-select" 
                    style={{ paddingLeft: '0.85rem' }}
                    value={quoteData.city}
                    onChange={(e) => setQuoteData({ ...quoteData, city: e.target.value })}
                  >
                    {PAKISTANI_CITIES.map(c => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                  Submit Quotation Request
                </button>
              </form>
            ) : (
              <div style={{ textAlign: 'center', padding: '1.5rem 0' }}>
                <CheckCircle size={48} color="#10b981" style={{ margin: '0 auto 1rem' }} />
                <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                  Request Received!
                </h4>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                  Authorized 3S Dealership representative in <strong>{quoteData.city}</strong> will contact you at <strong>{quoteData.phone}</strong> with the proforma invoice and booking details.
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .new-car-item {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
}
